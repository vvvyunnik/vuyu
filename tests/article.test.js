const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');

const SITE_DIR = path.join(__dirname, '../_site');
const SRC_DIR = path.join(__dirname, '../src');

describe('Article pages', () => {
  test('all article pages have correct structure', () => {
    const articlesDir = path.join(SITE_DIR, 'articles');
    const entries = fs.readdirSync(articlesDir, { withFileTypes: true });
    const articleDirs = entries
      .filter(entry => entry.isDirectory() && !entry.name.startsWith('.'))
      .map(dir => dir.name);

    expect(articleDirs.length).toBeGreaterThan(0);

    articleDirs.forEach(articleDir => {
      const articlePath = path.join(articlesDir, articleDir, 'index.html');
      expect(fs.existsSync(articlePath)).toBe(true);

      const content = fs.readFileSync(articlePath, 'utf8');
      const $ = cheerio.load(content);

      expect($('title').text()).toContain('vuyu.dev');
      expect($('title').text()).toContain(articleDir);
      expect($('h2').length).toBeGreaterThan(0);
      expect($('ul').length).toBeGreaterThan(0);
      expect($('main ul').length).toBe(1);
      expect($('ul li').length).toBeGreaterThan(0);
      expect($('ul li a').length).toBeGreaterThan(0);
      expect($('main ul li a[target="_blank"]').length).toBeGreaterThan(0);
      expect($('a[href="/"]').length).toBe(1);
      expect($('a[href="/articles/"]').length).toBe(1);
    });
  });

  test('all articles are properly built', () => {
    const srcArticlesDir = path.join(SRC_DIR, 'articles');
    const srcArticleFiles = fs.readdirSync(srcArticlesDir)
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace(/\.md$/, ''));

    expect(srcArticleFiles.length).toBeGreaterThan(0);

    srcArticleFiles.forEach(articleName => {
      const builtArticleDir = path.join(SITE_DIR, 'articles', articleName);
      expect(fs.existsSync(builtArticleDir)).toBe(true);

      const builtArticleFile = path.join(builtArticleDir, 'index.html');
      expect(fs.existsSync(builtArticleFile)).toBe(true);

      const content = fs.readFileSync(builtArticleFile, 'utf8');
      const $ = cheerio.load(content);

      expect($('h2').text()).toBe(`${articleName}.md`);
    });
  });
});

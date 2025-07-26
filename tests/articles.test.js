const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');

const SITE_DIR = path.join(__dirname, '../_site');

describe('Articles page', () => {
  test('has correct structure', () => {
    const articlesPath = path.join(SITE_DIR, 'articles/index.html');
    expect(fs.existsSync(articlesPath)).toBe(true);

    const content = fs.readFileSync(articlesPath, 'utf8');
    const $ = cheerio.load(content);

    expect($('title').text()).toContain('vuyu.dev');
    expect($('.terminal-prompt').text().trim()).toBe('ls ~/posts');

    expect($('ul').length).toBeGreaterThan(0);
  });
});

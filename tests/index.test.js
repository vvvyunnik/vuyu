const fs = require('fs-extra');
const path = require('path');
const cheerio = require('cheerio');

const SITE_DIR = path.join(__dirname, '../_site');

describe('Index page', () => {
  test('has correct structure', () => {
    const indexPath = path.join(SITE_DIR, 'index.html');
    expect(fs.existsSync(indexPath)).toBe(true);

    const content = fs.readFileSync(indexPath, 'utf8');
    const $ = cheerio.load(content);

    expect($('title').text()).toContain('vuyu.dev');
    expect($('.about-section').length).toBe(1);
    expect($('.main-photo').length).toBe(1);
    expect($('.terminal-prompt').length).toBeGreaterThan(0);

    expect($('a[href="https://github.com/vvvyunnik"]').length).toBe(1);
    expect($('a[href="https://www.linkedin.com/in/uyunnik"]').length).toBe(1);
  });
});

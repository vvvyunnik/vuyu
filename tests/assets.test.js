const fs = require('fs-extra');
const path = require('path');

const SITE_DIR = path.join(__dirname, '../_site');

describe('Assets', () => {
  test('CSS files are properly built', () => {
    const cssDir = path.join(SITE_DIR, 'css');
    expect(fs.existsSync(cssDir)).toBe(true);

    const mainCssPath = path.join(cssDir, 'main.css');
    expect(fs.existsSync(mainCssPath)).toBe(true);

    const terminalCssPath = path.join(cssDir, 'terminal.min.css');
    expect(fs.existsSync(terminalCssPath)).toBe(true);

    const mainCssContent = fs.readFileSync(mainCssPath, 'utf8');
    expect(mainCssContent.length).toBeGreaterThan(0);
  });

  test('Image assets are properly built', () => {
    const assetsDir = path.join(SITE_DIR, 'assets');
    expect(fs.existsSync(assetsDir)).toBe(true);

    const profileImagePath = path.join(assetsDir, 'me.png');
    expect(fs.existsSync(profileImagePath)).toBe(true);

    const faviconPath = path.join(SITE_DIR, 'favicon.ico');
    expect(fs.existsSync(faviconPath)).toBe(true);
  });
});

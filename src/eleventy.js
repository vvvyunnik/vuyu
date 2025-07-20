const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-MM-dd") => {
    return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(format);
  });

  eleventyConfig.addPassthroughCopy({ "src/assets/favicon.ico": "favicon.ico" });

  eleventyConfig.addPassthroughCopy({
    "node_modules/terminal.css/dist/terminal.min.css": "css/terminal.min.css",
    "src/assets": "assets",
    "src/css": "css"
  });


  eleventyConfig.addCollection("articles", api =>
    api.getFilteredByGlob("src/articles/*.md")
      .sort((a, b) => b.date - a.date)
  );

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};

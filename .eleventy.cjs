// .eleventy.cjs

const pluginRss = require("@11ty/eleventy-plugin-rss"); // Keep this if you installed it

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(pluginRss); // Keep this if you installed it

  // Passthrough copy for CSS (Keep this)
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  // --- BEGIN Custom Date Filters ---
  // Filter for YYYY-MM-DD (for <time> datetime attribute)
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    const date = new Date(dateObj); // Ensure it's a Date object
    const year = date.getUTCFullYear(); // Use UTC methods to prevent timezone offset issues
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `<span class="math-inline">\{year\}\-</span>{month}-${day}`;
  });

  // Filter for "Month Day, Year" (readable format)
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    // Use toLocaleDateString for robust, localized formatting
    // Pass dateObj directly, ensure UTC interpretation to avoid off-by-one day errors
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC' // Use UTC timezone to match Eleventy's likely date handling
    });
  });
  // --- END Custom Date Filters ---

  // Specify input and output directories, etc. (Keep this)
  return {
    dir: {
      input: "src",
      // includes: "./_includes", // Or "_includes" if inside src - ensure path is correct!
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
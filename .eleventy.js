const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

// Import filters
const upperCaseWord = require('./js/filters/uppercaseWord.js');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  
  eleventyConfig
    .addPassthroughCopy("img")
    .addPassthroughCopy("css")
    .addPassthroughCopy("js");
  
  eleventyConfig.addFilter("upperCaseWord", upperCaseWord);
};
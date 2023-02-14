module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  // add favicon
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  return {
    passthroughFileCopy: true,
  };
};

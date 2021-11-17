module. exports
= function (eleventyConfig) {
eleventyConfig.addPassthroughCopy("./src/css/");
eleventyConfig.addWatchTarget("./src/css/");
eleventyConfig.addPassthroughCopy("./src/images/");
eleventyConfig.addPassthroughCopy("./SIC/js/");
// Return your Object options:
return {
dir: {
input: "src",
output: "public"
}
}
};
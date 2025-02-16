module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("assets");

    eleventyConfig.addCollection("school", function(collectionApi) {
      const order = ["skapfhs", "videregående", "tidligereskolegang"];
      return collectionApi.getFilteredByGlob("src/school/*.md").sort(function(a, b) {
        return order.indexOf(a.fileSlug) - order.indexOf(b.fileSlug);
      });
    });
    
    return {
        dir: {
            input: "src",
            includes: "../_includes",
            output: "_site"
        }
    };
};

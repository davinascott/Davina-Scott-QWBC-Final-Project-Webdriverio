module.exports = [
    {
        scenario: "should be able to perform partial word search",
        searchterm: "swe",
        results : ['Quality Hooded Sweatshirt','Quality Sweatshirt']
    },
    {
        scenario: "should be able to perform full word search",
        searchterm: "Quality Sweatshirt",
        results : ['Quality Sweatshirt']
    },
    {
        scenario: "should not be able to search using category keywords",
        searchterm: "Hats",
        results : []
    },

]
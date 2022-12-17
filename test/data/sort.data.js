module.exports = [
    {
        scenario: "Sort A-Z",
        selection: "A to Z",
        results : ['Dell Laptop','Gray Couch','HP Laptop','Mackbook Pro','Quality Blue Shoes','Quality Cargo Pants','Quality Fitted Hat','Quality Heal Shoes','Quality Hooded Sweatshirt','Quality Jeans Pants','Quality Kids Tshirt','Quality Mousepad','Quality Mug','Quality Pillow','Quality Pink Pants','Quality Stylish Shoes','Quality Sweatshirt','Quality Trucker Hat','Quality Tshirt','Quality Vneck','Red Couch','White Couch']
    },
    {
        scenario: "Sort by category:Pants",
        selection: "Pants",
        results : ['Quality Pink Pants','Quality Cargo Pants','Quality Jeans Pants']
    },
    {
        scenario: "should not be able to search using category keywords",
        searchterm: "Hats",
        results : []
    },

]
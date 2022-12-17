# Authentication:
Verify that a user can log in with valid credentials
Verify that a user is unable to log in with invalid credentials
Verify the Forget password feature
Verify that a user can successfully sign up with valid credentials
Verify that a user cannot sign up with invalid credential
Verify that user cannot log in or sign up if mandatory fields are blank
Verify that a user cannot log in or sign up with an incorrect email format
Verify that a user can log-in with a third-party (Google)
* Rationale: The selected test cases are the mostly used scenarios with respect to Authentication. They cover both negative and positive scenarios.

# Add to Cart
Verify that a single item can be added to cart from the home page
Verify that multiple items can be added to cart from the home page
Verify that an add to cart button is present for each product
Verify that a single item can be added to cart from the product details page
Verify that multiple items can be added to cart from the product details page
Verify that each product quantity cannot drop below one
Verify that a user can increment and decrement product quantity from the homepage
* Rationale: Since the add to cart and the cart functionality are separated, I chose to check the various locations from which a user can add items to the cart as well as checking the function of single  and multiple items to cart respectively.

# Cart
Verify that the user can remove an item from cart
Verify that the user can reduce the quantity
Verify that the user can increase the quantity
Verify that if there is one item in the cart and the reduce button is clicked, then the item is removed from the cart
Verify there is a checkout button present and active
Verify that the price is correctly reflected
Verify the correct amount of items is shown in the cart icon
* Rationale: The cart is the first gateway in the checkout process. I chose to add the remove from cart as well as increase and decrease items as well as checking the checkout button since this is the only area that those actions can be performed. 

# Product Gallery Homepage
Verify that if there is an alternate image it is displayed on hover for each product
Verify that each product displayed has a product title associated with it
Verify that sort is element is visible
Verify that the search is element is visible
Verify that category filter is element is visible
Verify that the nav bar is visible on the home page
Verify that the embedded youtube video can be played 
* Rationale: I chose to do a basic check of each of the filter and sort actions as those are the main features of the homepage along with product display.

# Product Details 
Verify that a product name is displayed
Verify that a product description is displayed
Verify that a price is displayed
Verify that quantity is displayed
Verify that the add to cart button is displayed and active
Very that a product image is displayed
Verify that the category tag is displayed
* Rationale: As product details has to do with a specific product, I chose to do do a quick check that each part of the details is displayed along with the product image/images.

# Checkout
Verify that the user cannot continue to payment without entering the mandatory fields
Verify that the order summary is correctly displayed
Verify that the the user can edit the order from the checkout page 
Verify that the user is able to edit billing information
Verify that even though a user is able to acces the checkout page via url, that the user cannot checkout an empty cart
Verify that a valid email address using the format someemail@domain.com
Verify that an order that order cannot be placed without a valid date in the card section
* Rationale: The checkout portion of the application is more data/form oriented. I chose to check the input details for mandatory fields and correctness. 

# Filter and Sort
Verify that the products can be sorted in ascending order by product name
Verify that the products can sorted in descending order by product name
Verify that the products can be sorted in ascending order by price
Verify that the products can sorted in descending order by price
Verify that the products can be sort by the shirts category 
Verify that the products can be sort by the pants category
Verify that the products can be sort by the hats category
Verify that the products can be sort by the shoes category
Verify that the products can be sort by the sofa/couch category
Verify that the products can be sort by the laptops category     
Verify that filer and sort functionalities can be combined
Verify that the reset filters button clears all applied filters and search
* Rationale: These tests will provide an indepth look at the tests that are defined in the Product page section and check the functionality of the categories and sort options provided by the application.



# Search
Verify that a user can search by using partial word search
Verify that the user can perform a full search using multiple words
Verify that the user cannot search by category keywords
Verify that user is unable to search using word found in the product description
Verify that a user can search for a product using both upper and lowercase characters
* Rationale: These tests will provide an indepth look at the tests that are defined in the Product page section and check the functionality of search. 

# Contact
Verify that the contact form cannot be submitted without the mandatory fields
Verify that the Linkedin link/icon redirects to the correct url
Verify that the twitter link/icon redirects to the correct url
Verify that the form cannot be submitted with an incorrect email format
Verify that that after completing  with valid information and submitting the contact form, a pop-up is presented.
* Rationale: The checkout portion of the application is more data/form oriented. I chose to check the input details for mandatory fields and correctness.


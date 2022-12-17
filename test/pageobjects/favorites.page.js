
const Page = require("./page")

class FavoritesPage extends Page{

    //Selctors from favourites page
    get favouritesHeading() {
        return $('//*[@class="chakra-heading css-11cq7yk"]');
    }

    get emptyFavoritesMessage() {
        return $('(//*[@class="chakra-heading css-kmq9po"])[2]');
    }

    get favoritesRemoveBtn() {
        return $('//*[@id="remove-favorite-btn"]')
    }
    
    //favorites methods

    async removeFromFavoritesPage() {
        await this.favoritesRemoveBtn.click();
    }

}
module.exports =  new FavoritesPage();
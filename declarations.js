// Change the variables below according to your specific WooCommerce website! 
// The variables that have actual values, will usually work out of the box.
// You still have to make sure that this is the case with your website!

var pixelID = 'insert your Pixel ID here';

var OGPageTitle = 'meta[property="og:title"]';

// variables for prodListAddToCart() function
var thumbnailAddToCartButtons = 'li.product.type-product a.button.add_to_cart_button.ajax_add_to_cart';
var thumbnailAddToCartProductId = 'data-product_id'; //  we getAtribute
var thumbnailAddToCartDetailsParent = 'insert your selector here'; // parent of Name and Price
var thumbnailProductName = 'insert your selector here'; // we get inner text
var thumbnailProductPrice = 'ins .woocommerce-Price-amount'; // we parse inner text as float

var ajaxThumbnailPrice = 'li.product.post-POSTID .product-title-price-wrap ins' //postid will be replaced
var ajaxProductPrice = '#product-POSTID div.summary form button.single_add_to_cart_button' //postid will be replaced


// variables for trackProductViewAndProductCart() function
var breadcrumbsContainer = 'insert your selector here' // we get innerText split by breadcrumbCharacter
var breadcrumbCharacter = 'insert your selector here';
var productPagePrice = 'meta[property="product:sale_price:amount"]' // we parse content as int

var productPageAddToCartButtons = '.single_add_to_cart_button' // we query selector all
var productPageQantity = '.quantity input[type=number]' // parse value as int


// variables for main procedure
var homepageUrl = 'insert your base url here';
var categoryPageUrl = '/product-category/';
var categoryPageName = OGPageTitle; //we get content
var categoryPageNameRemove = ['insert your selector here']; // insert here substrings of the OG:title tha you wish to be removed from Category page name

var productPageUrl = '/product/';

var searchPageUrl = '/?s=';
var searchTerm = OGPageTitle; //get content
var searchPageTermRemove = ['insert your selector here']; //insert here substrings of the OG:title tha you wish to be removed from the searchString


var cartPageUrl = '/cart/';
var checkoutPageUrl = '/checkout/';
var orderReceivedUrl = '/order-received/';
var checkoutPageValue = '#order_review tr.order-total span' // parse innerText as float
var checkoutPageProducts = '#order_review tbody td.product-name > strong';
var checkoutQuantityMultiplier = 'insert your character here';
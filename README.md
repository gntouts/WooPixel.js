# WooPixel.js
Simple & hacky client-side script to add a Facebook Pixel to your WooCommerce website. You need to include both WooPixel.js and declarations.js to your webpage for it to work. 

## Usage
Download declarations.js and change the values according to your website. Insert the created script into the ```head``` element of your website.
Add ```https://cdn.jsdelivr.net/gh/gntouts/WooPixel.js@1.0.0/WooPixel.min.js``` into the `head` element of your website.
Done!

## Warning
Relies solely on css selectors, so be aware that changes to the theme or any other updates that may alter the class or id of your website's elements will probably cause failure.

For the time being, the entire post-purchase functionality is based on the Skroutz Analytics script. If your website doesn't have the Skroutz Analytics plugin, this script will not log any purchases! 

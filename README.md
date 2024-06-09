# PRODUCT LIST Component (TAILWIND CSS version)

The Product List Component is designed to enhance your Shopify storefront by showcasing your selected list of products in a customizable and visually appealing manner. This component allows you to choose between a grid or slider layout, making it versatile for various display preferences. It is optimized for both desktop and mobile devices, ensuring a seamless user experience across all platforms.

## Features

 - **Layout Options**: Choose between grid or slider layout to display selected set of products.
 - **Toggle Pagination Dots**: Option to show or hide slider dots for navigation.
 - **Toggle Pagination Arrows**: Option to enable or disable navigation arrows.
 - **Autoplay Feature**: Option to enable autoplay with customizable intervals.


## Dependencies
 - **Tailwind CSS**: A utility-first CSS framework for rapid UI development. https://tailwindcss.com/
 - **Splide JS**: A lightweight and flexible slider library.https://splidejs.com/


## Implementation Steps

  - ### Step 1: 
    Create a file named product-list.liquid under Sections. Copy the code from product-list.liquid and paste it into the product-list.liquid file.
  - ### Step 2:
    Create product-list.css under **Assets**. Copy the code from product-list.css and paste it in the product-list.css file.
  - ### Step 3: 
	  Create product-list.js under **Assets**. Copy the code from product-list.js and paste it in the product-list.js file.
  - ### Step 4:
    Add the following CDN links in your theme.liquid file within the <head> tag if not already included:
    
    `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css">`
    
    `<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>`


# Important Notes

>  - The component employs its own styling. For further optimization, consider using the classes provided by the
> theme.
>  - The component utilizes the splide.js slider. If your theme already includes a different slider library, you should consider using that to
> maintain consistency.

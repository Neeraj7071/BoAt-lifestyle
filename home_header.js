shop=[{image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_01_360x.png?v=1602142415"},{image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_02_360x.png?v=1602142415"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/New-Category-Banners_07_360x.png?v=1611569935"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_03_360x.png?v=1602142415"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_04_360x.png?v=1602142415"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_05_360x.png?v=1602142415"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_06_360x.png?v=1602142415"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Trebel_catgry_02_360x.png?v=1615033049"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_08_360x.png?v=1602142415"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop_360x.png?v=1624859990"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Immortal_category_Image_360x.png?v=1626094103"}]


    var shop_list=document.getElementsByClassName("boat_more_list")[0];
    var shop_div=document.createElement("div");
    shop.map(function(elem){
    	var img=document.createElement("img");
    	img.setAttribute("src",elem.image);
    	img.setAttribute("style","width: 320px;height: 150px;")
    	shop_div.append(img);
    })
    shop_list.append(shop_div)
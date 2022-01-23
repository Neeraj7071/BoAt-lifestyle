shop=[{image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_01_360x.png?v=1602142415",link:"cat1()"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_02_360x.png?v=1602142415",link:"cat2()"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/New-Category-Banners_07_360x.png?v=1611569935",link:"cat3()"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_03_360x.png?v=1602142415",link:"cat4()"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_04_360x.png?v=1602142415",link:"cat5()"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_05_360x.png?v=1602142415",link:"cat6()"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_06_360x.png?v=1602142415",link:"cat7()"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Trebel_catgry_02_360x.png?v=1615033049",link:"cat8()"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/category_08_360x.png?v=1602142415",link:"cat9()"},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/MISFIT-shop_360x.png?v=1624859990",link:""},
    {image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/collections/Immortal_category_Image_360x.png?v=1626094103",link:""}]


    var shop_list=document.getElementsByClassName("boat_more_list")[0];
    var shop_div=document.createElement("div");
    shop.map(function(elem){
    	var img=document.createElement("img");
    	img.setAttribute("src",elem.image);
        // var bt=document.createElement("button");
        // bt.setAttribute("style","border:none");
        img.setAttribute("onclick",elem.link);
    	img.setAttribute("style","width: 320px;height: 150px;")
        // bt.append(img)
    	shop_div.append(img);
    })
    shop_list.append(shop_div)
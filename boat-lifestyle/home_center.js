var slido_data=[{image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD111_mob_SHOP-NOW_720x.jpg?v=1642400963",link:"cat1()"},
{image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Marvel_live_mob_b514c8e1-7968-4aac-856b-5595b41e5b4d_720x.jpg?v=1640158006",link:"cat2()"},
{image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_s-best__Mobile_1300x1100_1_0da57bb2-e888-485d-9c3d-b14599bec590_1512x.jpg?v=1640600962",link:"cat3()"},
{image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Watch-Matrix_mob_1512x.jpg?v=1642573277",link:"cat4()"},
{image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/AD181_mob_SHOP-NOW_720x.jpg?v=1642400936",link:"cat6()"},
{image:"https://cdn.shopify.com/s/files/1/0057/8938/4802/files/BIRA_wbanner_2_1512x.jpg?v=1642676794",link:"cat7()"}];
add_slido(slido_data);

function add_slido(data){
  var ul=document.getElementById("slideWrap");
  data.map(function(elem){
    var li=document.createElement("li");
    var img=document.createElement("img");
    img.setAttribute("src",elem.image);
    
    // var bt=document.createElement("button");
    img.setAttribute("onclick",elem.link);
    // bt.setAttribute("style","border:none");

    // img.addEventListener("click",elem.link)
    img.setAttribute("style","width:1500px;height:600px;margin-top:0;margin-left:0;")
    // bt.append(img);
    li.append(img)
    ul.append(li);
  })
}

var responsiveSlider = function() {

var slider = document.getElementById("slider");
var sliderWidth = slider.offsetWidth;
var slideList = document.getElementById("slideWrap");
var count = 1;
var items = slideList.querySelectorAll("li").length;
var prev = document.getElementById("prev");
var next = document.getElementById("next");

window.addEventListener('resize', function() {
  sliderWidth = slider.offsetWidth;
});

var prevSlide = function() {
  if(count > 1) {
    count = count - 2;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
  else if(count = 1) {
    count = items - 1;
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
};

var nextSlide = function() {
  if(count < items) {
    slideList.style.left = "-" + count * sliderWidth + "px";
    count++;
  }
  else if(count = items) {
    slideList.style.left = "0px";
    count = 1;
  }
};

next.addEventListener("click", function() {
  nextSlide();
});

prev.addEventListener("click", function() {
  prevSlide();
});

setInterval(function() {
  nextSlide()
}, 3000);

};
 
window.onload = function() {
responsiveSlider();  
}

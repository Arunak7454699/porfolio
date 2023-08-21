const header = document.querySelector('#word');
let text ='developer';
let endValue=1;
isFarwards=true
const id=setInterval(function(){
  header.textContent = text.substring(0,endValue) ;
  if(isFarwards){
    endValue++;

  }else{
    endValue--;
  }
   
 if(endValue>text.length+10){
     isFarwards=false;
 }
 if(endValue<0){
  isFarwards=true;
 }
  console.log(endValue);

},60
)

// document.addEventListener("DOMContentLoaded",() =>{
//   window.scroll(function(){
//     var header = document.getElementById
//       // sticky navbar on scroll script
//       if(this.scrollY > 20){
//           '.navbar'.addClass("sticky");
//       }else{
//           $('.navbar').removeClass("sticky");
//       }
      
//       // scroll-up button show/hide script
//       if(this.scrollY > 500){
//           $('.scroll-up-btn').addClass("show");
//       }else{
//           $('.scroll-up-btn').removeClass("show");
//       }
//   });

//   // slide-up script
//   $('.scroll-up-btn').click(function(){
//       $('html').animate({scrollTop: 0});
//       // removing smooth scroll on slide-up button click
//       $('html').css("scrollBehavior", "auto");
//   });

//   $('.navbar .menu li a').click(function(){
//       // applying again smooth scroll on menu items click
//       $('html').css("scrollBehavior", "smooth");
//   });

//   // toggle menu/navbar script
//   $('.menu-btn').click(function(){
//       $('.navbar .menu').toggleClass("active");
//       $('.menu-btn img').toggleClass("active");
//   });

let slideIndex = 0;
const slider =  document.querySelectorAll('.slid')
const totaleSlides = slider.length

function showSlide(){
   slider.forEach((slider,index)=>{
       
      if(index === slideIndex){
         slider.style.display = "block"
        }
        else{
      slider.style.display = "none"
    }
    
 })   

}
function preSlid(){
   slideIndex--
   showSlide()
}
function nextSlid(){
  slideIndex++
  if(slideIndex===8)
  {
   slideIndex=0;
  }
  showSlide()
}
showSlide()

///slider timer
setInterval(()=>{
   nextSlid()
},5000)


//  i am facing this problem 
// //products icons 
// function productsIcons() {
//    const laptops= document.getElementById('Laptops'); 
 
//      laptops.addEventListener('click', (e) =>{
//       window.location.href="https://kohinoorelectronics.com/shop/computers/"
//      });

//      const condtinoer = document.getElementById('condtinoer'); 
 
//      condtinoer.addEventListener('click', (e) =>{
//       window.location.href="https://kohinoorelectronics.com/shop/air-conditioner/"
//      });
      
//      const smartPhone = document.getElementById('smartPhone'); 
//      smartPhone.addEventListener('click', (e) =>{
//       window.location.href="https://kohinoorelectronics.com/shop/mobiles/"
//      });
//      const Microwaves = document.getElementById('Microwaves'); 
//      Microwaves.addEventListener('click', (e) =>{
//       window.location.href="https://kohinoorelectronics.com/shop/microwaves//"
//      });
//      const Headphone = document.getElementById('Headphone'); 
//      Headphone.addEventListener('click', (e) =>{
//       window.location.href="https://kohinoorelectronics.com/shop/accessories/"
//      });
//      //trending cards
//      const tCLSeriesTv = document.getElementById('tCLSeriesTv'); 
//      tCLSeriesTv.addEventListener('click', (e) =>{
//       window.location.href="https://kohinoorelectronics.com/product/3334/tcl-c-series-140-cm-55-inch-qled-4k-ultra-hd-google-tv-with-dolby-vision-2024-model-55c655/"
//      });
//      const tv2 = document.getElementById('tv2'); 
//      tv2.addEventListener('click', (e) =>{
//       window.location.href="https://kohinoorelectronics.com/product/3345/tcl-189-cm-75-inch-4k-uhd-qled-smart-google-tv-with-dolby-atmos-2024-model-75p755pro/"
//      });
//      const tv4 = document.getElementById('tv4'); 
//      tv4.addEventListener('click', (e) =>{
//       window.location.href="https://kohinoorelectronics.com/product/3342/tcl127-cm-50-inch-4k-ultra-hd-led-google-tv-with-dolby-vision-and-dolby-atmos-2024-model-50p755/"
//      });
//    }           
//  productsIcons();

 const linksId =()=>{
   const links = {
     Laptops: 'https://kohinoorelectronics.com/shop/computers/',
     condtinoer: 'https://kohinoorelectronics.com/shop/air-conditioner/',
     smartPhone: 'https://kohinoorelectronics.com/shop/mobiles/',
     Microwaves: 'https://kohinoorelectronics.com/shop/microwaves/',
     Headphone : 'https://kohinoorelectronics.com/shop/accessories/',
     tCLSeriesTv: 'https://kohinoorelectronics.com/product/3334/tcl-c-series-140-cm-55-inch-qled-4k-ultra-hd-google-tv-with-dolby-vision-2024-model-55c655/',
     tv3 : 'https://kohinoorelectronics.com/product/3345/tcl-189-cm-75-inch-4k-uhd-qled-smart-google-tv-with-dolby-atmos-2024-model-75p755pro/',
     tv4 : 'https://kohinoorelectronics.com/product/3342/tcl127-cm-50-inch-4k-ultra-hd-led-google-tv-with-dolby-vision-and-dolby-atmos-2024-model-50p755/',
     wahsingMachine : "https://kohinoorelectronics.com/shop/home-appliances/washing-machine/",
     LedTv: "https://kohinoorelectronics.com/shop/home-entertainment/televisions/",
     Ac : "https://kohinoorelectronics.com/shop/air-conditioner/brand/",
     fridge : "https://kohinoorelectronics.com/shop/home-appliances/refrigerator/"
   } 
   const linkIds = Object.keys(links)
   linkIds.forEach(id=>{
     const element = document.getElementById(id)
     if(element){
       element.addEventListener('click',(e)=>{
    window.location.href=links[id]
  })
    } 
   })
}
linksId()








var ElBtn = document.querySelector(".hero__header-btn-dark");
ElBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
})


var Btn= document.querySelector(".hero__header-btn");
Btn.addEventListener("click", function(){
    document.body.classList.toggle("open")
})
$(document).ready(function(){
    $('.customers__list').slick({
        dots: true,
        infinite: false,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
  });








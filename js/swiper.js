     
  var mySwiper = new Swiper ('.swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    
    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay:true,//等同于以下设置
   autoplay: {
      delay: 1000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
      }

     
  })        
 
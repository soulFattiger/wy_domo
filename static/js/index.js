var mySwiper = new Swiper ('.swiper-container', {
  loop: true, // 循环模式选项
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
  },
})

var footerItems = document.getElementsByClassName('footerItem')
var mains = document.getElementsByClassName('main')
for (let i = 0; i <footerItems.length ; i++) {
  footerItems[i].onclick = function () {
    for(var j = 0; j < footerItems.length; j++){
      mains[j].className = "main"
    }
    mains[i].className = "main show"
  }
}

var stars = document.getElementsByClassName('star')
var rating = document.getElementsByClassName('rating')[0].innerText
var onNum = Math.floor(rating)
var halfNum = Math.round(rating) - onNum
for (var n = 0; n <stars.length; n++) {
  if (n<onNum) {
    stars[n].classList.add("on")
  }else if(n<halfNum+onNum){
    stars[n].classList.add("half")
  }
}


<template>
  <div id="shop_cart" class="main">
        <section class="shop_cart-container">
          <header class="shop_cart-header">
            <span>购物车</span>
            <a href="javascript:void(0)">领券</a>
          </header>
          <div class="shop_cart-main">
           <div class="shop_cart-list">
             <div class="cart-item">
               <i class="iconfont icon-point-copy"></i>
               <span>30天无忧退货</span>
             </div>
             <div class="cart-item">
               <i class="iconfont icon-point-copy"></i>
               <span>48小时无忧退款</span>
             </div>
             <div class="cart-item">
               <i class="iconfont icon-point-copy"></i>
               <span>满88元免邮费</span>
             </div>
           </div>
           <img class="shop_cart-img" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="cartImg">
            <div class="add-loginBtn">
              <span class="goto-add">去添加点什么吧</span>
              <div class="login-btn">
                <a href="javascript:;">登录</a>
              </div>
            </div>
          </div>
        </section>
      </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
   #shop_cart
      background-color #f4f4f4
      height 100%
      .shop_cart-container
        position relative
        height 100%
        .shop_cart-header
          display flex
          justify-content space-between
          align-items center
          height 25px
          padding 10px 20px
          background-color #fff
          span
            font-size 18px
            color #333333
          a
            width 90px
            height 30px
            font-size 16px
            line-height 30px
            text-align right
        .shop_cart-main
          .shop_cart-list
            display flex
            justify-content space-between
            align-items center
            height 30px
            padding 0 10px
            .cart-item
              display flex
              align-items center
              font-size 12px
              color #666
              i
                width 10px
                height 10px
                font-size 10px
                margin-right 10px
          .shop_cart-img
            position absolute
            top 165px
            left 50%
            transform translate(-50%, 50%)
            width 150px
            height 150px
          .add-loginBtn
            position absolute
            top 369px
            left 74px
            .goto-add
              display block
              font-size 14px
              color #999
              margin-bottom 15px
              text-align center
            .login-btn
              width 230px
              height 40px
              text-align center
              line-height 40px
              background-color red
              a
                font-size 16px
                color #fff
</style>

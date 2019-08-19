<template>
  <div id="personal" class="main">
        <div class="header">
          <span class="iconfont icon-fangzi left"></span>
          <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
          <span class="right">
            <i class="iconfont icon-lunkuodasan-2"></i>
            <i class="iconfont icon-gouwuchekong"></i>
          </span>
        </div>
        <div class="personal_container">
          <div class="wy_logo">
            <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="user_login">
            <div class="phone_login">
              <i class="iconfont icon-shouji"></i>
              <span>手机号快捷登录</span>
            </div>
            <div class="e-mail_login">
              <i class="iconfont icon-youjian"></i>
              <span>邮箱账号登录</span>
            </div>
          </div>
          <ul class="personal_list">
            <li class="personal_item">
              <i class="iconfont icon-weixin"></i>
              <span>微信</span>
            </li>
            <li class="personal_item">
              <i class="iconfont icon-QQ"></i>
              <span>QQ</span>
            </li>
            <li class="personal_item">
              <i class="iconfont icon-weibo"></i>
              <span>微博</span>
            </li>
          </ul>
        </div>
      </div>
</template>

<script type="text/ecmascript-6">
export default {
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #personal
      background-color #f4f4f4
      height 100%
      .header
        background-color #fff
        width 100%
        height 40px
        display flex
        justify-content space-between
        align-items center
        .left
          font-size 23px
          margin-left 5px
        img
          width 80px
          height 25px
          margin 3px 0px 0px 15px
        .right
          .iconfont
            font-size 25px
            margin-right 9px
      .personal_container
        position relative
        .wy_logo
          position absolute
          top 85px
          left 120px
          width 130px
          height 50px
          img
            width 100%
            height 100%
        .user_login
          position absolute
          top 250px
          left 45px
          .phone_login
            width 300px
            height 40px
            text-align center
            line-height 40px
            background-color red
            margin-bottom 18px
          .e-mail_login
            width 298px
            height 40px
            text-align center
            line-height 40px
            border 1px solid red
        .personal_list
          position absolute
          top 550px
          left 88px
          width 200px
          height 20px
          display flex
          flex-wrap nowrap
          justify-content space-between
          .personal_item
            width 33%
            text-align center
            color #7F7F7F
            border-right 1px solid #979797
          :last-child
            border-right none
</style>

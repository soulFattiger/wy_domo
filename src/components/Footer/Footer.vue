<template>
   <footer id="footer">
      <div class="footerItem" :class="{on: $route.path==='/home'}" @click="goTo('/home')">
        <i class="iconfont icon-yemian"></i>
        <span>首页</span>
      </div>
      <div class="footerItem" :class="{on: $route.path==='/class'}" @click="goTo('/class')">
        <i class="iconfont icon-guizi"></i>
        <span>分类</span>
      </div>
      <div class="footerItem" :class="{on: $route.path==='/things'}" @click="goTo('/things')">
        <i class="iconfont icon-lunkuodasan-"></i>
        <span>识物</span>
      </div>
      <div class="footerItem" :class="{on: $route.path==='/shopcart'}" @click="goTo('/shopcart')">
        <i class="iconfont icon-gouwuchekong"></i>
        <span>购物车</span>
      </div>
      <div class="footerItem" :class="{on: $route.path==='/personal'}" @click="goTo('/personal')">
        <i class="iconfont icon-lunkuodasan-1"></i>
        <span>个人</span>
      </div>
    </footer>
</template>

<script type="text/ecmascript-6">
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #footer
        position fixed
        left 0
        bottom 0
        width 100%
        height 50px
        display flex
        background-color #fff
        .footerItem
            width 25%
            height 100%
            display flex
            flex-direction column
            align-items center
            justify-content center
            color #7e8c8d
            &.active
                color green
            .iconfont
                font-size 22px
            span
                font-size 12px
</style>

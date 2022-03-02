<template>
  <div class="navigate" :class="{ navigate1: showNavigate, navigate2: hiddenNavigate }">
    <div class="navigate_1">人活着就是为了麻衣学姐</div>
    <div class="navigate_2"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* 上一次滚动的距离 */ lastScrollDistance: 0,
      /* 展示导航 */ showNavigate: false,
      /* 隐藏导航 */ hiddenNavigate: false,
    };
  },
  methods: {
    /* 监听滚动条滚动 */ onscroll(e) {
      // * 获取距离顶部的距离
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      console.log(top);
      // * 判断向上滚动还是向下
      if (top > this.lastScrollDistance) {
        // * 像下滚动
        this.showNavigate = false;
        this.hiddenNavigate = true;
      } else if (top < this.lastScrollDistance) {
        // * 向上滚动
        // * 到顶部时恢复默认样式
        if (top == 0) {
          this.showNavigate = false;
          this.hiddenNavigate = false;
        } else {
          this.showNavigate = true;
          this.hiddenNavigate = false;
        }
      }
      // * 保存本次滚动作为上一次滚动
      this.lastScrollDistance = top;
    },
  },
  mounted() {
    // ? 监听滚动条滚动
    window.addEventListener('scroll', this.onscroll);
  },
};
</script>

<style lang="scss" scoped>
@import './navigate.scss';
</style>

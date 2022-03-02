<template>
  <div class="home" id="home" style="transform: translateY(-1.5rem)">
    <Navigate />
    <div class="home_content">
      <div class="home_content_1" id="home_content_1"></div>
    </div>
  </div>
</template>

<script>
import Navigate from '@components/navigate/Navigate';
export default {
  data() {
    return {
      /* web宽度 */ webWidth: '',
      /* web高度 */ webHeight: '',
    };
  },
  methods: {
    /* 初始化view */ initView() {
      document.getElementById('home').style.transform = 'translateY(0px)';
    },
    /* 监听web窗口变化 */ onresize() {
      window.onresize = () => {
        this.getWebpage();
      };
    },
    /* 获取web可视化宽高 */ getWebpage() {
      // ? web可视化宽度
      this.webWidth = window.innerWidth;
      // ? web可视化高度
      this.webHeight = window.innerHeight;
      // ? 处理背景始终=当前web可视化大小
      let content1 = document.getElementById('home_content_1');
      content1.style.width = `${this.webWidth}px`;
      content1.style.height = `${this.webHeight}px`;
    },
  },
  mounted() {
    // * 初始化view
    this.initView();
    // * 监听web窗口变化
    this.onresize();
    // * 获取web可视化宽高
    this.getWebpage();
  },
  components: { Navigate },
};
</script>

<style lang="scss" scoped>
@import './home.scss';
</style>

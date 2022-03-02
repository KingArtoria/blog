<template>
  <div class="home" id="home">
    <Navigate />
    <div class="home_content">
      <div class="home_content_1" id="home_content_1">
        <div class="home_content_1_1">
          <div class="home_content_1_1_1">个人博客</div>
          <div class="home_content_1_1_2">
            <div class="home_content_1_1_2_1">{{ tagline }}</div>
            <div class="home_content_1_1_2_2">|</div>
          </div>
        </div>
      </div>
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
      /* 标语 */ tagline: '醉后不知天在水，满船清梦压星河。',
    };
  },
  methods: {
    /* 生成标语 */ generateTagline() {
      let stringArray = this.tagline.split('');
      this.tagline = '';
      stringArray.forEach((item, index) => {
        setTimeout(() => {
          this.tagline += item;
        }, index * 300);
      });
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
    // * 生成标语
    this.generateTagline();
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

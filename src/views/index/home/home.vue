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
        <img src="https://www.人活着就是为了麻衣学姐.com/pic/xx.png" class="home_content_1_2" @click="scrollNext" />
      </div>
      <div class="home_content_2">
        <div class="home_content_2_1">
          <div class="home_content_2_1_1">
            <img src="https://www.人活着就是为了麻衣学姐.com/pic/xinxi.png" class="home_content_2_1_1_1" />
            <div class="home_content_2_1_1_2">
              <div class="home_content_2_1_1_2_1" :style="`transform: translateY(${sayTranslateY}px);transition: all ${sayTime}s;`">
                <div class="home_content_2_1_1_2_1_1" v-for="(item, index) in say" :key="index">{{ item }}</div>
              </div>
            </div>
            <img src="https://www.人活着就是为了麻衣学姐.com/pic/yjt.png" class="home_content_2_1_1_3" />
          </div>
          <div class="home_content_2_1_2">
            <div class="home_content_2_1_2_1">
              <div class="home_content_2_1_2_1_1">
                <img src="https://www.人活着就是为了麻衣学姐.com/pic/wz.png" class="home_content_2_1_2_1_1_1" />
              </div>
              <div class="home_content_2_1_2_1_2">
                <div class="home_content_2_1_2_1_2_1">标题</div>
                <div class="home_content_2_1_2_1_2_2">
                  <img src="https://www.人活着就是为了麻衣学姐.com/pic/rq.png" class="home_content_2_1_2_1_2_2_1" />
                  <div class="home_content_2_1_2_1_2_2_2">2022-03-04</div>
                </div>
                <div class="home_content_2_1_2_1_2_3">这个是一个文章内容这个是一个文章内容这个是一个文章内容这个是一个文章内容这个是一个文章内容这个是一个文章内容这个是一个文章内容这个是一个文章内容这个是一个文章内容这个是一个文章内容</div>
              </div>
            </div>
          </div>
        </div>
        <div class="home_content_2_2">
          <div class="home_content_2_2_1">
            <div class="home_content_2_2_1_1">
              <img src="https://www.人活着就是为了麻衣学姐.com/pic/tx.png" class="home_content_2_2_1_1_1" />
            </div>
            <div class="home_content_2_2_1_2">获月Thirty</div>
            <div class="home_content_2_2_1_3">小心二次元🍇</div>
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
      /* 说说 */ say: ['风将一纸情书寄给了我🎏', '每一颗眼泪是一万道光🎇'],
      /* 说说Y偏移值 */ sayTranslateY: 0,
      /* 说说效果延迟时间 */ sayTime: 0.5,
    };
  },
  methods: {
    /* 滚动至下一项 */ scrollNext() {
      // ? 获取背景高度的1/15
      let webHeightNum = this.webHeight / 300;
      // ? 每次滚动的距离
      let distance = 0;
      // ? 执行15次
      let heightInterval = setInterval(() => {
        // ? 累加每次滚动的距离
        distance += webHeightNum;
        window.scrollTo(0, distance);
      }, 5);
      // ? 1500ms后结束
      setTimeout(() => {
        clearInterval(heightInterval);
      }, 1515);
    },
    /* 滚动说说 */ scrollSay() {
      // ? 数组累加成两份
      this.say = this.say.concat(this.say);
      // ? 复制总偏移高度
      let countHeight = this.say.length * 25;
      // ? 每过1500ms检查一次当前位置
      setInterval(() => {
        // ? 如果当前Y位置==总高度的一半
        if (this.sayTranslateY == -(countHeight / 2)) {
          // ? 动画时间=0
          this.sayTime = 0;
          // ? Y轴恢复0
          this.sayTranslateY = 0;
        }
      }, 1500);
      // ? 每过3000ms执行一次偏移
      setInterval(() => {
        // ? 复制动画时间
        this.sayTime = 0.5;
        // ? 复制Y轴偏移
        this.sayTranslateY -= 25;
      }, 3000);
    },
    /* 生成标语 */ generateTagline() {
      // ? 字符串分割数组
      let stringArray = this.tagline.split('');
      // ? 页面展示的字符串赋值完成后清空
      this.tagline = '';
      // ? 循环处理
      stringArray.forEach((item, index) => {
        // ? 每次延迟X*300ms
        setTimeout(() => {
          //? 页面展示的字符串每次拼接
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
    // * 滚动说说
    this.scrollSay();
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

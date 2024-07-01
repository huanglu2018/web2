<template>
  <div style="margin-bottom: 400px">
    <el-page-header
      @back="goBack"
      content="Browser"
      title="Home"
      style="margin-top: 90px; margin-left: 50px; margin-bottom: 50px"
    >
    </el-page-header>
    <div
      class="search-div"
      style="
        height: 150px;
        width: 55%;
        margin: 80px;
        margin-bottom: 50px;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      "
    >
      <el-cascader
        :options="options"
        clearable
        style="margin: 45px; width: 50%"
      ></el-cascader>
      <el-button
        type="primary"
        style="width: 15%; text-align: center"
        @click="toggleDiv"
      >
        GO！
      </el-button>
    </div>
    <div style="margin: 80px" v-if="showDiv">
      <iframe
        src="http://peanutgdb.crigdaas.org.cn/jbrowse2/?config=test_data%2Fvolvox%2Fconfig.json&session=local-TQTpUGy3hIQpgBvRG7xAW"
        frameborder="10"
        width="90%"
        height="700"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDiv: false,
      options: [
        {
          value: "Arachis hypogaea",
          label: "Arachis hypogaea",
          children: [
            {
              value: "cv.Fuhuasheng.v2 (T2T)",
              label: "cv.Fuhuasheng.v2 (T2T)",
            },
            {
              value: "cv.Fuhuasheng.v1",
              label: "cv.Fuhuasheng.v1",
            },
            {
              value: "cv.Shitouqi",
              label: "cv.Shitouqi",
            },
            {
              value: "cv.Tifrunner",
              label: "cv.Tifrunner",
            },
          ],
        },
        {
          value: "Arachis monticola",
          label: "Arachis monticola",
        },
        {
          value: "Arachis duranensis",
          label: "Arachis duranensis",
        },
        {
          value: "Arachis ipaensis",
          label: "Arachis ipaensis",
        },
        {
          value: "Arachis cardenasii",
          label: "Arachis cardenasii",
        },
      ],
    };
  },
  methods: {
    goBack() {
      console.log("go back");
      this.$router.push("/");
    },
    toggleDiv() {
      this.showDiv = true;
    },
  },
};
</script>

<style scoped>
.search-div {
  background-color: #fdfafa;
  transition: box-shadow 0.3s ease; /* 添加过渡效果，使阴影的出现和消失更平滑 */
}

.search-div:hover {
  box-shadow: 0 0 5px rgba(164, 160, 160, 0.3); /* 添加阴影效果 */
}
</style>
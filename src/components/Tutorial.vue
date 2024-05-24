<template>
  <div>
    <el-container class="tutorial-container">
      <el-aside class="tutorial-aside" width="300px">
        <el-page-header
          class="tutorial-page-header"
          @back="goBack"
          content="Tutorial"
          title="Home"
          style="margin-top: 90px; margin-left: 50px; margin-bottom: 50px"
        >
        </el-page-header>
        <el-col>
          <!-- <h5>Tutorials</h5> -->
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :unique-opened="true"
          >
            <el-menu-item index="1">
              <template slot="title">
                <i class="el-icon-chat-dot-round"></i>
                <a href="#introduction">Introduction</a>
              </template>
            </el-menu-item>
            <el-menu-item index="2">
              <template slot="title">
                <i class="el-icon-s-promotion"></i>
                <a href="#quick-start">Quick start</a>
              </template>
            </el-menu-item>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-search"></i>
                <span>Step by Step</span>
              </template>
              <el-menu-item index="3-1">
                <a href="#about-genome">About genome</a>
              </el-menu-item>
              <el-menu-item index="3-2">
                <a href="#about-variation">About variation</a>
              </el-menu-item>
              <el-menu-item index="3-3">
                <a href="#about-expression">About expression</a>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>

      <el-main>
        <div class="tutorial-content">
          <template v-if="!contentLoaded">
            <el-skeleton></el-skeleton>
            <el-skeleton></el-skeleton>
          </template>
          <template v-else>
            <div>
              <h2 id="introduction" style="padding-top: 60px">Introduction</h2>
              <span
                >Welcome to peanutGDB! peanutGDB is a peanut pan-genome database
                that presents up-to-date genomic resources including: genome
                sequence, genetic variations and gene expression
                landscapes.</span
              >
              <h2 id="quick-start">Quick start</h2>
              <span
                >Welcome to peanutGDB! peanutGDB is a peanut pan-genome database
                that presents up-to-date genomic resources including: genome
                sequence, genetic variations and gene expression
                landscapes.</span
              >
              <span
                >Welcome to peanutGDB! peanutGDB is a peanut pan-genome database
                that presents up-to-date genomic resources including: genome
                sequence, genetic variations and gene expression
                landscapes.</span
              >
              <span
                >Welcome to peanutGDB! peanutGDB is a peanut pan-genome database
                that presents up-to-date genomic resources including: genome
                sequence, genetic variations and gene expression
                landscapes.</span
              >
              <h2 id="about-genome">About genome</h2>
              <span
                >Welcome to peanutGDB! peanutGDB is a peanut pan-genome database
                that presents up-to-date genomic resources including: genome
                sequence, genetic variations and gene expression
                landscapes.</span
              >
              <span
                >Welcome to peanutGDB! peanutGDB is a peanut pan-genome database
                that presents up-to-date genomic resources including: genome
                sequence, genetic variations and gene expression
                landscapes.</span
              >
              <span
                >Welcome to peanutGDB! peanutGDB is a peanut pan-genome database
                that presents up-to-date genomic resources including: genome
                sequence, genetic variations and gene expression
                landscapes.</span
              >
              <h2 id="about-variation">About variation</h2>
              <span
                >Welcome to peanutGDB! peanutGDB is a peanut pan-genome database
                that presents up-to-date genomic resources including: genome
                sequence, genetic variations and gene expression
                landscapes.</span
              >
              <span
                >Welcome to peanutGDB! peanutGDB is a peanut pan-genome database
                that presents up-to-date genomic resources including: genome
                sequence, genetic variations and gene expression
                landscapes.</span
              >
              <span
                >Welcome to peanutGDB! peanutGDB is a peanut pan-genome database
                that presents up-to-date genomic resources including: genome
                sequence, genetic variations and gene expression
                landscapes.</span
              >
              <h2 id="about-expression">About expression</h2>
              <span
                >Welcome to peanutGDB! peanutGDB is a peanut pan-genome database
                that presents up-to-date genomic resources including: genome
                sequence, genetic variations and gene expression
                landscapes.</span
              >
              <span
                >Welcome to peanutGDB! peanutGDB is a peanut pan-genome database
                that presents up-to-date genomic resources including: genome
                sequence, genetic variations and gene expression
                landscapes.</span
              >
              <span
                >Welcome to peanutGDB! peanutGDB is a peanut pan-genome database
                that presents up-to-date genomic resources including: genome
                sequence, genetic variations and gene expression
                landscapes.</span
              >
            </div>
          </template>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contentLoaded: false,
    };
  },
  created() {
    setTimeout(() => {
      this.contentLoaded = true;
    }, 500);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    goBack() {
      console.log("go back");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.tutorial-container {
  position: relative;
}

.tutorial-aside {
  margin-top: 0px;
  margin-left: 50px;
  padding-bottom: 500px;
  position: fixed;
  /* top: 0;
  bottom: 0;
  left: 0;
  z-index: 9999; */
}

.tutorial-content {
  line-height: 2.5;
  margin-left: 450px;
  margin-top: 50px;
  margin-right: 200px;
  /* padding-top: 50px; */
}

#introduction,
#quick-start,
#about-genome,
#about-variation,
#about-expression {
  padding-top: 60px;
}
</style>
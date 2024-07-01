<template>
  <div class="MainInterface">
    <el-row type="flex" justify="center" :gutter="6" align="middle">
      <el-col :span="16">
        <div class="hometitle">peanutGDB</div>
        <!-- <div class="GSPCcontent">
          Geneset Mediated Cancer Regulatory Interactive Analysis
        </div> -->
        <hr />
        <div style="text-align: center; margin-top: 30px; margin-bottom: 30px">
          <h4 style="text-align: left; color: #107e64">Quick Analysis:</h4>
          <span>
            <el-select v-model="types" @change="changetype">
              <el-option
                v-for="item in Typelist"
                :key="item"
                :label="item"
                :value="item"
              >
              </el-option>
            </el-select>
            <el-autocomplete
              v-model="keyword"
              style="width: 50%"
              :fetch-suggestions="querySearchAsync"
              @select="handleSelect"
            ></el-autocomplete>
            <el-button
              class="SubmitButton"
              style="margin-bottom: 2.5%"
              type="success"
              icon="el-icon-search"
              @click="Home_analysis()"
            >
              Submit
            </el-button>
          </span>
        </div>
        <el-container class="boxrow">
          <el-main
            style="
              width: 600px;
              border: 2px solid #109274;
              margin-right: 20px;
              margin-bottom: 0px;
              height: 400px;
            "
          >
            <el-carousel
              :interval="8000"
              style="margin-top: 30px; justify-content: center; height: 350px"
            >
              <el-carousel-item
                class="carousel-item"
                v-for="item in imgList"
                :key="item.id"
              >
                <div class="carousel-img-container">
                  <!-- <img class="carousel-img" :src="item.idView" preview style="height: 300px; margin-left:30px" /> -->
                  <el-image class="carousel-img" :src="item.idView" preview fit="contain" />
                </div>
              </el-carousel-item>
            </el-carousel>
          </el-main>

          <el-main
            style="
              width: 40%;
              padding: 10px;
              position: relative;
              left: 20%;
              right: 50%;
              transform: translate(-50%, 0);
            "
          >
            <h2 style="text-align: center; padding-top: 30px">
              Welcome to peanutGDB
            </h2>
            <p
              style="
                font-size: 18px;
                margin: 10px;
                font-family: 'PT Sans Narrow', Arial, sans-serif;
              "
            >
              peanutGDB is a peanut pan-genome database that presents up-to-date
              genomic resources including: genome sequence, genetic variations
              and gene expression landscapes.
            </p>
          </el-main>
        </el-container>
        <div style="margin-top: 30px">
          <h3
            style="
              font-style: italic;
              color: #109274;
              font-weight: bold;
              padding-top: 30px;
            "
          >
            <u>Updates:</u>
          </h3>
          <p class="update_info">(2024-4-13) New homepage</p>
          <p class="update_info">
            <!-- (2022-11-22) The Custom funtion module added.   -->
          </p>
          <p class="update_info">
            <!-- (2022-11-24) Modify the home interface to make the website interface more handsome. -->
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>                


<style scoped>
.hometitle {
  margin-top: 20px;
  text-align: center;
  font-size: 60px;
  font-family: "Helvetica", sans-serif;
  font-weight: bold;
  font-style: normal;
  color: #1c6973;
  /* cursor: pointer; */
}
.GSPCcontent {
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  font-size: 35px;
}
.boxrow {
  height: 400px;
}

/* .carousel-item {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
} */

.el-form-item__label {
  font-size: 1rem;
}
.update_info {
  font-size: 15px;
  margin-top: 3px;
  margin-bottom: 3px;
  line-height: 23px;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      types: "Gene",
      Typelist: ["Gene", "Genome", "Variation"],
      keyword: "FAD2",
      imgList: [
        { id: 0, idView: require("@/assets/home_fig/function.png") },
        { id: 1, idView: require("@/assets/home_fig/structure.png") },
        { id: 2, idView: require("@/assets/home_fig/fuhuasheng.v2.0.png") },
        { id: 3, idView: require("@/assets/home_fig/T2Tstrategy.png") },
      ],
    };
  },
  methods: {
    changetype() {
      if (this.types == "Gene") {
        this.keyword = "FAD2";
      } else if (this.types == "Genome") {
        this.keyword = "Fuhuasheng.v2(T2T)";
      } else {
        this.keyword = "";
      }
    },
    querySearchAsync(queryString, cb) {
      clearTimeout(this.timeout);
      var results = [];
      if (queryString == "") {
        cb(results);
      } else {
        var find = {
          keyword: queryString,
          type: 0,
        };
        //console.log(find.keyword);
        axios({
          method: "get",
          url: "/api/showkeys?keyword=" + find.keyword + "&types=" + this.types,
        })
          .then((res) => {
            if (res.data.code == "200") {
              var result = res.data.results;
              for (var i = 0; i < result.length; i++) {
                const element = result[i];
                results.push({
                  value: element,
                });
              }
              cb(results);
            } else {
              results = [];
              cb(results);
            }
          })
          .catch(function (error) {
            that.$message.error("系统错误");
          });
      }
    },
    handleSelect(item) {
      this.keyword = item.value;
    },
    Home_analysis() {
      if (this.types == "Gene" && this.keyword != "") {
        this.$router.push({ name: "Gene", params: { key: this.keyword } });
      } else if (this.types == "Dataset" && this.keyword != "") {
        let experiment_type = "";
        if (this.keyword.includes("TCGA")) {
          experiment_type = "RNA-Seq";
        } else {
          experiment_type = "Array";
        }
        this.$router.push({
          name: "Datasetsingle",
          params: { key: this.keyword, experiment_type: experiment_type },
        });
      } else if (this.types == "Geneset" && this.keyword != "") {
        this.$router.push({ name: "Geneset", params: { key: this.keyword } });
      }
    },
  },
};
</script>





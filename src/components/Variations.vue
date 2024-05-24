<template>
  <div>
    <el-page-header
      @back="goBack"
      content="Variations"
      title="Home"
      style="margin-top: 90px; margin-left: 50px; margin-bottom: 50px"
    >
    </el-page-header>
    <div
      style="
        margin-top: 50px;
        margin: 80px;
        margin-bottom: 400px;
        border-radius: 4px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      "
    >
      <el-table
        class="customer-table table-with-margin"
        :data="snps"
        style="width: 80%"
        v-loading="loadingtable"
        size="medium"
        fixed
      >
        <el-table-column label="VarID">
          <template slot-scope="scope">
            {{ scope.row.fields.VarID }}
          </template>
        </el-table-column>
        <el-table-column label="Chromosome">
          <template slot-scope="scope">
            {{ scope.row.fields.Chromesome }}
          </template>
        </el-table-column>
        <el-table-column label="Position">
          <template slot-scope="scope">
            {{ scope.row.fields.Position }}
          </template>
        </el-table-column>
        <el-table-column label="Category" align="center">
          <template slot-scope="scope">
            {{ scope.row.fields.Category }}
          </template>
        </el-table-column>
        <el-table-column label="Ref" align="center" width="70">
          <template slot-scope="scope">
            {{ scope.row.fields.Ref }}
          </template>
        </el-table-column>
        <el-table-column label="Alt" align="center" width="70">
          <template slot-scope="scope">
            {{ scope.row.fields.Alt }}
          </template>
        </el-table-column>
        <el-table-column label="Annotation" align="center" width="350">
          <template slot-scope="scope">
            <!-- <a href="#" @click="showSNPDetails(scope.row.id)">{{ scope.row.annotation }}</a> -->
            {{ scope.row.fields.Gene }}
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        align="center"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[1, 5, 10, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalSize"
      >
      </el-pagination>
    </div>
  </div>
</template>

<style>
.input_box {
  margin-top: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border: 3px solid #5091ce;
  margin: 20px;
  padding: 0px;
}
.gene_results {
  margin-top: 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border: 3px solid #5091ce;
  margin: 20px;
  padding: 0px;
}
#results_title {
  color: black;
  font-weight: bolder;
  background: #97b8e1;
  font-size: 1.5vw;
  padding: 10px;
  text-align: center;
  border-bottom: 3px solid #5091ce;
}

.gene {
  padding: 10px;
  margin: 10px 0px;
  box-shadow: 1px 3px 20px #003f5f, 2px 2px 5px #003f5f;
}
.el-form-item__label {
  font-size: 1rem;
  font-weight: bold;
}
.name {
  font-size: 15px;
  font-weight: normal;
  text-align: left;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: 2px;
  height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.symbol {
  font-size: 18px;
  font-weight: bold;
}
.cblabel .el-form-item__label {
  float: left;
  height: 20%;
  width: 20%;
  list-style: none;
  margin-left: 20px;
  margin-bottom: 20px;
  border: 2.5px solid #9fceff;
}
.DEGtble {
  /* padding: 4%; */
  border: 2px solid rgba(200, 224, 162, 0.3);
  text-align: center;
  margin-left: 3%;
  margin-top: 20px;
  width: 96%;
  margin-bottom: 50px;
  align-content: center;
  font-size: 14px;
  color: black;
}
.DEGtble3 {
  /* padding: 4%; */
  /* border:2px solid rgba(200, 224, 162, 0.3); */
  border: 2px solid #ebeef5;
  /* background:'#eef1f6'; */
  text-align: center;
  margin-left: 8%;
  margin-right: 8%;
  margin-top: 10px;
  width: 84%;
  margin-bottom: 50px;
  align-content: center;
  font-size: 14px;
  color: black;
}
/* 去掉表格单元格边框 */
.customer-table th {
  border: none;
}
.customer-table td,
.customer-table th.is-leaf {
  border: none;
}
/* 表格最外边框 */
.el-table--border,
.el-table--group {
  border: none;
  /* border: 1px solid #EBEEF5; */
}
/* 头部边框 */
.customer-table thead tr th.is-leaf {
  border: 1px solid #ebeef5;
  border-right: none;
  border-left: none;
  /* border: none; */
}
.customer-table thead tr th:nth-last-of-type(2) {
  /* border-right: 1px solid #EBEEF5; */
  border: none;
}
/* 表格最外层边框-底部边框 */
.el-table--border::after,
.el-table--group::after {
  width: 0;
}
.customer-table::before {
  width: 0;
}
.customer-table .el-table__fixed-right::before,
.el-table__fixed::before {
  width: 0;
}
/* 表格有滚动时表格头边框 */
.el-table--border th.gutter:last-of-type {
  border: 1px solid #ebeef5;
  border-left: none;
}
.gene_results2 {
  margin-top: 0px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border: 1px solid #5091ce;
  margin: 30px;
  padding: 0px;
}

.searchtitle {
  width: 160px;
  font-weight: bold;
  font-size: 20px;
  color: #2a2a33;
  display: inline-block;
  margin-left: 7%;
}

.table-with-margin {
  margin: 30px;
  margin-top: 80px;
}
</style>

<script>
import axios from "axios";
import pdf from "vue-pdf";
import FileSaver from "file-saver";

export default {
  data() {
    return {
      snps: [],
      loadingtable: false,
      totalSize: null,
      pageSize: 10,
      currentPage: 1,
      pageSize: 10,
    };
  },
  created() {
    this.getVarlist();
  },
  methods: {
    goBack() {
      console.log("go back");
      this.$router.push("/");
    },
    getVarlist(pagesize = 10, num = 1) {
      this.loadingtable = true;
      //   var pagesize = this.pageSize;
      console.log("test");
      axios({
        method: "get",
        url: "/api/variations",
        params: {
          pagesize: pagesize,
          num: num,
        },
      })
        .then((res) => {
          if (res.data.code == 200) {
            console.log("请求成功！");
            this.totalSize = res.data.totalSize;
            this.loadingtable = false;
            this.snps = res.data.var_info;
          } else {
            console.log("404");
          }
        })
        .catch(function (error) {
          this.$message.error("系统错误");
        });
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.getVarlist(10, val);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.getVarlist(val, 1);
    },
  },
};
</script>

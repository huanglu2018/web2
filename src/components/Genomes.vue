<template>
  <div>
    <el-page-header
      @back="goBack"
      content="Genomes"
      title="Home"
      style="margin-top: 90px; margin-left: 50px; margin-bottom: 50px"
    >
    </el-page-header>
    <el-container>
      <el-aside
        width="300px"
        style="margin-top: 0px; margin-left: 50px; padding-bottom: 500px"
      >
        <el-col>
          <h5>Arachis</h5>
          <el-menu
            default-active="1-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :unique-opened="true"
          >
            <el-submenu index="1">
              <template slot="title">
                <!-- <i class="el-icon-more"></i> -->
                <span>Arachis hypogaea (AABB)</span>
              </template>
              <el-menu-item-group>
                <!-- <template slot="title">分组一</template> -->
                <el-menu-item index="1-1">
                  <router-link to="/Genomes/GenomeDetail"
                    >cv.Fuhuasheng.v2 (T2T)
                  </router-link>
                </el-menu-item>
                <el-menu-item index="1-2">cv.Fuhuasheng.v1</el-menu-item>
              </el-menu-item-group>
              <!-- <el-menu-item-group title="分组2"> -->
              <el-menu-item index="1-3">cv.Shitouqi</el-menu-item>
              <!-- </el-menu-item-group> -->
              <!-- <el-submenu index="1-4"> -->
              <!-- <template slot="title">cv.Tifrunner</template> -->
              <el-menu-item index="1-4">cv.Tifrunner</el-menu-item>
              <!-- </el-submenu> -->
            </el-submenu>
            <el-menu-item index="2">
              <!-- <i class="el-icon-menu"></i> -->
              <span slot="title">Arachis monticola (AABB)</span>
            </el-menu-item>
            <el-menu-item index="3">
              <!-- <i class="el-icon-menu"></i> -->
              <span slot="title">Arachis duranensis (AA)</span>
            </el-menu-item>
            <el-menu-item index="4">
              <!-- <i class="el-icon-document"></i> -->
              <span slot="title">Arachis ipaensis (BB)</span>
            </el-menu-item>
            <el-menu-item index="5" disabled>
              <!-- <i class="el-icon-setting"></i> -->
              <span slot="title">Arachis cardenasii</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-aside>

      <el-main style="padding: 50px; margin-right: 150px">
        <!-- <el-skeleton :rows="6" /> -->
        <router-view :genomeMeta="genomeMeta"></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genomeMeta: {
        Summary: {
          EachID: "Fuhuasheng.v2",
          Accessions: "NA",
          CommonName: "Fu Hua Sheng",
          Abbreviation: "FHS",
          LatinName: "Arachis hypogaea cv. Fuhuasheng",
          Type: "cultivar",
          Origin: "Southern China",
          Country: "China",
          SequencingTechnique: "ONT, PacBio, Illumina",
          AssemblyLevel: "telomere to telomere (T2T)",
        },
        Statistics: {
          ContigN50: "5.4",
          ContigLength: "1891.01",
          ScaffoldN50: "278.46",
          ScaffoldLength: "1891.08",
          GC: "49.19",
          chromosomeAnchoringRate: "95.98",
          Mapping: "99.43",
          Coverage: "99.79",
          RepeatRatio: "70.44",
          GeneNumber: "37906",
          BUSCO: "C:95.7%[S:86.6%,D:9.1%],F:1.1%,M:3.2%,n:1614",
          LAI: "26.15",
          QV: "40.6507",
        },
        Annotation: {
          NR: "35,214",
          SwissProt: "25,408",
          KEGG: "23,963",
          InterPro: "37,406",
          Pfam: "26,170",
          GO: "34,113",
          Annotated: "37,680",
          Total: "37,906",
        },
      },
    };
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
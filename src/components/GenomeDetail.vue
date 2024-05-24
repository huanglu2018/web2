<template>
  <div>
    <div class="fixed-title">
      <i class="el-icon-link"></i>
      <h2 style="margin-right: 20%">{{ genomeMeta.Summary.EachID }}</h2>
      <el-button
        class="genome-download"
        type="success"
        icon="el-icon-search"
        round="true"
        >Genome browser</el-button
      >
      <el-button
        class="genome-download"
        type="primary"
        icon="el-icon-download"
        round="true"
        >Download annotation</el-button
      >
      <el-button
        class="genome-download"
        type="primary"
        icon="el-icon-download"
        round="true"
        >Download sequence</el-button
      >
    </div>
    <el-collapse value="assembly">
      <el-collapse-item name="assembly" class="collapse-item">
        <template slot="title">
          <div class="collapse-stitle">
            <i class="header-icon el-icon-coin"></i>
            <b><strong>&nbsp;&nbsp;Assembly </strong></b>
          </div>
        </template>
        <div class="clapse-content">
          <div class="collapse-subtitle">Summary</div>
          <div class="collapse-text">
            <strong>Accessions:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Summary.Accessions }}<br />
            <strong>Common name:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Summary.CommonName }}<br />
            <strong>Abbreviation:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Summary.Abbreviation }}<br />
            <strong>Latin name:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Summary.LatinName }}<br />
            <strong>Type:&nbsp;&nbsp;</strong>{{ genomeMeta.Summary.Type
            }}<br />
            <strong>Origin:&nbsp;&nbsp;</strong>{{ genomeMeta.Summary.Origin
            }}<br />
            <strong>Country:&nbsp;&nbsp;</strong>{{ genomeMeta.Summary.Country
            }}<br />
            <strong>Sequencing technique:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Summary.SequencingTechnique }}<br />
            <strong>Assembly level:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Summary.AssemblyLevel }}<br />
          </div>
        </div>
      </el-collapse-item>

      <el-collapse-item name="statistics" class="collapse-item">
        <template slot="title">
          <div class="collapse-stitle">
            <i class="header-icon el-icon-s-data"></i>
            <b><strong>&nbsp;&nbsp;Statistics </strong></b>
          </div>
        </template>
        <div class="clapse-content">
          <div class="collapse-subtitle">Summary</div>
          <div class="collapse-text">
            <strong>ContigN50:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Statistics.ContigN50 }}<br />
            <strong>ContigLength:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Statistics.ContigLength }}<br />
            <strong>ScaffoldN50:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Statistics.ScaffoldN50 }}<br />
            <strong>ScaffoldLength:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Statistics.ScaffoldLength }}<br />
            <strong>GC:&nbsp;&nbsp;</strong>{{ genomeMeta.Statistics.GC }}<br />
            <strong>chromosomeAnchoringRate:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Statistics.chromosomeAnchoringRate }}<br />
            <strong>Mapping:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Statistics.Mapping }}<br />
            <strong>Coverage:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Statistics.Coverage }}<br />
            <strong>RepeatRatio:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Statistics.RepeatRatio }}<br />
            <strong>GeneNumber:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Statistics.GeneNumber }}<br />
            <strong>BUSCO:&nbsp;&nbsp;</strong>{{ genomeMeta.Statistics.BUSCO
            }}<br />
            <strong>LAI:&nbsp;&nbsp;</strong>{{ genomeMeta.Statistics.LAI
            }}<br />
            <strong>QV:&nbsp;&nbsp;</strong>{{ genomeMeta.Statistics.QV }}<br />
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="annotation" class="collapse-item">
        <template slot="title">
          <div class="collapse-stitle">
            <i class="header-icon el-icon-search"></i>
            <b><strong>&nbsp;&nbsp;Annotation </strong></b>
          </div>
        </template>
        <div class="clapse-content">
          <div class="collapse-subtitle">Summary</div>
          <div class="collapse-text">
            <strong>NR:&nbsp;&nbsp;</strong>{{ genomeMeta.Annotation.NR }}<br />
            <strong>SwissProt:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Annotation.SwissProt }}<br />
            <strong>KEGG:&nbsp;&nbsp;</strong>{{ genomeMeta.Annotation.KEGG
            }}<br />
            <strong>InterPro:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Annotation.InterPro }}<br />
            <strong>Pfam:&nbsp;&nbsp;</strong>{{ genomeMeta.Annotation.Pfam
            }}<br />
            <strong>GO:&nbsp;&nbsp;</strong>{{ genomeMeta.Annotation.GO }}<br />
            <strong>Annotated:&nbsp;&nbsp;</strong
            >{{ genomeMeta.Annotation.Annotated }}<br />
            <strong>Total:&nbsp;&nbsp;</strong>{{ genomeMeta.Annotation.Total
            }}<br />
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "GenomeDetail",
  props: {
    genomeMeta: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isCollapsed: true,
    };
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style>
.collapse-text {
  line-height: 2.5;
}
.collapse-stitle {
  margin-top: 15px;
  font-size: 20px;
}
.collapse-item {
  margin-bottom: 15px;
}
.collapse-subtitle {
  margin-bottom: 10px;
  font-size: 18px;
}
.clapse-content {
  margin: 25px;
}
.fixed-title {
  display: flex;
  align-items: left;
  position: relative;
  top: 2;
  left: 2;
  width: 100%;
  background-color: #f5f5f5;
  padding: 15px;
  z-index: 999;
  border-radius: 13px;
  /* 其他样式属性 */
}

.genome-download {
  height: 40px;
  margin-right: 2%;
  position: relative;
  margin-top: 20px;
}
</style>
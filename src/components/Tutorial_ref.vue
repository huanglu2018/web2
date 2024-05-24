<template>
    <div id="help" class="MainInterface" ref="help">
        <el-row type="flex" justify="center" :gutter="6" align="middle">
            <el-col :span="17" >
                <el-card style=" margin-top:3%">
                    <el-container style="margin-left:1px;">                               
                        <el-main style="width:35%; ">
                            <div class="nav-fixed">
                                <!-- unique-opened  class="basic-card"-->
                                <el-menu
                                    width="100%"
                                    active-text-color="#109274"
                                    :default-active="activeIndex"
                                    @select="moveToTarget"
                                    >
                                    <!-- <el-submenu index="usage"> -->
                                        <!-- <template slot="title">
                                            <i class="el-icon-guide"></i>
                                            <span>Usage of GSPC</span>
                                        </template> -->
                                        <el-menu-item class="daohang" index="Introduction">Introduction</el-menu-item>
                                        <el-menu-item class="daohang" index="Quick-start">Quick start</el-menu-item>
                                        <!-- <el-menu-item class="daohang" index="usage-Subtype">Subtype</el-menu-item>
                                        <el-menu-item class="daohang" index="usage-Model">Model construction</el-menu-item>
                                        <el-menu-item class="daohang" index="usage-Tumor-related">Tumor-related</el-menu-item>
                                        <el-menu-item class="daohang" index="usage-Anti-PD-1-response">Anti-PD-1 response</el-menu-item> -->
                                        <el-submenu  class="daohang" index="usage">
                                            <template slot="title">
                                                <span class="daohang">Step by step</span>
                                            </template>
                                            <el-menu-item class="daohang2" index="usage-SingleGene">
                                                <i class="el-icon-s-opportunity"></i>
                                                <span slot="title">SingleGene</span>
                                            </el-menu-item>
                                            <el-menu-item class="daohang2" index="usage-Geneset">
                                                <i class="el-icon-s-opportunity"></i>
                                                <span slot="title">GeneSet</span>
                                            </el-menu-item>
                                            <el-menu-item class="daohang2" index="usage-Subtype">
                                                <i class="el-icon-s-opportunity"></i>
                                                <span slot="title">Subtype</span>
                                            </el-menu-item>
                                            <!-- <el-menu-item class="daohang2" index="usage-Model">Model construction</el-menu-item> -->
                                            <el-menu-item class="daohang2" index="usage-Tumor-related">
                                                <i class="el-icon-s-opportunity"></i>
                                                <span slot="title">Tumor-related</span>
                                            </el-menu-item>
                                            <el-menu-item class="daohang2" index="usage-Tumor-related">
                                                <i class="el-icon-s-opportunity"></i>
                                                <span slot="title">Anti-PD-1 response</span>
                                            </el-menu-item>
                                        <!-- </el-menu-item> -->
                                        </el-submenu>
                                    <!-- </el-submenu> -->
                                    <!-- <el-menu-item index="trouble">
                                        <i class="el-icon-help"></i>
                                        <span slot="title">Having troubles</span>
                                    </el-menu-item> -->
                                </el-menu>  
                            </div>
                        </el-main>
                        <el-main style="width:65%;margin-right: 15px; ">
                            <h2 class="title second-title" id="Introduction" ref="Introduction">Introduction</h2>
                            <p style="font-size: 20px;">
                                &nbsp; &nbsp;GSPC, a web server for systematic and fast explore the molecular alterations, immuno-oncological features, clinical relevance and the correlation with Anti-PD-1/PD-L1 response of gene and geneset in pan-cancer. Based on the collected and processed data of 98 gene expression datasets, 7 Anti-PD-1/PD-L1 treatment queues and 436 tumor-related genesets, GSPC provides six main analysis modules, including <i>SingleGene</i> module, <i>GeneSet</i> module, <i>Subtype</i> module, <i>Model construction</i> module, <i>Tumor related</i> module and <i>Anti-PD-1/PD-L1 response</i> module.
                            </p>
                            <p style="font-size: 20px;"> 
                                &nbsp; &nbsp;<i>SingleGene</i> and <i>GeneSet</i> modules can quickly visualize the genetic maps of single gene or geneset at various molecular levels (including mutation, copy number and expression) in pan-cancer based on the level of single gene and geneset, respectively. And allow users to further explore a series of related downstream analysis such as the correlation between these variant molecules and gene expression, tumor microenvironment immune infiltration, clinical characteristics, etc.
                            </p> 
                            <p style="font-size: 20px;">
                                &nbsp; &nbsp;The <i>Subtype</i> module allows users to identify different patterns of geneset-mediated stratification in different cancer types, respectively. And follow systematically study the molecular characteristics, immuno-oncological features, clinical relevance of these patterns of geneset-mediated stratification. 
                            </p>
                            <p style="font-size: 20px;">
                                &nbsp; &nbsp;The <i>Model construction</i> module allows users to further constructs a prognostic risk model related to genesets to develop new prognostic markers. 
                            </p>
                            <p style="font-size: 20px;">
                                &nbsp; &nbsp;<i>Tumor related</i> module and <i>Anti-PD-1/PD-L1 response</i> module visually analyze and identify tumor related and Anti-PD-1/PD-L1 response genes or genesets, respectively, and provide function enrichment analysis for these related-genes.
                            </p>
                            <!-- <br> -->
                            <br>
                            <h2 class="title second-title" id="Quick-start" ref="Quick-start">Quick-start</h2>
                            <p style="font-size: 20px;">
                                &nbsp; &nbsp;Select "Gene" module, enter a gene symbol or gene ID (Ensembl ID), and click the "Submit" button to quickly perform the functional analysis of the SingleGene module; or Select "Geneset" module, enter a geneset collected by GSPC, and click the "Submit" button to quickly perform the functional analysis of the GeneSet module; Select "Dataset" module, enter gene expression dataset collected by GSPC, and click the "Submit" button to quickly perform the functional analysis of the tumor-related module;
                            </p>
                            <el-image :preview-src-list="[require('@/assets/help/quickstart.png')]" style="margin-left:10%;max-width:80%;" :src="require('@/assets/help/quickstart.png')" alt=""></el-image>
                            <br>
                            <br>
                            <h2 class="title second-title" id="stepbystep">Step by step</h2>
                            <br>
                            <h2 class="title second-title" id="usage-SingleGene" ref="usage-SingleGene">&nbsp; &nbsp;SingleGene module</h2>
                            <!-- <div class="img-container">
                                <el-image 
                                    class="help-img"
                                    :src="require('../assets/img/help/pipline.png')" 
                                    :preview-src-list="[require('../assets/img/help/pipline.png')]"
                                    ><div slot="placeholder" style="height: 100px;">
                                        <span class="loading-img"><CustomIcon type="loading" size="0 0 1024 1024"></CustomIcon></span> 
                                    </div>
                                </el-image>
                            </div> -->
                            <p style="font-size: 20px;">
                                &nbsp; &nbsp;Enter a gene symbol or gene ID (Ensembl ID), and click the “Submit" button.
                            </p>
                            <el-image :preview-src-list="[require('@/assets/help/gene.png')]" style="margin-left:10%;max-width:80%;" :src="require('@/assets/help/gene.png')" alt=""></el-image>
                            <br>
                            <p style="font-size: 20px;">
                                &nbsp; &nbsp;Jump to the page of <i>SingleGene</i> module analysis result.
                            </p>
                            <p style="font-size: 20px;">
                                &nbsp; &nbsp;In the mutation panel or CNV panel, when clicking the value in the mutation frequency table or CNV variation frequency table, the correlation between gene mutation/or CNV variation and expression, tumor microenvironment, and patient survival will be visually analyzed.
                            </p>
                            <el-image :preview-src-list="[require('@/assets/help/gene1.png')]" style="margin-left:10%;max-width:80%;" :src="require('@/assets/help/gene1.png')" alt=""></el-image>
                            <br>
                            <br>
                            <h2 class="title second-title" id="usage-Geneset" ref="usage-Geneset">&nbsp; &nbsp;GeneSet module</h2>
                            <p style="font-size: 20px;">
                                &nbsp; &nbsp;Select a geneset collected by GSPC.
                            </p>
                            <el-image :preview-src-list="[require('@/assets/help/geneset.png')]" style="margin-left:10%;max-width:80%;" :src="require('@/assets/help/geneset.png')" alt=""></el-image>
                            <br>
                            <p style="font-size: 20px;">
                                &nbsp; &nbsp;In the page of <i>GeneSet</i> module analysis result, can click these table below for further detailed relevant analysis.
                            </p>
                            <el-image :preview-src-list="[require('@/assets/help/geneset1.png')]" style="margin-left:10%;max-width:80%;" :src="require('@/assets/help/geneset1.png')" alt=""></el-image>
                            <br>
                            <br>
                            <h2 class="title second-title" id="usage-Subtype" ref="usage-Subtype">&nbsp; &nbsp;Subtype module</h2>
                            <p style="font-size: 20px;">
                                &nbsp; &nbsp;Select a geneset and cancer type collected by GSPC .
                            </p>
                            <el-image :preview-src-list="[require('@/assets/help/subtype.png')]" style="margin-left:10%;max-width:80%;" :src="require('@/assets/help/subtype.png')" alt=""></el-image>
                            <br>
                            <p style="font-size: 20px;">
                                &nbsp; &nbsp;Click custom K value for further detailed relevant analysis, example "K=3".
                            </p>
                            <el-image :preview-src-list="[require('@/assets/help/subtype1.png')]" style="margin-left:10%;max-width:80%;" :src="require('@/assets/help/subtype1.png')" alt=""></el-image>
                            <br>
                            <br>
                            <!-- <h2 class="title second-title" id="usage-Model" ref="usage-Model">&nbsp; &nbsp;Model construction</h2>
                            <p>
                                Model construction
                            </p> -->

                            <h2 class="title second-title" id="usage-Tumor-related" ref="usage-Tumor-related">&nbsp; &nbsp;Tumor-related module and Anti-PD-1/PD-L1 response module</h2>
                            <p style="font-size: 20px;">
                                &nbsp; &nbsp;<i>Tumor-related</i> module and <i>Anti-PD-1/PD-L1 response</i> module are similar.
                            </p>
                            <p style="font-size: 20px;">
                                &nbsp; &nbsp;Click on the selected card for further detailed dataset relevant analysis.
                            </p>
                            <el-image :preview-src-list="[require('@/assets/help/dataset.png')]" style="margin-left:10%;max-width:80%;" :src="require('@/assets/help/dataset.png')" alt=""></el-image>
                            <br>
                            
                            
                            <!-- <h2 class="title second-title" id="usage-Anti-PD-1-response" ref="usage-Anti-PD-1-response">Anti-PD-1 response</h2>
                            <p>
                                Anti-PD-1-response
                            </p> -->

                        </el-main>                   
                    </el-container>
                        <!-- <div style=" float: left;width: 310px;position: relative;"> -->
                            
                        <!-- </div> -->

                        <!-- <div style="float: right;width: calc(100% - 310px);font-size: 16px;line-height: 1.6;margin-left: 5px;"> -->
                            <!-- Usage -->
                            <!-- <h1 class="title primary-title" id="usage" ref="usage">
                                <i class="el-icon-guide"></i> Usage of GSPC
                            </h1> -->
                            
                            <!-- <h1 class="title primary-title" id="trouble" ref="trouble">
                            <i class="el-icon-help"></i> Having troubles</h1>
                            <p class="last-section">
                                If you are having trouble with SPENCER that isn't addressed on this page, please feel free to contact   -->
                                <!-- <a href="mailto: renjian@sysucc.org.cn" class="custom-link">Dr. Jian Ren</a> and 
                                <a href="mailto:xieyb6@mail.sysu.edu.cn" class="custom-link">Dr. Yubin Xie</a>. -->
                                <!-- We will try to resolve it.
                            </p> -->
                        <!-- </div> -->
                
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'help',
    data () {
        return {
            anchors: [ "Introduction","Quick-start","usage-SingleGene", "usage-Geneset", "usage-Subtype", "usage-Tumor-related",],
            offsetTops: { "Introduction":0,"Quick-start":0,"usage-SingleGene": 0, "usage-Geneset": 0, "usage-Subtype": 0, "usage-Tumor-related": 0,},
            // anchors: [ "Introduction","Quick-start","usage-SingleGene", "usage-Geneset", "usage-Subtype", "usage-Model", "usage-Tumor-related","usage-Anti-PD-1-response"],
            // offsetTops: { "Introduction":0,"Quick-start":0,"usage-SingleGene": 0, "usage-Geneset": 0, "usage-Subtype": 0, "usage-Model": 0, "usage-Tumor-related": 0,"usage-Anti-PD-1-response": 0, },
            // anchors: [ "usage","usage-SingleGene", "usage-Geneset", "usage-Subtype", "usage-Model", "usage-Tumor-related","usage-Anti-PD-1-response", "trouble"],
            // offsetTops: {"usage": 0, "usage-SingleGene": 0, "usage-Geneset": 0, "usage-Subtype": 0, "usage-Model": 0, "usage-Tumor-related": 0,"usage-Anti-PD-1-response": 0,  "trouble": 0},
            // "pipline", "usage", "usage-browse", "usage-browse-pages",
            // activeIndex: "usage-SingleGene",
            activeIndex: "Introduction",
            isResizing: false
        }
    },
    methods: {
    
        moveToTarget(index) {
            this.$refs[index].scrollIntoView({behavior: "smooth", block: "center"});
        },
        getOffset(el) {
            let offset = el.offsetTop;
            if (el.offsetParent) {
                offset += this.getOffset(el.offsetParent);
            }
            return offset;
        },
        setOffsetTops() {
            for (const index in this.offsetTops) {
                if (Object.hasOwnProperty.call(this.offsetTops, index)) {
                    this.offsetTops[index] = this.getOffset(this.$refs[index]);
                }
            }
        },
        listenMouseWheel(e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
            // console.log(e);
            for (let i = 0; i < this.anchors.length; i++) {
                if (e.pageY > this.offsetTops[this.anchors[i]]) {
                    if (i === this.anchors.length - 1) {
                        this.activeIndex = "trouble";
                    } else if (e.pageY <= this.offsetTops[this.anchors[i + 1]]) {
                        this.activeIndex = this.anchors[i];
                        break;
                    }
                }
                
            }
        },
        setActiveByScroll() {
            let el = this.$refs.help;
            // console.log(el);
            if (navigator.userAgent.indexOf('Firefox') === -1) {
                // el.onmousewheel = this.stopBubble;
                el.addEventListener("mousewheel",this.listenMouseWheel);
            } else { // firefox
                el.addEventListener('DOMMouseScroll',this.listenMouseWheel);
            }
        },
        resetOnResize() {
            if (!this.isResizing) {
                // console.log("resize");
                this.isResizing = true;
                setTimeout(()=>{
                    this.setOffsetTops();
                    this.isResizing = false;
                },500);
            }
        },


    },
    mounted() {
        window.addEventListener("resize", this.resetOnResize);
        this.setOffsetTops();
        this.setActiveByScroll();
        setTimeout(this.setOffsetTops,3000);
        
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.resetOnResize);
    }
}
</script>

<style scoped>

    .nav-fixed {
        position: fixed;
        /* width: 320px; */
        /* height: 100%; */
        overflow-y: auto;
        left: auto;
        top: 130px;
        margin-left: 10px;
        border: 0ch;
        
    }
    .nav-fixed::-webkit-scrollbar {
        width: 6px;
        background-color: rgba(255, 255, 255, 0.3);
        /* background-color: rgba(144,147,153,.3); */
        border-radius: 4px;
        transition: background-color .3s;
    }
    .nav-fixed::-webkit-scrollbar-thumb {
        border-radius: 4px;
        /* -webkit-box-shadow: inset 0 0 5px rgba(144,147,153,.2); */
        -webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255,.2);
        /* box-shadow: inset 0 0 5px rgba(144,147,153,.2); */
        box-shadow: inset 0 0 5px rgba(255, 255, 255,.2);
        /* background: rgba(144,147,153,0.3); */
        background: rgba(255, 255, 255,0.3);
    }

    .daohang{
        font-weight:bold;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 18px;
        /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */

    }
    .daohang2{
        font-weight:bold;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 16px;
        /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */

    }
    
    .title {
        /* font-family: Roboto,sans-serif!important; */
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        color: #109274;
      
        margin: 16px 0 12px;
        
        /* padding-left: 20px; */
    }
    .primary-title {
        margin: 35px 0 16px;
        border-bottom: 1.5px dashed #909399;
    }
    .first-title {
        margin-top: 20px;
    }
    .second-title {
        /* margin: 20px 0 16px; */
        margin: 0px 0 0px;
    }
    .third-title {
        margin: 15px 0 16px;

    }

    
    .loading-img {
        color: #109274;
    }
    .img-container {
        text-align: center;
    }
    .help-img {
        margin: 0 auto;
        max-width: 80%;
    }
    p {
        margin: 12px 0;
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        padding-left: 10px;
        
    }

    .last-section {
        margin-bottom: 50px;
    }


</style>

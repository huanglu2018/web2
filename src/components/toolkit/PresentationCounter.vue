<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-9 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Peanut Genomes"
                description="T2T Sequence and annotations of peanut pangenome"
                :count="10"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Genomic Variations"
                description="High-quality genetic variations identified from representative germlies worldwide"
                :count="256"
                suffix="M"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Transcriptomes"
                description="RNAseq data from various tissues, grouth stages and conditions"
                :count="300"
                suffix="+"
                :duration="3000"
              />
            </div>
            <!-- <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Phenotypes"
                description="Save 3-4 weeks of work when you use our pre-made pages for
                  your website"
                :count="28"
                :duration="3000"
              /> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "./toolkit/NavbarDefault.vue";
// import DefaultFooter from "./toolkit/FooterDefault.vue";
// import Header from "./toolkit/Header.vue";
// import FilledInfoCard from "./toolkit/FilledInfoCard.vue";

// //Vue Material Kit 2 components
// import MaterialSocialButton from "./toolkit/MaterialSocialButton.vue";

// // sections
// import PresentationCounter from "./toolkit/PresentationCounter.vue";
// import PresentationPages from "./toolkit/PresentationPages.vue";
// import PresentationExample from "./toolkit/PresentationExample.vue";
// import data from "./toolkit/designBlocksData";
// import BuiltByDevelopers from "./toolkit/BuiltByDevelopers.vue";
// import PresentationTestimonials from "./toolkit/PresentationTestimonials.vue";
// import PresentationInformation from "./toolkit/PresentationInformation.vue";

//images
// import vueMkHeader from "@/assets/img/vue-mk-header.jpg";
// import wavesWhite from "@/assets/img/waves-white.svg";
// import logoBootstrap from "@/assets/img/logos/bootstrap5.jpg";
// import logoTailwind from "@/assets/img/logos/icon-tailwind.jpg";
// import logoVue from "@/assets/img/logos/vue.jpg";
// import logoAngular from "@/assets/img/logos/angular.jpg";
// import logoReact from "@/assets/img/logos/react.jpg";
// import logoSketch from "@/assets/img/logos/sketch.jpg";

// HL 注销，貌似无用
//hooks
// const body = document.getElementsByTagName("body")[0];
// onMounted(() => {
//   body.classList.add("presentation-page");
//   body.classList.add("bg-gray-200");
//   console.log(body.classList)
// });
// onUnmounted(() => {
//   body.classList.remove("presentation-page");
//   body.classList.remove("bg-gray-200");
// });

export default {
  components: {
    NavbarDefault
  },
};


// # HL add botton
const props = defineProps({
	action: {
	  type: Object,
	  route: String,
	  color: String,
	  label: String,
	  default: () => ({
		route: "http://192.168.3.11:8080/",
		color: "bg-gradient-success",
		label: "Customized Search"
	  })
	},
	image: {
    type: String,
    default: "",
	},
	title: {
		type: [String, Object],
		default: "",
		text: String,
		variant: {
		validator(value) {
			return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
		},
		},
		class: {
		type: String,
		default: "",
		},
	},
	description: {
		type: [String, Object],
		default: "",
		text: String,
		class: String,
	},
	mask: {
		type: String,
		default: "mask bg-gradient-success opacity-4",
	},
	center: {
		type: Boolean,
		default: false,
	},
	minHeight: {
		type: String,
		default: " min-vh-75",
	},
	fullWidth: {
		type: Boolean,
		default: false,
	},
});

// });
</script>

<template>
	<div class="hl-main-page">
		<h1>zenmehuishi</h1>
		<div class="container position-sticky z-index-sticky top-0">
			<div class="row">
			<div class="col-12">
				<h1>zenmehuishi</h1>
				<NavbarDefault :sticky="true" />
			</div>
			</div>
		</div>
  <!-- <Header> -->
	</div>
<!-- </Header> -->
<!-- <DefaultFooter /> -->
</template>

<style lang="scss">
	@import "./toolkit/material-kit.scss";
</style>
// .hl-main-page{
// 	height: 100vh;
// 	overflow-y: scroll;
// 	/* scroll-snap-type: y mandatory; */
// 	scroll-behavior: smooth;
// 	/* overflow: scroll; */
// 	/* align-items: center; */
// 	/* scroll-snap-align: start; */
// }

// .hl-main-page-sec1,
// .hl-main-page-sec2 {
// 	height: 100vh;
// 	scroll-snap-align: start;
// 	transition: transform 0.3s ease;
// }

// .hl-main-page-sec3 {
// 	/* height: 50vh; */
// 	margin-top: 50px;
// 	scroll-snap-align: end;
// }

// </style>

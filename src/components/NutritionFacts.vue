<template>
	<div id="facts" class="nfl-front">
		<div class="facts_title">Nutrition Facts</div>
		
		<div class="facts_box">
			<div class="fact_row calories mt-2">
				<div class="calorieamt">{{ facts.calories }}</div>
				<strong><a target="_blank" :href="fda_url + 'calories.cfm'" class="">Calories</a></strong>
			</div>
		</div>
		<!--.facts_box-->
		<div class="facts_box thin">
			<div class="fact_row">
				<div><strong><span>2%</span> <span>5%</span></strong></div>
				<strong><a target="_blank" :href="fda_url + 'total-fat.cfm'" class="">Total Fat</a></strong> 4g<span class="has"></span> <span class="need"></span>
			</div>
			<div class="fact_row sub">
				<div><strong>8%</strong></div>
				<a target="_blank" :href="fda_url + 'saturated-fat.cfm'" class="">Saturated Fat</a> 1.5g
			</div>
			<div class="fact_row sub"><a target="_blank" :href="fda_url + 'trans-fat.cfm'" class=""><em>Trans</em> Fat</a> 0g</div>
			<div class="fact_row">
				<div><strong>2%</strong></div>
				<strong><a target="_blank" :href="fda_url + 'cholesterol.cfm'" class="">Cholesterol</a></strong> 5mg
			</div>
			<div class="fact_row">
				<div><strong>19%</strong></div>
				<strong><a target="_blank" :href="fda_url + 'sodium.cfm'" class="">Sodium</a></strong> 430mg
			</div>
			<div class="fact_row">
				<div><strong>17%</strong></div>
				<strong><a target="_blank" :href="fda_url + 'total-carbohydrate.cfm'" class="">Total Carbohydrate</a></strong> 46g
			</div>
			<div class="fact_row sub">
				<div><strong>25%</strong></div>
				<a target="_blank" :href="fda_url + 'dietary-fiber.cfm'" class="">Dietary Fiber</a> 7g
			</div>
			<div class="fact_row sublv2"><a target="_blank" :href="fda_url + 'added-sugars.cfm'" class="">Total Sugars</a> 4g</div>
			<div class="fact_row sublv3">
				<div><strong>4%</strong></div>
				<a target="_blank" :href="fda_url + 'added-sugars.cfm'" class="">Includes 2g Added Sugars</a>
			</div>
			<div class="fact_row"><strong><a target="_blank" :href="fda_url + 'protein.cfm'" class="">Protein</a></strong> 11g</div>
		</div>
		<!--.facts_box-->
		<div class="facts_box">
			<div class="fact_row">
				<div>10%</div>
				<a target="_blank" :href="fda_url + 'vitamins.cfm'" class="">Vitamin D 2mcg</a>
			</div>
			<div class="fact_row">
				<div>20%</div>
				<a target="_blank" :href="fda_url + 'vitamins.cfm'" class="">Calcium 260mg</a>
			</div>
			<div class="fact_row">
				<div>35%</div>
				<a target="_blank" :href="fda_url + 'vitamins.cfm'" class="">Iron 6mg</a>
			</div>
			<div class="fact_row">
				<div>6%</div>
				<a target="_blank" :href="fda_url + 'vitamins.cfm'" class="">Potassium 240mg</a>
			</div>
		</div>
		<!--.facts_box-->
	</div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
	name: 'NutritionFacts',
	props: ['facts'],
	data() {
		return {
			// Initialized to zero to begin
			fda_url: 'https://www.accessdata.fda.gov/scripts/interactivenutritionfactslabel/',
		}
	},
	methods: {
		increment() {
			
		},
		decrement() {
			
		}
	}
}
</script>


<style scoped>

/* Nutrition Label */
#facts{
	font-family: 'Roboto', sans-serif;
	margin-right: 1rem;
	z-index:10;
	background:#fff;
	border:1px solid #000;
	padding:20px 0px;
	font-size:15px;
	line-height:15px;
	box-shadow:4px 10px 10px rgba(0,0,0,0.2);
}
.on-label-blue #facts {
	border: 2px solid #000000;
}

#facts .facts_title {
	font-family: 'Archivo Black';
	font-size: 35px;
	line-height: 1;
	color:#231f20;
	padding-left:10px;
	padding-right:10px;
	margin-bottom: 5px;
}

#facts a {
	color:#231f20;
	text-decoration: none;
	transition:all 0.5s;
	position: relative;
	z-index: 10;
}

#facts a.light {
	background:#FF0;
	text-decoration:underline;
	box-shadow:0 0 0px 2px #FF0;
}

#facts a:hover {
	text-decoration: underline;
}


#facts .facts_serving_size {
	padding-top:4px;
	padding-bottom:3px;
	font-size:16px;
	font-family: 'Roboto';
	line-height:14px;
	padding-left:10px;
	padding-right:10px;
}

#facts .facts_serving_pre {
	padding-bottom:3px;
	font-size:14px;
	line-height:14px;
	padding-left:10px;
	padding-right:10px;
}
#facts .calories {
	padding-top:4px;
	padding-bottom:12px;
	font-size:1.5em !important;
	font-family: 'Archivo Black';
	line-height:1em !important;
	position:relative;
}
#facts .calorieamt {
	font-size:1.8em !important;
	font-family: 'Archivo Black';
	line-height:14px;
}
#facts .txt_right {
	text-align: right;
}

#facts .facts_box {
	border-top:13px solid #231f20;
	margin-left:10px;
	margin-right:10px;
}

#facts .facts_box.thin {
	border-width:5px;
}

#facts .fact_row {
	padding-bottom:2px;
	padding-top:5px;
	font-size:14px;
	line-height:14px;
	border-bottom:1px solid #838181;
	position:relative;
}
#facts .fact_row_norule {
	padding-bottom:2px;
	padding-top:5px;
	font-size:14px;
	line-height:14px;
	position:relative;
}

#facts .fact_row.pinkbg { background:#feeab8; padding-left: 10px; padding-right: 10px; margin-left: -10px; margin-right: -10px;}
#facts .fact_row.bluebg { background:#ebf3c0; padding-left: 10px; padding-right: 10px; margin-left: -10px; margin-right: -10px;}

#facts .fact_row.pinkbg.sub {padding-left: 28px;}
#facts .fact_row.bluebg.sub {padding-left: 28px;}


#facts .fact_row.sub {
	padding-left:18px;
}
#facts .fact_row.sublv2 {
	margin-left:18px;
}
#facts .fact_row.sublv3 {
	padding-left:36px;
}


#b_box #b_content #facts .plus_in_label,
#b_box #b_content #facts .minus_in_label {
	width: 40px;
	position: absolute;
	top: 23px;
	left: -33px;
	z-index: 2;
	display: none;
}

#b_box #b_content #facts .fact_row.pinkbg.withicon:before {
	content:"\0020";
	background: #fab2dc;
	width: 35px;
	height: 100%;
	border-top:1px solid #fab2dc;
	position: absolute;
	top:0;
	left:-39px;
	z-index: 1;
	display: none;
}

#b_box #b_content #facts .fact_row.bluebg.withicon:before {
	content:"\0020";
	background: #b2e7fa;
	width: 35px;
	height: 100%;
	border-top:1px solid #b2e7fa;
	position: absolute;
	top:0;
	left:-39px;
	z-index: 1;
	display: none;
}

#b_box #b_content #facts .fact_row.pinkbg.withicon.withicon_min:before,
#b_box #b_content #facts .fact_row.bluebg.withicon.withicon_min:before {
	width: 19px;
	left:-23px;
	display: none;
}

#b_box #b_content #facts .plus_in_label_min,
#b_box #b_content #facts .minus_in_label_min {
	width: 20px;
	position: absolute;
	top: 2px;
	left: -16px;
	z-index: 2;
	display: none;
}

#facts .fact_row small {
	font-size:12px;
	line-height:12px;
	font-family: 'NeueBl';
	color:#000;
}

#facts .fact_row div {
	float:right;
}

#facts strong {
	color:#000;
}

#facts .facts_descr {
	padding-left:20px;
	padding-right:10px;
	font-size:11px;
	line-height:12px;
	margin:8px 0 8px;
	position:relative;
	color:#000;
}

#facts .facts_descr:before {
	content:'*';
	font-size:12px;
	position:absolute;
	top:2px;
	left:12px;
}

#facts .facts_table {
	margin-left:10px;
	margin-right:10px;
	color:#000;
}

#facts table {
	width:100%;
}

#facts table th,
#facts table td {
	font-size:11px;
	line-height:11px;
}

#facts table th {
	text-align: left;
	padding-bottom:1px;
}

#facts table td {
	padding:3px 0 0px;
	vertical-align:bottom;
}

#facts table tbody {
	border-top:1px solid #4c4849;
}
</style>

<template>
	<v-list
		:dense="true"
		:two-line="true"
		:shaped="true"
		:flat="true"
		:nav="true"

		>
		<v-subheader>Food List</v-subheader>
		<v-list-item-group color="primary">
			<v-list-item
			v-for="(food, i) in foods"
			:key="i"
			>
			<v-list-item-content>
				<v-list-item-title v-html="food.name"></v-list-item-title>
				<v-list-item-subtitle v-html="food.calories"></v-list-item-subtitle>
			</v-list-item-content>
			</v-list-item>
		</v-list-item-group>
	</v-list>
</template>

<script>
import axios from 'axios';

// USDA Food Central API Key: iMltfnJw7JQL21KeeGr2UAwF1KjZv4gpIuGTRB94
// https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=iMltfnJw7JQL21KeeGr2UAwF1KjZv4gpIuGTRB94&location=Denver+CO

// Usage: https://fdc.nal.usda.gov/fdc_api.html#/FDC/getFoodsSearch

// Citation: U.S. Department of Agriculture, Agricultural Research Service. FoodData Central, 2020. fdc.nal.usda.gov.

export default {
	name: 'FoodList',
	props: ['foods'],
	data() {
		return {
			// Initialized to zero to begin
			foodResults: null
		}
	},
	mounted () {
		axios
		.get('https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=iMltfnJw7JQL21KeeGr2UAwF1KjZv4gpIuGTRB94&location=Denver+CO')
		.then(response => {
			this.foodResults = response;
			console.log(response);
		})
	},
	methods: {

	}
}
</script>


<style scoped>

#food-list {
	
}
</style>

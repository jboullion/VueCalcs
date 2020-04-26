<template>
	<div id="food-list">
		<v-select
			:items="usdaFoods"
			label="Add Food"
			item-text="description"
			item-value="fdcId"
		></v-select>
		
		<v-list
			:dense="true"
			:two-line="false"
			:shaped="false"
			:flat="true"
			:nav="false">
			<v-list-item
			v-for="(food, i) in foods"
			:key="i"
			>
				<v-list-item-content>
					<v-text-field
						:label="food.name"
						suffix="grams"
						type="number" 
						v-model="food.serving"
						maxlength="4"
						v-on:input="log"
						step="1">
						<v-icon slot="append" color="red" class="remove-food">mdi-minus</v-icon>
					</v-text-field>
				</v-list-item-content>
				
			</v-list-item>
		</v-list>
	</div>
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
			usdaFoods: null,
			loading: true,
			errored: false
		}
	},
	filters: {
		// currencydecimal (value) {
		// 	return value.toFixed(2)
		// },
	},
	mounted () {
		axios
		.get('https://api.nal.usda.gov/fdc/v1/foods/search?query=cheese&api_key=iMltfnJw7JQL21KeeGr2UAwF1KjZv4gpIuGTRB94')
		.then(response => {
			this.usdaFoods = [response.data.foods];
			// if(response.data.foods){
			// 	for(var f = 0; f < response.data.foods.length; f++){
			// 		response.data.foods
			// 	}
			// }
			console.log(response.data.foods);
		})
		.catch(error => {
			this.errored = true;
			console.log(error);
		})
		.finally(() => this.loading = false)
	},
	computed: {

	},
	watch:{

	},
	methods: {

	}
}
</script>


<style scoped>

#food-list {
	
}

.v-list {
	
}

.v-list .v-list-item {
	padding: 0;
}

.v-list .remove-food {
	cursor: pointer;
}
</style>

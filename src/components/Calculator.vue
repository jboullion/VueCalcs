<template>
	<v-form id="calculator">
		<v-row>
			<v-col cols="12" sm="6" md="3">
				<v-text-field
					label="Calories"
				></v-text-field>
			</v-col>
		</v-row>

			<v-select
				:items="times"
				label="Time"
			></v-select>

			<v-text-field
				label="% Fat"
			></v-text-field>

			<v-text-field
				label="% Protein"
			></v-text-field>

			<v-text-field
				label="% Carbs"
			></v-text-field>

			<v-select
				:items="foods"
				label="Add Food"
			></v-select>
	</v-form>
</template>

<script>
// TODO: Get a better select finder
// https://joshuajohnson.co.uk/Choices/
// https://selectize.github.io/selectize.js/

// Maybe just build a custom search / dropdown?
// https://www.nutritionix.com/business/api
// https://fdc.nal.usda.gov/api-guide.html
	
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
	name: 'Calculator',
	props: ['variables'],
	data() {
		return {
			times: ['day','week','month','year'],
			// eventually this will come from an API
			foods: [
				'Potatoes',
				'Algae',
				'Nutritional Yeast',
				'Spinach',
				'Beans'
			]
		}
	},
	methods: {

	}
}
</script>


<style scoped>

#calculator {
	margin-bottom: 20px;
}
</style>

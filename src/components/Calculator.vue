<template>
	<v-form id="calculator">
	
			<v-text-field
				label="Calories"
				dense
			></v-text-field>

			<v-select
				:items="times"
				label="Time"
				dense
			></v-select>

			<v-text-field
				label="% Fat"
				dense
			></v-text-field>

			<v-text-field
				label="% Protein"
				dense
			></v-text-field>

			<v-text-field
				label="% Carbs"
				dense
			></v-text-field>

			
	</v-form>
</template>

<script>

// Maybe just build a custom search / dropdown?
// https://fdc.nal.usda.gov/api-guide.html


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
	name: 'Calculator',
	props: ['variables'],
	data() {
		return {
			times: ['day','week','month','year'],
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

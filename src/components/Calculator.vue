<template>
	<div id="calculator">
		<!-- <div class="form-group">
			<label for="num-people">Number of People</label>
			<input type="number" class="form-control" id="num-people" value="1">
		</div> -->
		<div class="form-group">
			<label for="calories">Calories</label>
			<input type="number" class="form-control" id="calories" :value="variables.calories">
		</div>

		<div class="form-group">
			<label for="food">Time</label>
			<select class="form-control" id="food">
				<option value="day">Day</option>
				<option value="week">Week</option>
				<option value="month">Month</option>
				<option value="year">Year</option>
			</select>
		</div>

		<div class="form-group">
			<label for="fat">% Fat</label>
			<input type="number" class="form-control" id="fat" :value="variables.fat">
		</div>

		<div class="form-group">
			<label for="protein">% Protein</label>
			<input type="number" class="form-control" id="protein" :value="variables.protein">
		</div>

		<div class="form-group">
			<label for="carbs">% Carbs</label>
			<input type="number" class="form-control" id="carbs" :value="variables.carbs">
		</div>

		<div class="form-group">
			<label for="food">Add Food</label>
			<select class="form-control" id="food">
				<option>Potatoes</option>
				<option>Algae</option>
				<option>Nutritional Yeast</option>
				<option>Spinach</option>
				<option>Beans</option>
			</select>
		</div>
	</div>
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
			// Initialized to zero to begin
			
			
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

#calculator {
	margin-bottom: 20px;
}
</style>

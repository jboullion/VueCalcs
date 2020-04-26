<template>
	<v-app>
		<v-app-bar
			color="light-green lighten-4"
			dense
			elevate-on-scroll
			fixed 
			>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>

			<v-toolbar-title>Nutrition Calculator</v-toolbar-title>

		</v-app-bar>

		<v-content>
			<v-container fluid>
				<v-row>
					<v-col>
						<p class=".body-1">Build a list of food items to see what you would need to eat to reach your nutrition goals.</p>
					</v-col>
				</v-row>
				<v-row>
					<v-col lg="4" md="6" cols="12">
						<Calculator v-bind:variables="variables" />
					</v-col>
					<v-col lg="4" md="6" cols="12">
						<FoodList v-bind:foods="foods" />
					</v-col>
					<v-col lg="4" md="12" cols="12">
						<NutritionFacts v-bind:facts="facts" />
					</v-col>
				</v-row>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import Calculator from './components/Calculator.vue'
import FoodList from './components/FoodList.vue'
import NutritionFacts from './components/NutritionFacts.vue'

export default {
	name: 'App',
	data(){
		return {
			variables: {
				calories: 2000,
				num_people: 1,
			},
			foods: [
				// {
				// 	name: 'Potato',
				// 	serving: 100, //g
				// 	calories: 90,
				// 	protein: 4,
				// 	fat: 1,
				// 	carbs: 10,
				// 	vitamins:{
				// 		a: 10,
				// 		b6: 23,
				// 		b12: 11
				// 	}
				// },
				// {
				// 	name: 'Tomato',
				// 	serving: 100, //g
				// 	calories: 90,
				// 	protein: 4,
				// 	fat: 1,
				// 	carbs: 10,
				// 	vitamins:{
				// 		a: 10,
				// 		b6: 23,
				// 		b12: 11
				// 	}
				// },
				// {
				// 	name: 'Beans',
				// 	serving: 100, //g
				// 	calories: 40,
				// 	protein: 4,
				// 	fat: 1,
				// 	carbs: 10,
				// 	vitamins:{
				// 		a: 10,
				// 		b6: 23,
				// 		b12: 11
				// 	}
				// },
				// {
				// 	name: 'Algae',
				// 	serving: 100, //g
				// 	calories: 110,
				// 	protein: 4,
				// 	fat: 1,
				// 	carbs: 10,
				// 	vitamins:{
				// 		a: 10,
				// 		b6: 23,
				// 		b12: 11
				// 	}
				// },
			],
			facts: {
				calories: 421, //kcals
				total_fat: {
					unit: 'g',
					mass: 4,
					percent:8
				},
				sat_fat: 1.5, //g
				trans_fat: 0, //g
				cholesterol: 5, //mg
				sodium: 430, //mg
				carbohydrate: 46, //g
				fiber: 7, //g
				sugars: 4, //g
				added_sugar: 2, //g
				protein: 11, //g
				vitamin_d: 2, //mcg
				calcium: 2, //260mg
				iron: 2, //6mg
				potassium: 2, //240mg
			}
		}
	},
	components: {
		Calculator,
		FoodList,
		NutritionFacts
	}
};
</script>

<style>
	
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

</style>


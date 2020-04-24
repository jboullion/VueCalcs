<template>
	<v-app>
		<v-app-bar
		color="deep-purple accent-4"
		dense
		dark
		>
		<v-app-bar-nav-icon></v-app-bar-nav-icon>

		<v-toolbar-title>Page title</v-toolbar-title>

		<v-spacer></v-spacer>

		<v-btn icon>
			<v-icon>mdi-heart</v-icon>
		</v-btn>

		<v-btn icon>
			<v-icon>mdi-magnify</v-icon>
		</v-btn>

		<v-menu
			left
			bottom
		>
			<template v-slot:activator="{ on }">
			<v-btn icon v-on="on">
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
			</template>

			<v-list>
			<v-list-item
				v-for="n in 5"
				:key="n"
				@click="() => {}"
			>
				<v-list-item-title>Option {{ n }}</v-list-item-title>
			</v-list-item>
			</v-list>
		</v-menu>
	</v-app-bar>

	<v-content>
		<v-container>
			<v-row>
				<v-col>
					<v-jumbotron header="Nutrition Calculator" lead="How much do you need to eat?">
						<p>Build a list of food items to see what you would need to eat to reach your nutrition goals.</p>
					</v-jumbotron>
				</v-col>
			</v-row>
			<vb-row>
				<v-col>
					<Calculator v-bind:variables="variables" />

					<FoodList v-bind:foods="foods" />
				</v-col>
				<v-col>
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
			foods: [],
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

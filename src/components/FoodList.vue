<template>
	<v-list
		:disabled="disabled"
		:dense="dense"
		:two-line="twoLine"
		:three-line="threeLine"
		:shaped="shaped"
		:flat="flat"
		:subheader="subheader"
		:sub-group="subGroup"
		:nav="nav"
		:avatar="avatar"
		:rounded="rounded"
		>
		<v-subheader>Food List</v-subheader>
		<v-list-item-group v-model="item" color="primary">
			<v-list-item
			v-for="(food, i) in foods"
			:key="i"
			:inactive="inactive"
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
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
	name: 'FoodList',
	props: ['foods'],
	data() {
		return {
			// Initialized to zero to begin
			
			
		}
	},
	methods: {

	}
}
</script>


<style scoped>

#food-list {
	
}
</style>

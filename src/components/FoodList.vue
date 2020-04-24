<template>
	<div id="food-list">
		<b-list-group>
			<b-list-group-item disabled>Cras justo odio</b-list-group-item>
			<b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
			<b-list-group-item>Morbi leo risus</b-list-group-item>
			<b-list-group-item disabled>Porta ac consectetur ac</b-list-group-item>
			<b-list-group-item>Vestibulum at eros</b-list-group-item>
		</b-list-group>
	</div>
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

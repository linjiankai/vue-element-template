<template>
	<div id="main" class="wrapper">
		<v-head></v-head>
		<v-sidebar></v-sidebar>
		<div class="content">
			<transition name="move" mode="out-in"><router-view></router-view></transition>
		</div>
	</div>
</template>

<script>
	import vHead from './Head.vue';
	import vSidebar from './Sidebar.vue';

	export default{
		components: {
			vHead,vSidebar
		}	
	}
</script>

<style scoped>
	
</style>
<template>
	<div class="container">
	<h1>i am Home Component</h1>
	<router-link to="/users" class="btn btn-danger">
		User
                                </router-link>
    <router-link to="/food" class="btn btn-primary">
                                    Food
                                </router-link>

	</div>
</template>
<script >
	export default{
		mounted(){
			console.log('i am parent component')
		}
	}
</script>
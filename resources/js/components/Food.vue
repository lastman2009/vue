<template>
	<div class="container">
		<router-link to="/users" class="btn btn-danger float-right m-2">User </router-link>
    <router-link to="/" class="btn btn-primary float-right m-2">Home  </router-link>
		<div>
	    	<h2>Form Food</h2>
	    	<div class="alert alert-success" role="alert" v-if="display">
			  {{message}}
			</div>
		     <form >
     	<div class="row">
		     	<div class="form-group col-sm-4">
		        <label for="name">Name</label>
		        <input type="name" class="form-control" id="name" v-model="food.name" aria-describedby="nanme" placeholder="Enter name">
		      </div>
		      <div class="form-group col-sm-4">
				    <label for="quality">Food Quality</label>
				    <select
				      id="quality"
				      name="quality"
				      class="form-control"
				      v-model="food.quality"
				    >
				      <option value="bad">Bad</option>
				      <option value="average">average</option>
				      <option value="good">Good</option>
				      <option value="excelent">Excelent</option>
				    </select>
		      </div>
		      <div class="form-group col-sm-4">
		        <label for="password">Price</label>
		        <input type="text" v-model="food.price" class="form-control" id="Price" placeholder="Price">
		      </div>
     	</div>
		      <button type="submit" @click.prevent="foodForm" class="btn btn-primary float-right m-2">Submit</button>
		    </form>
		    <div>
		    	<table class="table table-bordered">
				    <thead>
				      <tr>
				        <th>Name</th>
				        <th>Quality</th>
				        <th>Price</th>
				      </tr>
				    </thead>
				    <tbody>
				      <tr v-for="food in foods">
				        <td>{{food.name}}</td>
				        <td>{{food.quality}}</td>
				        <td>{{food.price}}</td>
				      </tr>
				    </tbody>
				  </table>
		    </div>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return{
			display	:'',
			message:'',
			prefix:'food',
			food:{
				name:'',
				quality:'',
				price:'',

			},

			food_validation:{
				name:false,
				quality:false,
				price:false,
			},

			foods:{},

		}
	},
	mounted(){
		this.getdata();
	},
	methods:{
		getdata(){
			axios.get(this.prefix+"/getdata").then(response =>{
					this.foods = response.data.foods
			}).catch(error => {
				console.log(error)
			})
		},
		validate(){
			if(this.food.name && this.food.quality && this.food.price){
				return true
			}
			return false;

		},	
		foodForm(){
			console.log(!this.validate());
			if(!this.validate()){
				return false;
			}

			axios.post(this.prefix+"/store",{
				data:this.food,
			}).then(response =>{
				if(response.data.code == 200){
					this.message = response.data.message
					this.foods = response.data.foods
					this.display = 1;
				}
				setTimeout(function(){
					this.display=0
				},2000)
			}).catch(error =>{
				console.log(error);
			})

		}
	}
}
</script>
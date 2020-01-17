<template>
    <div class="container">
    <router-link to="/" class="btn btn-danger">Home </router-link>
    <router-link to="/food" class="btn btn-primary">Food  </router-link>
        <h2>User Form</h2>

    <form @submit="foodForm">
                <div class="form-group">
                <label for="name">Full Name</label>
                <input type="name" class="form-control" id="name" aria-describedby="nanme" placeholder="Enter name">
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="email" placeholder="Enter email">
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
              </div>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>

       </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

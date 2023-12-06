<template>
    <div>
      <h1>{{ message }}</h1>
      <button @click="updateMessage">Update Message</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        message: "Hello, Vue!"
      };
    },
    methods: {
      updateMessage() {
        this.message = "Updated message!";
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    color: blue;
  }
  </style>
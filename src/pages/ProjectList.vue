<script>
import axios from 'axios';
 export default {
    name: 'ProjectList',
    data() {
     return {
      title: 'titolo',
      projects: []
     }
  },
  methods: {
   getApiProjects() {
     axios.get('http://127.0.0.1:8000/api/projects')
     .then((response) => {
      console.log(response);
      if(response.data.status && response.data.results.length) {
         console.log(response.data.results);
         this.projects = response.data.results;
      }
      else {
         console.log('chiamata non riuscita');
      }
     })
   }
  },
  created() {
   this.getApiProjects();
  }
 }
</script>

<template>
 <main>
    <h1>
      {{ title }}
    </h1>
    <ul>
      <li v-for="project in projects">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
      </li>
    </ul>
   </main>
</template>

<style scoped lang="scss">

</style>
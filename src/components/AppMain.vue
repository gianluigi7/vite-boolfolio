<script>
import axios from 'axios';
 export default {
    name: 'AppMain',
    data() {
     return {
      title: 'titolo',
     }
  },
  methods: {
   getApiProjects() {
     axios.get('http://127.0.0.1:8000/api/projects')
     .then((data) => {console.log(data);})
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
   </main>
</template>

<style scoped lang="scss">

</style>
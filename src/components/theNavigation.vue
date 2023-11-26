<template>
    <nav id="nav">
  <router-link id="logo" to="/">Travel Site</router-link>
  <router-link
        v-for="destination in destinations" :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id, slug:destination.slug }}"
        >
        <!-- Double mustache instead of template literal to render to  html. -->
        {{destination.name}}
    
    </router-link>
</nav>
</template>

<style scoped>
#nav .vue-school-active-link{
    color: rgb(129, 118, 118);
    border-bottom: 2px solid white;

}
</style>
<script>
import sourceData from '/data.json'

export default {
    // use the data property to bring in data from else where to use
    data(){
        return {
            destinations: sourceData.destinations
        }
    }
}
</script>
<template>
    <div class="home">
        <h1>All Destinations</h1>
<div class="destinations">
    <!-- Use a router-link with a for loop to loop through our data. It adds the slug to the rendered data (clickable link) and prints to the page  -->
    <router-link
        v-for="destination in destinations" :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id,slug:destination.slug}}"
        >
        <!-- Double mustache instead of template literal to render to  html. -->
        <h2>{{destination.name}}</h2>
        <img :src="`/images/${destination.image}`" :alt="destination.name">
    
    </router-link>
</div>
    </div>
</template>

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

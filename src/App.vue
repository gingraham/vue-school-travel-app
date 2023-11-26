<!-- The actual application. All components that are constant throughout the site like nav bar or footer added here. -->
<template>
  <!-- 3.) navbar component -->
  <theNavigation/>
  <!-- 3.) end navbar component -->
<div class="container">
  <!-- The router-view is where our views or pgs. display dependant on the route chosen-->
  <router-view></router-view>
</div>
</template>

<script >
// 1.) Bring in the navbar from the components folder.
import theNavigation from '@/components/theNavigation.vue';

// 2.) initialize the navbar as a component to be used. 
export default{
  components: { theNavigation }
}
</script>



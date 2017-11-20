<template>
  <div>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/user">User</router-link>
      <router-link to="/user/2">User Detail</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <hr> {{breadcrumbs}}
      <hr>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('Safranbolu', ['breadcrumbs']),
  },
};
</script>

<style>

</style>

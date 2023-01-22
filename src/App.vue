<template>
  <base-dialog :show="error" title="Виникла помилка під час виконання запиту..." @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <base-dialog :show="isRequestRunning" :title="requestTitle" :fixed="true">
    <base-spinner/>
  </base-dialog>
  <the-header/>
  <router-view/>
</template>

<script>

import TheHeader from './components/layout/TheHeader.vue'
import BaseDialog from './components/base/BaseDialog.vue';
import BaseSpinner from './components/base/BaseSpinner.vue';

export default {
  components:{ TheHeader, BaseDialog, BaseSpinner },
  computed:{
    isRequestRunning() {
      return this.$store.getters.isRequestRunning;
    },
    requestTitle(){
      return this.$store.getters.requestRunningTitle
    },
    error(){
      return this.$store.getters.error
    }
  },
  methods:{
    handleError(){
      this.$store.dispatch('changeErrorState', {error:null})
    }
  }
}

</script>


<style>

* {
  box-sizing: border-box;
}

html {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body {
  margin-top: 7rem;
  background-color: lightgray;
}

</style>
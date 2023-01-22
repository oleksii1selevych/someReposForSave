<template>
    <h1 v-if="!currentComponent">An unexpected problem occured related with the labNumber param passed</h1>
    <component v-else :is="currentComponent"/>
</template>

<script>

import LabFirst from '../components/labs/lab1/Lab1.vue';

export default {
    components:{ LabFirst },
    created(){
       const labNumber = this.$route.params.labNumber;
       this.loadComponent(labNumber);

        this.$watch(
            () => this.$route.params.labNumber,
            (to, _) => {
              this.loadComponent(to);
            }
        );
    },
    data(){
        return {
            currentComponent:null
        }
    },
    methods:{
        loadComponent(labNumber){
            switch(labNumber){
                case '1':
                    this.currentComponent = 'lab-first';
                    break;
               }
        }
    }
}

</script>
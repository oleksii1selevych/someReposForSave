<template>
    <h1 v-if="!currentComponent">An unexpected problem occured related with the seminarNumber param passed</h1>
    <component v-else :is="currentComponent"/>
</template>

<script>

import SeminarFirst from '../components/seminars/seminar1/Seminar1.vue';
import SeminarSecond from '../components/seminars/seminar2/Seminar2.vue';
import SeminarThird from '../components/seminars/seminar3/Seminar3.vue';

export default {
    components:{ SeminarFirst, SeminarSecond, SeminarThird },
    created(){
       const seminarNumber = this.$route.params.seminarNumber;
       this.loadComponent(seminarNumber);

        this.$watch(
            () => this.$route.params.seminarNumber,
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
        loadComponent(seminarNumber){
            switch(seminarNumber){
                case '1':
                    this.currentComponent = 'seminar-first';
                    break;
                case '2':
                    this.currentComponent = 'seminar-second';
                    break;
                case '3':
                    this.currentComponent = 'seminar-third';
               }
            console.log(this.currentComponent);
        }
    }
}

</script>
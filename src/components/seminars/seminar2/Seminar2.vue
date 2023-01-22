<template>
    <the-task-wrapper :task-file-name="taskFileName" :report-file-name="reportFileName">
        <h1 class="text-center mb-5">ПРАКТИЧНЕ ЗАНЯТТЯ 2</h1>
        <base-collapsible title="ОДНОРАЗОВИЙ БЛОКНОТ">
            <one-time-pad-decimal/>
        </base-collapsible>
    </the-task-wrapper>
</template>


<script>

import TheTaskWrapper from '../../layout/TheTaskWrapper.vue';
import OneTimePadDecimal from './OneTimePadDecimal.vue';

export default {   
    components:{TheTaskWrapper, OneTimePadDecimal},
    data(){
        return {
            taskFileName:'seminar2Task.pdf',
            reportFileName:'seminar2Report.pdf',
        }
    }
}

</script>

<style scoped>


h1 {
    color:#1c1d1f;
    font-weight: 200;
}

</style>
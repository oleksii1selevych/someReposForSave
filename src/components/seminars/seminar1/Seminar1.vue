<template>
    <TheTaskWrapper :task-file-name="taskFileName" :report-file-name="reportFileName">
        <h1 class="text-center mb-5">ПРАКТИЧНЕ ЗАНЯТТЯ 1</h1>
        <base-collapsible title="ШИФР ЦЕЗАРЯ">
            <caesar-cryptography />
        </base-collapsible>
        <base-collapsible title="ШИФР ВІЖЕНЕРА">
            <vigenere-cryptography/>
        </base-collapsible>
    </TheTaskWrapper>
</template>


<script>
import CaesarCryptography from './CaesarCryptography.vue';
import TheTaskWrapper from '../../layout/TheTaskWrapper.vue';
import VigenereCryptography from './VigenereCryptography.vue';

export default {
     components:{ TheTaskWrapper, CaesarCryptography, VigenereCryptography },
     data(){
        return {
            taskFileName:'seminar1Task.pdf',
            reportFileName:'seminar1Report.pdf'
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
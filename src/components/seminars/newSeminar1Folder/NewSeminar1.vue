<template>
    <the-task-wrapper :task-file-name="taskFileName" :report-file-name="reportFileName">
        <h1 class="text-center mb-5">Практичне заняття 1</h1>
        <base-collapsible title="Криптографія шифру Цезаря">
            <new-caesars-cryptography/>
        </base-collapsible>
        <base-collapsible title="Криптографія шифру Віженера">
            <new-vigenere-cryptography/>
        </base-collapsible>
    </the-task-wrapper>
</template>


<script>

import TheTaskWrapper from '../../layout/TheTaskWrapper.vue';
import NewCaesarsCryptography from './NewCaesarsCryptography.vue';
import NewVigenereCryptography from './NewVigenereCryptography.vue';

export default {
    components:{ TheTaskWrapper, NewCaesarsCryptography, NewVigenereCryptography },
    data(){
        return {
            reportFileName:'seminar1Task.pdf',
            taskFileName:'seminar1Task.pdf'
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
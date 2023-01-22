<template>
    <the-task-wrapper :task-file-name="taskFileName" :report-file-name="reportFileName">
        <h1 class="text-center mb-5">ПРАКТИЧНЕ ЗАНЯТТЯ 3</h1>
        <base-collapsible title="ШИФР ЦЕЗАРЯ">
            <caesar-cryptography/>
        </base-collapsible>
        <base-collapsible title="АТАКА НА ТЕКСТ, ЗАШИФРОВАНИЙ ЗА ДОПОМОГОЮ ШИФРУ ЦЕЗАРЯ">
            <caesar-cryptoanalysis />
        </base-collapsible>
    </the-task-wrapper>
</template>



<script>

import TheTaskWrapper from '../../layout/TheTaskWrapper.vue';
import CaesarCryptoanalysis from './CaesarCryptoanalysis.vue';
import CaesarCryptography from '../seminar1/CaesarCryptography.vue';

export default {

    components: { TheTaskWrapper, CaesarCryptoanalysis, CaesarCryptography },
    data() {
        return {
            taskFileName: 'seminar3Task.pdf',
            reportFileName: 'seminar3Report.pdf',
        }
    }

}

</script>
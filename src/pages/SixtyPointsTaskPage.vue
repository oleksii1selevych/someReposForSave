<template>
    <the-task-wrapper >
        <h1 class="text-center mb-5">Завдання на 60 балів</h1>
        <base-collapsible title="РОЗШИФРУВАННЯ ФАЙЛУ, ЗАШИФРОВАННОГО ЗА ДОПОМОГОЮ ШИФРУ ЦЕЗАРЯ">
            <caesars-decryption/>            
        </base-collapsible>
        <base-collapsible title="ПІДПИСАННЯ PDF ФАЙЛУ ЗА ДОПОМОГОЮ ЕЦП ДВОМА СПОСОБАМИ (DETACHED, ENVELOPED)">
            <electronic-digital-signature/>
        </base-collapsible>
        <base-collapsible title="ДОНАТ КНОПКА ДЛЯ ВЕБ САЙТУ">
            <donation-button/>
        </base-collapsible>
    </the-task-wrapper>
</template>


<script>

import TheTaskWrapper from '../components/layout/TheTaskWrapper.vue';
import CaesarsDecryption from '../components/sixtyPointsTask/CaesarsDecryption.vue';
import ElectronicDigitalSignature from '../components/sixtyPointsTask/ElectronicDigitalSignature.vue';
import DonationButton from '../components/sixtyPointsTask/DonationButton.vue';

export default {
    components: { TheTaskWrapper, CaesarsDecryption, ElectronicDigitalSignature, DonationButton },
    data() {
        return {
            taskFileName: 'seminar1.pdf',
            reportFileName: 'singleTask.pdf'
        }
    }
}

</script>


<style scoped>
h1 {
    color: #1c1d1f;
    font-weight: 200;
}
</style>
<template>
    <base-dialog :show="donationMade" title="Повідомлення про здійснену транзацкцію..." @close="handleTransaction">
        <p>Статус транзації: {{ donationStatus }}</p>
        <p>Кількість пожертвуваних грошей: {{ donatedAmount }}</p>
        <p>Валюта: {{ currency }}</p>
    </base-dialog>
    <div class="d-flex justify-content-around">
        <div>
            <form class="centered" action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="7T7GLSPZSEBTG" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0"
                    name="submit" title="PayPal - The safer, easier way to pay online!"
                    alt="Donate with PayPal button" />
            </form>
        </div>
        <div>
            <div class="centered" id="donate-button"></div>
        </div>
    </div>
</template>

<script>
import BaseDialog from '../base/BaseDialog.vue';

export default {
    components: { BaseDialog },
    data() {
        return {
            donationMade: false,
            donationStatus: '',
            donatedAmount: 0,
            currency: ''
        }
    },
    mounted() {
        const showDialog = (donatedAmount, donationStatus, currency) => {
            this.donationMade = true;
            this.donatedAmount = donatedAmount;
            this.currency = currency ;
            this.donationStatus = donationStatus;
            console.log(this);
        };
        PayPal.Donation.Button({
            env: 'sandbox',
            hosted_button_id: 'JJ6D8VDUQSCLC',
            image: {
                src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif',
                alt: 'Donate with PayPal button',
                title: 'PayPal - The safer, easier way to pay online!',
            },
            onComplete: (params) => {
               showDialog(params.amt, params.st, params.cc);
            },
        }).render('#donate-button');
    },
    methods: {
        handleTransaction() {
            this.donationMade = false;
        }
    }
}

</script>

<style scoped>

.centered {
    margin: 0 auto;
}

</style>
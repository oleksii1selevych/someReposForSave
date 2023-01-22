<template>
    <form @submit.prevent="">
        <div class="row mb-3 d-flex align-items-center justify-content-between">
            <div class="col">
                <div class="field">
                    <label class="form-label" for="key">Ключ:</label>
                    <textarea class="form-control" v-model.trim="key" id="key" rows="5"></textarea>
                </div>
            </div>
            <div class="col">
                <div class="field">
                    <label class="form-label" for="language">Мова:</label>
                    <select class="form-select" v-model="language" id="language">
                        <option selected value="Ru">Російська</option>
                        <option value="En">Англійська</option>
                        <option value="Ua">Українська</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <div class="field">
                    <label class="form-label" for="message">Вихідне повідомлення:</label>
                    <textarea class="form-control" v-model.trim="inputMessage" id="message" rows="10"></textarea>
                </div>
            </div>
            <div class="col">
                <div class="field">
                    <label class="form-label" for="cipher">Шифр:</label>
                    <textarea class="form-control" v-model.trim="ciphertext" id="cipher" rows="10"></textarea>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center">
            <button @click="encryptMessage" class="encrypt-btn">Зашифрувати</button>
            <button @click="decryptCipher" class="decrypt-btn">Дешифрувати</button>
        </div>
    </form>
</template>

<script>

export default {
    data() {
        return {
            ciphertext: '',
            inputMessage: '',
            key: '',
            language: 'Ru',
        }
    },
    created() {
        this.$watch(
            () => this.$store.getters['seminar1/vigenereCiphertext'],
            (val, _) => {
                this.ciphertext = val;
            }
        );

        this.$watch(
            () => this.$store.getters['seminar1/vigenereInputMessage'],
            (val, _) => {
                this.inputMessage = val;
            }
        );
    },
    methods: {
        async encryptMessage(){
            this.$store.dispatch('changeRequestPerformanceStatus', {requestRunningStatus:true});
            this.$store.dispatch('changeRequestRunningTitle', {requestRunningTitle:'Виконується шифрування...'});

            try {

                await this.$store.dispatch('seminar1/encryptWithVigenereCipher', {
                    inputMessage:this.inputMessage,
                    key:this.key,
                    language:this.language,
                });
                
            } catch (error) {
                this.$store.dispatch('changeErrorState', {error});
            }

            this.$store.dispatch('changeRequestPerformanceStatus', {requestRunningStatus:false});

        },
        async decryptCipher(){
            this.$store.dispatch('changeRequestPerformanceStatus', {requestRunningStatus:true});
            this.$store.dispatch('changeRequestRunningTitle', {requestRunningTitle:'Виконується дешифрування...'});

            try {

                await this.$store.dispatch('seminar1/decryptWithVigenereCipher', {
                    ciphertext:this.ciphertext,
                    key:this.key,
                    language:this.language,
                });

            } catch (error) {
                this.$store.dispatch('changeErrorState', {error});
            }

            this.$store.dispatch('changeRequestPerformanceStatus', {requestRunningStatus:false});
        },
    }
}

</script>


<style scoped>
button {
    outline: none;
    padding: 1rem 3rem;
    border: 1px solid transparent;
    background: none;
    color: white;
    font-weight: 700;
}

.encrypt-btn {
    background-color: #b9ceeb;
    border-radius: 5px 0px 0px 5px;
}

.encrypt-btn:hover {
    background-color: #87a8d0;
}

.decrypt-btn {
    background-color: #c3b4d2;
    border-radius: 0px 5px 5px 0px;
}

.decrypt-btn:hover {
    background-color: #574b9b;
}
</style>
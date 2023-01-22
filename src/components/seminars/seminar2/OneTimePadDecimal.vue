<template>
    <div class="row mb-3">
        <div class="col-3">
            <label class="form-label" for="languageSelect">Мова:</label>
            <select v-model="language" id="languageSelect" class="form-select">
                <option value="En">Англійська</option>
                <option value="Ru">Російська</option>
            </select>
        </div>
        <div class="col">
            <label class="form-label" for="keyInput">Ключ:</label>
            <input class="form-control" v-model.trim="key" id="keyInput"/>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col">
            <label class="form-label" for="message">Вихідне повідомлення:</label>
            <textarea class="form-control" v-model.trim="plainText" id="message" rows="10"></textarea>
        </div>
        <div class="col">
            <label class="form-label" for="cipher">Шифр:</label>
            <textarea class="form-control" v-model.trim="cipherText" id="cipher" rows="10"></textarea>
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <button @click="encryptMessage" class="encrypt-btn">Кодувати</button>
        <button @click="decryptCipher" class="decrypt-btn">Декодувати</button>
    </div>
</template>


<script>

import {encryptDecimal, decryptDecimal} from '../../../helpers/oneTimePad.js';;

export default {
    data(){
        return {
            language:'En',
            key:'',
            plainText:'',
            cipherText:''
        }
    },
    methods:{
        encryptMessage(){
            let result = encryptDecimal(this.key, this.plainText, this.language);
            console.log(result);
            this.cipherText = result;
        },
        decryptCipher(){
            let result = decryptDecimal(this.key, this.cipherText, this.language);
            console.log(result);
            this.plainText = result;
        }
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
    border-radius:5px 0px 0px 5px;
 }

.encrypt-btn:hover{
    background-color:  #87a8d0;
}

 .decrypt-btn {
    background-color: #c3b4d2;
    border-radius:0px 5px 5px 0px;
 }

.decrypt-btn:hover{
    background-color:  #574b9b;
}

</style>
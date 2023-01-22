<template>
    <div class="row mb-3">
        <div class="col">
            <label class="form-label" for="shift">Ключ:</label>
            <input type="number" id="shift" v-model.number="shift" class="form-control" :placeholder="0"/>   
        </div>
        <div class="col">
            <label class="form-label" for="language">Мова:</label>
            <select class="form-select" v-model.trim="language" id="language">
                <option selected value="Ru">Російська</option>
                <option value="En">Англійська</option>
            </select>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col">
            <label class="form-label" for="message">Вихідне повідомлення:</label>
            <textarea class="form-control" v-model.trim="message" id="message" rows="10"></textarea>
        </div>
        <div class="col">
            <label class="form-label" for="cipher">Шифр:</label>
            <textarea class="form-control" v-model.trim="cipher" id="cipher" rows="10"></textarea>
        </div>
    </div>
    <div class="d-flex justify-content-center">
        <button @click="encryptMessage" class="encrypt-btn">Кодувати</button>
        <button @click="decryptCipher" class="decrypt-btn">Декодувати</button>
    </div>
</template>


<script>

import { encrypt, decrypt } from '../../../helpers/caesarsCipher.js';

export default {
    data(){
        return {
            shift:0,
            message:'',
            cipher:'',
            language:'En'
        }
    },
    methods:{
        encryptMessage(){            
           this.cipher = encrypt(this.shift, this.message, this.language);
        },
        decryptCipher(){
            this.message = decrypt(this.shift, this.cipher, this.language);
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
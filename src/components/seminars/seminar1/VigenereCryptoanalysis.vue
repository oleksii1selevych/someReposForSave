<template>
    <div class="row mb-3">
        <div class="col-4 ">
            <label class="form-label" for="language">Language:</label>
            <select class="form-select" v-model="language" id="language">
                <option selected value="Ru">Russian</option>
                <option value="En">English</option>
            </select>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col">
            <label for="cipher" class="form-label">Input cipher:</label>
            <textarea class="form-control" v-model.trim="cipher" id="cipher" rows="10"></textarea>
        </div>
        <div class="col">
            <label for="message" class="form-label">Output message:</label>
            <textarea class="form-control" v-model.trim="message" id="messsage" rows="10"></textarea>
        </div>
    </div>
    <div class="row d-flex justify-content-center">
        <button @click="breakCipher" class="break-btn w-50">Break cipher</button>
    </div>
</template>


<script>

import {breakVigenereCipher} from '../../../helpers/vigenereCipher.js';

export default {
    data(){
        return {
            language:'En',
            cipher:'',
            message:''
        }
    },
    methods:{
        breakCipher(){
            this.message = breakVigenereCipher(this.cipher, this.language);
            console.log(this.message);
        }
    }
}

</script>

<style scoped>
button {
    outline: none;
    padding: 1rem 3rem;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: #87a8d0;
    color: white;
    font-weight: 700;
}

button:hover {
    background-color: #574b9b;
}

h5 {
    font-weight: 400;
}
</style>



export default {
    async encryptWithCaesarsCipher(context, payload){

        const caesarsForEncryptionDto = {
            message:payload.inputMessage,
            shift:payload.shift,
            language:payload.language
        };

        const url = `${import.meta.env.VITE_API_HOST_SEMINAR1}/encryptCaesar`;
        const response = await fetch(url, {
            method:"POST",
            body:JSON.stringify(caesarsForEncryptionDto),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const error = new Error(response.message || "Виникла помилка під час шифрування вихідного повідомлення");
            throw error;
        }

        const responseData = await response.text();
        context.commit('setCaesarsCiphertext', {ciphertext:responseData});
    },
    async decryptWithCaesarsCipher(context, payload){

        const caesarsForDecryptionDto = {
            ciphertext:payload.ciphertext,
            shift:payload.shift,
            language:payload.language
        };

        const url = `${import.meta.env.VITE_API_HOST_SEMINAR1}/decryptCaesar`;
        const response = await fetch(url, {
            method:"POST",
            body:JSON.stringify(caesarsForDecryptionDto),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const error = new Error(response.message || "Виникла помилка під час дешиифрації");
            throw error;
        }

        const responseData = await response.text();
        context.commit('setCaesarsInputMessage', {inputMessage:responseData});
    },
    async encryptWithVigenereCipher(context, payload) {

        const vigenereForEncryptionDto = {
            message:payload.inputMessage,
            key:payload.key,
            language:payload.language,
        };

        const url = `${import.meta.env.VITE_API_HOST_SEMINAR1}/encryptVigenere`;
        const response = await fetch(url, {
            method:"POST",
            body:JSON.stringify(vigenereForEncryptionDto),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const error = new Error(response.message || "Виникла помилка під час шифрування вихідного повідомлення");
            throw error;
        }

        const responseData = await response.text();
        context.commit('setVigenereCiphertext', {ciphertext:responseData});
    },
    async decryptWithVigenereCipher(context, payload) {

        const vigenereForDecryptionDto = {
            ciphertext:payload.ciphertext,
            key:payload.key,
            language:payload.language,
        }

        const url = `${import.meta.env.VITE_API_HOST_SEMINAR1}/decryptVigenere`;
        const response = await fetch(url, {
            method:"POST",
            body:JSON.stringify(vigenereForDecryptionDto),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const error = new Error(response.message || "Виникла помилка під час дешиифрації");
            throw error;
        }

        const responseData = await response.text();
        context.commit('setVigenereInputMessage', {inputMessage:responseData});
    }
}
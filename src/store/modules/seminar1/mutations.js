export default {
    setCaesarsCiphertext: (state, payload) => state.caesarsCiphertext = payload.ciphertext,
    setCaesarsInputMessage: (state, payload) => state.caesarsInputMessage = payload.inputMessage,
    setVigenereCiphertext: (state, payload) => state.vigenereCiphertext = payload.ciphertext,
    setVigenereInputMessage: (state, payload) => state.vigenereInputMessage = payload.inputMessage
}
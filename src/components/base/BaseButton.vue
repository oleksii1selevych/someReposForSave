<template>
    <button @mouseenter="isHovered = true" @mouseleave="isHovered = false" :class="[buttonOutlookClass]">
        <slot/>
    </button>
</template>


<script>

export default {
    props:{
        mode:{
            type:String,
            required:false,
            default:'flat'
        },
    },
    data(){
        return {
            isHovered:false
        }
    },
    computed:{
        buttonOutlookClass(){
            if(this.isHovered){
                return this.mode === 'flat' ? 'outline' : 'flat';
            } 
            return this.mode;
        }
    }
}

</script>


<style scoped>


button {
    appearance: none;
    outline: none;
    background-color: transparent;
    border: 3px solid transparent;
    border-radius: 5px;
    padding: 0.5rem 1.5rem;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
}

.flat {
    background-color: rgba(65, 52, 201, 0.5);
    color: white;
}

.outline {
    color: rgba(65, 52, 201, 0.5);
    border-color: rgba(65, 52, 201, 0.5);
}

</style>
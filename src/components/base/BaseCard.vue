<template>
    <div class="wrapper">
        <slot />
    </div>
</template>



<style scoped>
.wrapper {
    margin: 0 auto;
    width: 90%;
    background-color: white;
    border: 1px solid transparent;
    border-radius: 5px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
    padding: 2rem;
}
</style>
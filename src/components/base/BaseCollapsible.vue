<template>
    <button :class="['collapsible',hoveredCollapsible]" @click="isCollapsed=!isCollapsed" @mouseenter="isHovered = true"
        @mouseleave="isHovered = false">
        <div class="btn-layout">
            <span>{{ title }}</span>
            <i v-if="!isCollapsed" class="pi pi-plus"></i>
            <i v-else class="pi pi-minus"></i>
        </div>
    </button>
    <div v-if="isCollapsed" class="collapsed-content">
        <slot />
    </div>
</template>


<script>

export default {
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isCollapsed: false,
            isHovered: false
        }
    },
    computed: {
        hoveredCollapsible() {
            if (this.isHovered)
                return 'hoveredCollapsible';
            return '';
        }
    }
}

</script>


<style scoped>
.collapsible {
    width: 100%;
    padding: 2rem 1rem 2rem 3rem;
    outline: none;
    border: 1px solid transparent;
    border-bottom: 2px solid  #596e79; 
    background: #c7b198;
    color: white;

}

.collapsed-content {
    width: 100%;
    background-color:   #f0ece2; 
    overflow: hidden;
    padding: 2rem;
}


.hoveredCollapsible {
    background-color:   #dfd3c3;
}
  

.btn-layout {
    display: flex;
    justify-content: space-between;
    align-content: center;
    font-weight: 600;
    font-size: 1.5rem;
}
</style>

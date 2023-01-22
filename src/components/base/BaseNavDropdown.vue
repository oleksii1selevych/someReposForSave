<template>
    <div class="dropdown" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
        <button :class="['dropdown-button', dropdownButtonStyle]" >{{ title }}</button>
        <div :class="['dropdown-content']" :style="dropdownContentStyle">
            <router-link v-for="link of dropdownLinks" :to="link.to">{{ link.title }}</router-link>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        title: {
            type: String,
            required: false,
            default: 'Dropdown'
        },
        mode: {
            type: String,
            required: false,
            default: 'flat'
        },
        dropdownLinks: {
            type: Array,
            required: false,
            default: []
        }
    },
    data() {
        return {
            isHovered: false,
        }
    },
    computed: {
        dropdownButtonStyle() {
            if (this.isHovered) {
                return this.mode === 'flat' ? 'outline' : 'flat';
            }
            return this.mode;
        },
        dropdownContentStyle() {
            return {
                'display': this.isHovered ? 'block' : 'none',
            }
        }
    },
    methods: {
        mouseEnter() {
            this.isHovered = true
        },
        mouseLeave() {
            this.isHovered = false
        }
    }
}

</script>


<style scoped>
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-button {
    border: 1px solid transparent;
    border-radius: 5px;
    width: 10rem;
    font-weight: 700;
    padding: 0.5rem 1.5rem;
    background: none;
    outline: none;
    cursor: pointer;
}

.dropdown-content {
    background-color: white;
    position: absolute;
}

.dropdown-content a {
    color: rgba(65, 52, 201, 0.5);
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    padding: 0.5rem 1.5rem;
    width: 10rem;
    display: block;
}


.dropdown-content a:hover {
    background-color: rgba(65, 52, 201, 0.5);
    color: white;
}


.flat {
    background-color: white;
    color: rgba(65, 52, 201, 0.5);
}

.outline {
    border: 3px solid white;
    color: white;
}
</style>

<!-- 

 -->
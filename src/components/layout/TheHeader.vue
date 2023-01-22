<template>
    <div class="navbar">
        <ul class="navbar-items">
            <li>
                <router-link to="/">
                    <img src="/images/data_security_icon_logo.jpg" class="navbar-logo" />
                </router-link>
            </li>
            <li>
                <base-nav-dropdown mode="flat" title="Практичні заняття" :dropdown-links="seminarLinks"/>
            </li>
            <li>
                <base-nav-dropdown mode="flat" title="Лабораторні роботи" :dropdown-links="labLinks"/>
            </li>
            <li>
                <base-nav-dropdown mode="flat" title="Інше" :dropdown-links="otherLinks"/>
            </li>
        </ul>
    </div>
</template>


<script>

import BaseNavDropdown from '../base/BaseNavDropdown.vue';

export default {
    components: { BaseNavDropdown },
    data(){
        return {
            seminarLinks:[
                {
                    to:'/seminar/1',
                    title:'ПРАКТИЧНЕ ЗАНЯТТЯ 1'
                },
                {
                    to:'/seminar/2',
                    title:'ПРАКТИЧНЕ ЗАНЯТТЯ 2'
                },
                {
                    to:'/seminar/3',
                    title:'ПРАКТИЧНЕ ЗАНЯТТЯ 3'
                }
            ],
            labLinks: [
                {
                    to:'/lab/1',
                    title: 'ЛАБОРАТОРНА РОБОТА 1'
                }
            ],
            otherLinks:[
                {
                    to:'/sixtyPoints',
                    title:'Завдання на 60 балів'
                }
            ]
        }
    }
}

</script>


<style scoped>
.navbar {
    height: 5rem;
    background-color: rgba(65, 52, 201, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}

.navbar ul {
    list-style: none;
    margin: 0;
    padding: 0;
}



.navbar-items {
    display: flex;
    align-items: center;
    gap:2rem
}

.navbar-logo {
    height: 3rem;
    margin-left: 2rem ;
    border: 3px solid purple;
    border-radius: 5px;
}
</style>
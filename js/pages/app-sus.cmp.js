import emailApp from './email-app.cmp.js';
import keepApp from './keep/keep-app.cmp.js'

export default {
    name: 'appsus',
    template: `    
    <section>
    <div class="hamburger-back-layer" v-if="isOpen" @click="isOpen=!isOpen"></div>
        <header class="app-header">
            <div class="app-head-container flex space-between">
            <router-link exact to="/">
                <div class="app-logo">App<i class="fas fa-horse horsie" :style="{color:'green'}"></i></div>
                </router-link>
                <nav class="app-nav-container">
                    <button @click="isOpen=!isOpen" class="app-nav-hamburger"><i class="fas fa-bars" :style="{color:'white'}"></i></button>
                    <div class="btns-container flex space-around direction-column"
                    :class="{isOpen:isOpen}">    
                        <router-link exact to="/email/" class="app-nav-item">Emails</router-link> 
                        <router-link exact to="/keep/" class="app-nav-item">keep</router-link>
                        <router-link exact to="/about/" class="app-nav-item">About</router-link>
                    </div>
                </nav>
            </div>
        </header>
    </section>
    `,
    data(){
        return {
            isOpen : false
        }
    },
    components: {
        emailApp,
        keepApp
    }
}
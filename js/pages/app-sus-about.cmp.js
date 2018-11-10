export default {
    name: 'appsusAbout',
    template: `    
    <section class="app-section">
    <div class="hamburger-back-layer" v-if="isOpen" @click="isOpen=!isOpen"></div>
    <header class="app-header">
    <div class="app-head-container flex space-between">
        <router-link exact to="/">
        <div class="app-logo">App<i class="fas fa-horse horsie" :style="{color:'green'}"></i></div>
        </router-link>


    <nav class="app-nav-container email-container-nav">
            <button @click="isOpen=!isOpen" class="app-nav-hamburger"><i class="fas fa-bars main-ham" :style="{color:'black'}"></i></button>
            <div class="btns-container flex space-around direction-column"
            :class="{isOpen:isOpen}">    
                <router-link exact to="/email/" class="app-nav-item">Emails</router-link> 
                <router-link exact to="/keep/" class="app-nav-item">keep</router-link>
                <router-link exact to="/about/" class="app-nav-item">About</router-link>
            </div>
        </nav>
    </div>
</header>

<div class="about">
<h1 class="about-head">About</h1>
<p>hello our names is Amir and Assaf and we made two apps for you, the one is email app the second is notes keep app.
the vision is to stop the wars and bring world peace through technology.
we hope you'ill enjoy our apps and have the time of you life like we do.</p>
</div>
</section>
    `,
    data(){
        return {
            isOpen : false
        }
    },
}
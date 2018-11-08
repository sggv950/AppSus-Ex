import keepService from '../services/keep.service.js'
import keepFilter from '../cmps/keep-filter.cmp.js'
import keepList from '../cmps/keep-list.cmp.js'

export default {
    name:'keepapp',
    template: `
                <section class="keep-app">
                <keep-filter @filtered="setFilter"></keep-filter>
                <keep-list v-if="keeps" :notes="keeps"></keep-list>
                </section>
    `
,
data(){ 
    return{
            keeps:null
}
},
created() {
    keepService.query()
        .then(keeps => {
            this.keeps = keeps
        })
},
methods:{
    setFilter(filter) {
        keepService.query(filter)
    .then(keeps => this.keeps = keeps)
    }
},
components:{
    keepFilter,
    keepList
}

}



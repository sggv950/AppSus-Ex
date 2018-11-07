import keepService from '../services/keep.service.js'
import keepFilter from '../cmps/keep-filter.cmp.js'
import keepList from '../cmps/keep-list.cmp.js'

export default {
    name:'keepapp',
    template: `
                <section>
                <keep-filter @filtered="setFilter"></keep-filter>
                <keep-list v-if="keeps" :notes="keeps"></keep-list>
                </section>
    `
,
data(){ 
    return{
            type:'txt',
            keeps:null
}
},
created() {
    keepService.query()
        .then(keeps => {
            console.log(keeps)
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



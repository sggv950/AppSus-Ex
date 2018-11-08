export default {
    template: `
    <section class="keep-filter">
        <h3>keep</h3>
        <select v-model="filter.type" @change="emitFilter">
            <option value="">All</option>
            <option>text</option>
            <option>image</option>
            <option>todo</option>
        </select>
        <input type="text" v-model="filter.keyword" @input="emitFilter" placeholder="search by keyword" /><br>
        <router-link class="add-btn" exact to="/keep/composetext/" type="button"><i class="fas fa-font"></i></router-link> 
        <router-link class="add-btn" exact to="/keep/composeimage/" type="button"><i class="fas fa-camera-retro"></i></router-link> 
        <router-link class="add-btn" exact to="/keep/composetodo/" type="button"><i class="fas fa-list-ol"></i></router-link> 
    </section>
    `,
    data() {
        return {
            filter: {
                keyword: '',
                type: '',
            }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('filtered', this.filter)
        }
    },
    created(){
        this.$emit('filtered', this.filter)
    }

}
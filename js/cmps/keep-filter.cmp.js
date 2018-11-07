export default {
    template: `
    <section class="keep-filter">
        <h3>Filter</h3>
        <select v-model="filter.type" @change="emitFilter">
            <option>text</option>
            <option>image</option>
            <option>todo</option>
        </select>
        <input type="text" v-model="filter.keyword" @input="emitFilter" placeholder="search by keyword" />

    </section>
    `,
    data() {
        return {
            filter: {
                keyword: '',
                type: 'text',
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
export default {
    template: `
    <section class="email-filter">
        <h3>Email: {{this.filter.type}}</h3>
        <select v-model="filter.type" @change="emitFilter">
            <option>Inbox</option>
            <option>Outbox</option>
            <option>Drafts</option>
        </select>
        <input type="text" v-model="filter.keyword" @input="emitFilter" placeholder="search by name" />

    </section>
    `,
    data() {
        return {
            filter: {
                keyword: '',
                type: 'Inbox',
            }
        }
    },
    methods: {
        emitFilter() {
            console.log(this.filter)
            this.$emit('filtered', this.filter)
        }
    },
    created(){
        this.$emit('filtered', this.filter)
    }

}
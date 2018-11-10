export default {
    template: `
    <section class="email-filter">
        <div class="topnav" :class="{responsive: isResponsive}" id="myTopnav">
            <ul class="email-filter-ul">
            
            
            
           

            <li>
                <input type="radio" id="inbox" value="Inbox" v-model="filter.type" @change="emitFilter">
                <label for="inbox">Inbox</label>
            </li>
            <li>
                <input type="radio" id="outbox" value="Outbox" v-model="filter.type" @change="emitFilter">
                <label for="outbox">Outbox</label>
                
            </li>
            <li>
                <input type="radio" id="drafts" value="Drafts" v-model="filter.type" @change="emitFilter">
                <label for="drafts">Drafts</label>
            </li>
            <li>
                <input type="radio" id="read" value="Read" v-model="filter.type" @change="emitFilter">
                <label for="read">Read</label>
            </li>
            <li>
                <input type="radio" id="unread" value="Unread" v-model="filter.type" @change="emitFilter">
                <label for="unread">Unread</label>
            </li>
        
            <li><input type="text" v-model="filter.keyword" @input="emitFilter" placeholder="search by name" /></li>
        
            
                <li class="icon" @click="switchResponsive"><i class="fa fa-bars" ></i></li>
           
        
    </ul>

   
    </div>
    </section>

    `,
    data() {
        return {
            filter: {
                keyword: '',
                type: 'Inbox',
            },
            isResponsive: false

        }
    },
    methods: {
        emitFilter() {
            this.isResponsive = !this.isResponsive;
            this.$emit('filtered', this.filter)
        },
        switchResponsive(){
            this.isResponsive = !this.isResponsive;
        }
    },
    created() {
        this.$emit('filtered', this.filter)
    }

}



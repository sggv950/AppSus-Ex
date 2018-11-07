
export default {
    name:'emailstatus',
    props:['progmail'],
    template: `
        <div class="myProgress">
        <div v-if="getProgress" class="myBar" :style="getProgClass">{{getProgress}}</div>
        </div>
        
    `,
    data(){
            return{
                result : 0
            }
    },
    created(){
    },
    computed:{
        getProgress(){
            var progCount = 0;
            for (let i = 0; i< this.progmail.length; i++) {
                if(this.progmail[i].isRead) progCount++
            }
            this.result =  progCount / this.progmail.length
            this.result = parseInt(this.result * 100);
            return this.result+'%'
        },
        
    getProgClass(){
        if(!this.result)  return {width : 0+'%'}
        return {width : this.result+'%'}
    }

    }
}
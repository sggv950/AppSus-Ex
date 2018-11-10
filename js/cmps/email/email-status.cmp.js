
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
                result : 0,
                progCount : 0
            }
    },
    created(){
        
    },
    computed:{
        getProgress(){
            this.progCount = 0;
            for (let i = 0; i< this.progmail.length; i++) {
                if(this.progmail[i].isRead) this.progCount++
            }
            this.result =  this.progCount / this.progmail.length
            this.result = parseInt(this.result * 100);
            this.$emit('count', this.progmail.length - this.progCount)
            if(!this.result) return ''
            return this.result+'%'
        },
        
    getProgClass(){
        if(!this.result)  return {width : 0+'%'}
        return {width : this.result+'%'}
    }

    }
}
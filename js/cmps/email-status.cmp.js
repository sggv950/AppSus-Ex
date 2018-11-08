
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
            for (let i = 0; i< this.progmail.length; i++) {
                if(this.progmail[i].isRead) this.progCount++
            }
            this.result =  this.progCount / this.progmail.length
            this.result = parseInt(this.result * 100);
<<<<<<< HEAD
            this.$emit('count', this.progmail.length - this.progCount)
            if(!this.result) return ''
=======
            if(!this.result) return '';
>>>>>>> 1b34c566a93cc1ea2bb54d749fe90a39e2019775
            return this.result+'%'
        },
        
    getProgClass(){
        if(!this.result)  return {width : 0+'%'}
        return {width : this.result+'%'}
    }

    }
}

export default {
    name: 'composimage',
    template: `
    <div class="compose-new-image item" :style="getClass">
    <input class="input-compose-image" type="text" v-model="newImage.text" placeholder="Enter headline"/>
    <input class="input-compose-image" type="text" v-model="newImage.image" placeholder="Enter link for image"/>
        <img class="compose-image-item" :src="getImage">
        <div class="compose-image-btns">
        Text Color:<input class="newImage.color" type="color"  v-model="newImage.color" value="#ffffff"/>
        Background Color:<input type="color" v-model="newImage.backgroundColor" value="#ffffff" />
        <button @click="">clearImage</button>
        <button @click="addImage">Add Note</button>
        </div>
        </div>
        
    `,
    data() {
        return {
            newImage: {
                id: '',
                type: "keepImage",
                text: '',
                time: moment().subtract(10, 'days').calendar(),
                image: '',
                backgroundColor:'white',
                color:'black'
            }
        }
    },
    computed: {
        getImage() {
                return this.newImage.image
        },
        getClass(){
            return {
            color : this.newImage.color,
            backgroundColor: this.newImage.backgroundColor
            }    
    }
},
}

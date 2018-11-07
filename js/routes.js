import appsus from './pages/app-sus.cmp.js'
import emailApp from './pages/email-app.cmp.js'
import emailDetails from './pages/email-details.cmp.js'


const routes = [
    {path: '/', component: appsus},
    {path: '/email', component: emailApp},
    {path: '/email/:id', component: emailDetails}
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;
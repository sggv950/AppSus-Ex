import appsus from './pages/app-sus.cmp.js'
// import about from './pages/about.js'


const routes = [
    {path: '/', component: appsus},
    // {path: '/about', component: about}
  ];

Vue.use(VueRouter);
var myRouter = new VueRouter({routes})

export default myRouter;
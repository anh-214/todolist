import Home from "../components/HomeComponent.vue"
import Detail from "../components/DetailComponent.vue"
import Create from "../components/CreateComponent.vue"
import NotFound from "../components/NotFoundComponent.vue"



export default [
    {path: '/', component: Home, name: 'home'},
    {path: '/detail/:id', component: Detail, name: 'detail'},
    {path: '/create', component: Create, name: 'create'},
    {path: '*', component: NotFound, name: 'notfound'}
]
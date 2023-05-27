// import {createApp} from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage'
import ServicePage from '../components/ServicePage'
import DonatePage from '../components/DonatePage'
import ContactForm from '../components/ContactForm'
import AdoptAnimal from '../components/AdoptAnimal'
import FosterAnimal from '../components/FosterAnimal'
// import FosterForm from '../components/FosterForm'
// import AdoptForm from '../components/AdoptForm'
import AboutusPage from '../components/AboutusPage'
import pageNotfound from '../components/pageNotfound'



const routes=[
    {
        path:"/",
        name:"LandingPage",
        component:LandingPage,
    },
    {
        path:'/services',
        name:"ServicePage",
        component:ServicePage
    },
    {
        path:'/donate',
        name:"DonatePage",
        component:DonatePage
    },
    {
        path:'/services/adopt_animal',
        name:"AdoptAnimal",
        component:AdoptAnimal
    },
    {
        path:'/services/foster_animal',
        name:"FosterAnimal",
        component:FosterAnimal
    },
    // {
    //     path:'/services/adopt_animal',
    //     name:"AdoptAnimal",
    //     component:AdoptForm
    // },
   
    {
        path:'/contact-us',
        name:"ContactForm",
        component:ContactForm
    },
    {
        path:'/about_us',
        name:"AboutUs",
        component:AboutusPage
    },
    {
        path:"/:pathMatch(.*)*",
        name:"pageNotfound",
        component:pageNotfound
    }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router
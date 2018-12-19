import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import GithubBox from 'vue-material-design-icons/GithubBox.vue'
import LinkedinBox from 'vue-material-design-icons/LinkedinBox.vue'
import ProgressiveImage from './components/ProgressiveImage.vue'
import LeadComponent from './components/LeadComponent.vue'
import AboutComponent from './components/AboutComponent.vue'
import ExperienceComponent from './components/ExperienceComponent.vue'
import EducationComponent from './components/EducationComponent.vue'
import ProjectsComponent from './components/ProjectsComponent.vue'
import SkillsComponent from './components/SkillsComponent.vue'
import ContactComponent from './components/ContactComponent.vue'
import ToolbarComponent from './components/ToolbarComponent.vue'
import FooterCompoennt from './components/FooterComponent.vue'


Vue.component('github-box', GithubBox);
Vue.component('linkedin-box', LinkedinBox);

Vue.config.productionTip = false

// Vue.use(VueProgressiveImage);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.component('progressive-image', ProgressiveImage);
Vue.component('lead-component', LeadComponent);
Vue.component('about-component', AboutComponent);
Vue.component('experience-component', ExperienceComponent);
Vue.component('education-component', EducationComponent);
Vue.component('projects-component', ProjectsComponent);
Vue.component('skills-component', SkillsComponent);
Vue.component('contact-component', ContactComponent);
Vue.component('toolbar-component', ToolbarComponent);
Vue.component('footer-component', FooterCompoennt);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

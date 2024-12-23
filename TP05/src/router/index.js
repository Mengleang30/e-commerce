import { createRouter, createWebHistory } from "vue-router";
import Page1 from "@/views/Page1.vue";
import Page2 from "@/views/Page2.vue";
import Page3 from "@/views/Page3.vue";
import Section1 from "@/views/sections/Section1.vue";
import Section2 from "@/views/sections/Section2.vue";
import Section3 from "@/views/sections/Section3.vue";
import Section4 from "@/views/sections/Section4.vue";
import Home from "@/views/Home.vue";

const routes = [
    {
        path : '',
        name : "Home",
        component : Home,
    },
    {
        path: '/page1',
        name : "Page1",
        component: Page1,
        children: [
            { path: "section1", component: Section1 },
            { path: "section2", component: Section2 },
            { path: "section3", component: Section3 },
            { path: "section4", component: Section4 },
          ],
    },
      {
        path: '/page2',
        name : "Page2",
        component: Page2,
        children: [
            { path: "section1", component: Section1 },
            { path: "section2", component: Section2 },
            { path: "section3", component: Section3 },
            { path: "section4", component: Section4 },
          ],
      },
      {
        path: '/page3',
        name : "Page3",
        component: Page3,
        children: [
            { path: "section1", component: Section1 },
            { path: "section2", component: Section2 },
            { path: "section3", component: Section3 },
            { path: "section4", component: Section4 },
          ],
      },
    ];
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;
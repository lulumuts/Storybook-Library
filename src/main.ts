import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import '@/assets/style.scss'
import * as components from "@/components/index"

const vuetify = createVuetify();

const MyComponentLibrary = {
    install: (app) => {
        // Dynamically register components
        Object.entries(components).forEach(([componentName, Component]) => {
            app.component(componentName, Component);
        });
    },
};

export { 
    vuetify, 
    MyComponentLibrary, 
    components
}

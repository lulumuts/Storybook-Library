import SideImage  from '../components/Atoms/SideImage.vue';

export default {
  title: 'Atoms/Side Image',
  component: { SideImage },
  parameters: {
    layout: 'centered',
},
argTypes: { 
    src: { 
        control: 'select',
        options: [
            'AuthImage',
            'loginImage',
            'createProjectImage',
            ],
     },
},
};
export const sideImage = {
    render: (args) => ({
        components: { SideImage },
        setup() {
            return { args };
        },
        template: '<SideImage v-bind="args" style="height: 90vh"/>',
    }),
};

sideImage.args= {
    src: "AuthImage"
}

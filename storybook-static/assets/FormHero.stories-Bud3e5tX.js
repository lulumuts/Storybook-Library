import{F as t}from"./FormHero-C7UilPjx.js";import"./vue.esm-bundler-uAEZU4-3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p={title:"Templates/Containers/Form Hero",component:{FormHero:t},argTypes:{Type:{control:"select",options:["Login","InviteProjectAdmin","InviteOrganisations","CreateNewOrganisation","CreateProject","CreateAccount","WorkflowConfigProposal"]}},parameters:{layout:"centered"}},e={render:s=>({components:{FormHero:t},args:{Type:"InviteProjectAdmin"},setup(){return{args:s}},template:'<FormHero v-bind="args" />'})};e.args={Type:"InviteProjectAdmin"};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FormHero
    },
    args: {
      Type: 'InviteProjectAdmin'
    },
    setup() {
      return {
        args
      };
    },
    template: '<FormHero v-bind="args" />'
  })
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const c=["formHero"];export{c as __namedExportsOrder,p as default,e as formHero};

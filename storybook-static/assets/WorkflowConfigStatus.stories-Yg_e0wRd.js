import{n as p,q as c,b as u,C as d,y as l,z as m,v as f,x as g}from"./vue.esm-bundler-uAEZU4-3.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as w}from"./VChip-0r_npzLP.js";import"./index-DO67qM6T.js";import"./tag-BF4Hy_PK.js";import"./display-DeHUkF7a.js";import"./locale-BpwrwHwK.js";import"./resizeObserver-DfAXdn7d.js";import"./VIcon-TVbrmen2.js";import"./index-S6nd6Ck7.js";import"./density-DjwGNt32.js";import"./VAvatar-DMNtNa3d.js";import"./VImg-CEJURHQz.js";import"./index-Ber2yls2.js";const a=p({name:"DotStatus",props:{StatusText:{type:String,required:!0,validator:t=>["Review Pending","Rejected","Accepted"].includes(t)}}}),_={class:"workflow-config-status"};function v(t,i,C,k,x,T){return m(),c("div",_,[u(w,{variant:"outlined",class:l({pending:t.StatusText==="Review Pending",rejected:t.StatusText==="Rejected",accepted:t.StatusText==="Accepted"})},{default:d(()=>[f("span",null,g(t.StatusText),1)]),_:1},8,["class"])])}const n=S(a,[["render",v],["__scopeId","data-v-198a526c"]]);a.__docgenInfo={displayName:"DotStatus",exportName:"default",description:"",tags:{},props:[{name:"StatusText",type:{name:"string"},required:!0}],sourceFiles:["/Users/lulumutuli/Documents/Work/UI-Library/src/components/Atoms/WorkflowConfigStatus.vue"]};const B={title:"Atoms/Status Indicators/Workflow Config Status",component:{WorkflowConfigStatus:n},parameters:{layout:"centered"},argTypes:{StatusText:{control:"select",options:["Review Pending","Rejected","Accepted"]}}},e={render:t=>({components:{WorkflowConfigStatus:n},setup(){return{args:t}},template:'<WorkflowConfigStatus v-bind="args" />'})};e.args={StatusText:"Review Pending"};var o,s,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      WorkflowConfigStatus
    },
    setup() {
      return {
        args
      };
    },
    template: '<WorkflowConfigStatus v-bind="args" />'
  })
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const z=["workflowConfigStatus"];export{z as __namedExportsOrder,B as default,e as workflowConfigStatus};

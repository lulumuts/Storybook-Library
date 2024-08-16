import{n as S,q as g,B as s,C as a,y as f,z as r,v as o,x as n}from"./vue.esm-bundler-uAEZU4-3.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as u}from"./VChip-0r_npzLP.js";import"./index-DO67qM6T.js";import"./tag-BF4Hy_PK.js";import"./display-DeHUkF7a.js";import"./locale-BpwrwHwK.js";import"./resizeObserver-DfAXdn7d.js";import"./VIcon-TVbrmen2.js";import"./index-S6nd6Ck7.js";import"./density-DjwGNt32.js";import"./VAvatar-DMNtNa3d.js";import"./VImg-CEJURHQz.js";import"./index-Ber2yls2.js";const l=S({name:"DotStatus",props:{StatusText:{type:String,required:!0,validator:t=>["In Progress","Blocked","Done","Caught PII Error","Failed","Not Started"].includes(t)}}}),T={class:"dot-status"};function D(t,m,x,v,k,y){return r(),g("div",T,[t.StatusText==="Not Started"?(r(),s(u,{key:0,variant:"text",class:"default"},{default:a(()=>[o("span",null,n(t.StatusText),1)]),_:1})):(r(),s(u,{key:1,"prepend-icon":t.StatusText==="Caught PII Error"||t.StatusText==="Failed"?"mdi-alert-circle-outline":"mdi-circle",variant:"text",class:f({"in-progress":t.StatusText==="In Progress",blocked:t.StatusText==="Blocked",done:t.StatusText==="Done","pii-error":t.StatusText==="Caught PII Error",failed:t.StatusText==="Failed"})},{default:a(()=>[o("span",null,n(t.StatusText),1)]),_:1},8,["prepend-icon","class"]))])}const c=I(l,[["render",D],["__scopeId","data-v-edfbf91a"]]);l.__docgenInfo={displayName:"DotStatus",exportName:"default",description:"",tags:{},props:[{name:"StatusText",type:{name:"string"},required:!0}],sourceFiles:["/Users/lulumutuli/Documents/Work/UI-Library/src/components/Atoms/DotStatus.vue"]};const U={title:"Atoms/Status Indicators/Dot Status",component:{DotStatus:c},parameters:{layout:"centered"},argTypes:{StatusText:{control:"select",options:["In Progress","Blocked","Done","Caught PII Error","Failed","Not Started"]}}},e={render:t=>({components:{DotStatus:c},setup(){return{args:t}},template:'<DotStatus v-bind="args" />'})};e.args={StatusText:"In Progress"};var i,p,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DotStatus
    },
    setup() {
      return {
        args
      };
    },
    template: '<DotStatus v-bind="args" />'
  })
}`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const w=["dotStatus"];export{w as __namedExportsOrder,U as default,e as dotStatus};

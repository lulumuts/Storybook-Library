import{n as d,q as t,z as o,v as c}from"./vue.esm-bundler-uAEZU4-3.js";import{_ as u}from"./_plugin-vue_export-helper-DlAUqK2U.js";const i=d({name:"StatusIcon",props:{isPassed:{type:Boolean,default:!1}}}),p="data:image/svg+xml,%3csvg%20width='169'%20height='169'%20viewBox='0%200%20169%20169'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='81.5'%20cy='89.5'%20r='73.5'%20fill='%23DCEDC8'%20stroke='%234CAF50'%20stroke-width='8'/%3e%3cpath%20d='M49.2917%2091.5417L70.0631%20112.313C70.2584%20112.508%2070.575%20112.508%2070.7702%20112.313L119.708%2063.375'%20stroke='%234CAF50'%20stroke-width='10'%20stroke-linecap='round'/%3e%3c/svg%3e",m="data:image/svg+xml,%3csvg%20width='169'%20height='169'%20viewBox='0%200%20169%20169'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='81.5'%20cy='89.5'%20r='73.5'%20fill='%23FFEBEE'%20stroke='%23D50000'%20stroke-width='8'/%3e%3cpath%20d='M112.083%2062.5883L105.621%2055.8599L80%2082.535L54.3792%2055.8599L47.9167%2062.5883L73.5375%2089.2634L47.9167%20115.938L54.3792%20122.667L80%2095.9918L105.621%20122.667L112.083%20115.938L86.4625%2089.2634L112.083%2062.5883Z'%20fill='%23D50000'/%3e%3c/svg%3e",_={key:0,class:"statusIcon__passed"},g=c("img",{src:p,alt:"Passed Status Icon"},null,-1),f=[g],h={key:1,class:"statusIcon__failed"},v=c("img",{src:m,alt:"Failed Status Icon"},null,-1),I=[v];function w(e,L,k,x,S,y){return o(),t("div",null,[e.isPassed?(o(),t("div",_,f)):(o(),t("div",h,I))])}const l=u(i,[["render",w]]);i.__docgenInfo={displayName:"StatusIcon",exportName:"default",description:"",tags:{},props:[{name:"isPassed",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/lulumutuli/Documents/Work/UI-Library/src/components/Atoms/StatusIcon.vue"]};const C={title:"Atoms/Icons/StatusIcon",component:{StatusIcon:l},argTypes:{isPassed:{control:"boolean"}},parameters:{layout:"centered"}},s={render:e=>({components:{StatusIcon:l},args:{isPassed:!0},setup(){return{args:e}},template:'<StatusIcon v-bind="args" />'})};var n,a,r;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      StatusIcon
    },
    args: {
      isPassed: true
    },
    setup() {
      return {
        args
      };
    },
    template: '<StatusIcon v-bind="args" />'
  })
}`,...(r=(a=s.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const E=["statusIcon"];export{E as __namedExportsOrder,C as default,s as statusIcon};

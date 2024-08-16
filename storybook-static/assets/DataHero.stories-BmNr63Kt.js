import{n as l,q as m,v as o,x as u,b as r,E as _,z as h}from"./vue.esm-bundler-uAEZU4-3.js";import{D as f}from"./DataCard-Duk9mcjs.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VCard-DHyF8Mxb.js";import"./tag-BF4Hy_PK.js";import"./density-DjwGNt32.js";import"./VIcon-TVbrmen2.js";import"./VAvatar-DMNtNa3d.js";import"./locale-BpwrwHwK.js";import"./index-S6nd6Ck7.js";import"./VImg-CEJURHQz.js";import"./index-Ber2yls2.js";import"./loader-DyDpDlfA.js";import"./position-CQ3bkD4L.js";const p=l({name:"Hero",components:{DataCard:f},props:{TeamMember:{type:String,default:""},Type:{type:String,required:!0,validator:e=>["Dashboard","MyWorkflows","WorkflowDetails"].includes(e)}},data(){return{Title:"",Text:""}}}),b={class:"data-hero"},g={class:"data-hero__container"},T={class:"data-hero__title"},y={class:"flex-container"};function v(e,c,H,S,k,x){const t=_("DataCard");return h(),m("div",b,[o("div",g,[o("h1",T,u(e.Type),1),o("div",y,[r(t,{class:"data-hero__data",Title:"3",Subtitle:"Project Organisations"}),r(t,{class:"data-hero__data",Title:"3",Subtitle:"Active Global Workflows"}),r(t,{class:"data-hero__data",Title:"3",Subtitle:"Workflow Errors"}),r(t,{class:"data-hero__graph",GraphCard:"",Title:"3",Subtitle:"Success Metrics"})])])])}const d=D(p,[["render",v],["__scopeId","data-v-e6523595"]]);p.__docgenInfo={displayName:"Hero",exportName:"default",description:"",tags:{},props:[{name:"TeamMember",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"Type",type:{name:"string"},required:!0}],sourceFiles:["/Users/lulumutuli/Documents/Work/UI-Library/src/components/Templates/DataHero.vue"]};const j={title:"Templates/Containers/DataHero",component:{DataHero:d},parameters:{layout:"centered"}},a={render:e=>({components:{DataHero:d},args:{Type:"Dashboard"},setup(){return{args:e}},template:'<DataHero v-bind="args" />'})};a.args={Type:"Dashboard"};var s,n,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      DataHero
    },
    args: {
      Type: 'Dashboard'
    },
    setup() {
      return {
        args
      };
    },
    template: '<DataHero v-bind="args" />'
  })
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const z=["dashboardHero"];export{z as __namedExportsOrder,a as dashboardHero,j as default};

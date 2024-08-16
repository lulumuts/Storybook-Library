import{n as f,q as b,v as s,B as _,C as H,D as v,x as a,z as i,G as w}from"./vue.esm-bundler-uAEZU4-3.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as k}from"./VBtn-Dw3Zelhj.js";import"./index-S6nd6Ck7.js";import"./tag-BF4Hy_PK.js";import"./density-DjwGNt32.js";import"./locale-BpwrwHwK.js";import"./VIcon-TVbrmen2.js";import"./resizeObserver-DfAXdn7d.js";import"./loader-DyDpDlfA.js";import"./position-CQ3bkD4L.js";const y=f({name:"Hero",props:{TeamMember:{type:String,default:""},Type:{type:String,required:!0,validator:e=>{}}},data(){return{Title:"",Text:""}},mounted(){switch(this.Type){case"Insights":this.Title="Insights",this.Text="Gain insights on your data, outputs on your workflows, and monitor the efficiency of your processes. You will be able to view the specific metrics for each of your workflows within your workflow specs.";break;case"Auditing":this.Title="Auditing & Reporting",this.Text="An immutable log of all your processes that can be exported for auditing and reporting purposes.";break;case"ProjectTeam":this.Title="Project Team",this.Text="Depending on your permissions, you can add a Team Member below, export this list for auditing purposes, or simply identify who is the Project Admin at all Organisations within this Project.";break;default:return""}}}),j={class:"hero"},A={class:"hero__container"};function I(e,P,B,S,V,C){return i(),b("div",j,[s("div",A,[e.Type==="ProjectTeam"?(i(),_(k,{key:0,"prepend-icon":"mdi-plus",variant:"outlined",class:"hero__button"},{default:H(()=>[w(" Add Team Member ")]),_:1})):v("",!0),s("h1",null,a(e.Title),1),s("p",null,a(e.Text),1)])])}const o=x(y,[["render",I],["__scopeId","data-v-360c9ebb"]]);y.__docgenInfo={displayName:"Hero",exportName:"default",description:"",tags:{},props:[{name:"TeamMember",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"Type",type:{name:"string"},required:!0}],sourceFiles:["/Users/lulumutuli/Documents/Work/UI-Library/src/components/Templates/Hero.vue"]};const L={title:"Templates/Containers/Hero",component:{Hero:o},parameters:{layout:"centered"}},r={render:e=>({components:{Hero:o},args:{Type:"Insights"},setup(){return{args:e}},template:'<Hero v-bind="args" />'})};r.args={Type:"Insights"};const t={render:e=>({components:{Hero:o},args:{Type:"Auditing"},setup(){return{args:e}},template:'<Hero v-bind="args" />'})};t.args={Type:"Auditing"};const n={render:e=>({components:{Hero:o},args:{Type:"ProjectTeam"},setup(){return{args:e}},template:'<Hero v-bind="args" />'})};n.args={Type:"ProjectTeam"};var p,c,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Hero
    },
    args: {
      Type: 'Insights'
    },
    setup() {
      return {
        args
      };
    },
    template: '<Hero v-bind="args" />'
  })
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,d,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Hero
    },
    args: {
      Type: 'Auditing'
    },
    setup() {
      return {
        args
      };
    },
    template: '<Hero v-bind="args" />'
  })
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,T,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Hero
    },
    args: {
      Type: 'ProjectTeam'
    },
    setup() {
      return {
        args
      };
    },
    template: '<Hero v-bind="args" />'
  })
}`,...(h=(T=n.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const R=["insightsHero","auditingHero","projectTeamHero"];export{R as __namedExportsOrder,t as auditingHero,L as default,r as insightsHero,n as projectTeamHero};

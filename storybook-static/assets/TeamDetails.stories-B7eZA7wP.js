import{n as c,q as l,v as t,b as d,x as p,z as u,H as _,I as f}from"./vue.esm-bundler-uAEZU4-3.js";import{_ as h}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as b}from"./VIcon-TVbrmen2.js";import"./tag-BF4Hy_PK.js";const o=c({name:"Hero",props:{TeamMember:{type:String,default:""},LinkA:{type:String,default:""},LinkB:{type:String,default:""}},data(){return{items:[{title:"Project Team",disabled:!1,href:this.LinkA},{title:"Team Member",disabled:!1,href:this.LinkB}]}}}),i=e=>(_("data-v-26b2d4e2"),e=e(),f(),e),g={class:"team-details"},T={class:"team-details__container"},k={class:"team-details__breadcrumbs"},v=["href"],y=i(()=>t("h4",null,"Project Team",-1)),L=[y],D=["href"],S=i(()=>t("h4",null,"Team Member",-1)),I=[S];function B(e,V,A,M,H,N){return u(),l("div",g,[t("div",T,[t("div",k,[t("a",{href:e.LinkA},L,8,v),d(b,{icon:"mdi-chevron-right",class:"breadcrumb-icon"}),t("a",{href:e.LinkA},I,8,D)]),t("h1",null,p(e.TeamMember),1)])])}const m=h(o,[["render",B],["__scopeId","data-v-26b2d4e2"]]);o.__docgenInfo={displayName:"Hero",exportName:"default",description:"",tags:{},props:[{name:"TeamMember",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"LinkA",type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"LinkB",type:{name:"string"},defaultValue:{func:!1,value:"''"}}],sourceFiles:["/Users/lulumutuli/Documents/Work/UI-Library/src/components/Templates/TeamDetails.vue"]};const E={title:"Templates/Containers",component:{TeamDetails:m},parameters:{layout:"centered"}},a={render:e=>({components:{TeamDetails:m},setup(){return{args:e}},template:'<TeamDetails v-bind="args" />'})};a.args={TeamMember:"Cece Stock",LinkA:"https://vuejs.org/guide/reusability/composables",LinkB:""};var s,n,r;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      TeamDetails
    },
    setup() {
      return {
        args
      };
    },
    template: '<TeamDetails v-bind="args" />'
  })
}`,...(r=(n=a.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const P=["teamDetailsHero"];export{P as __namedExportsOrder,E as default,a as teamDetailsHero};

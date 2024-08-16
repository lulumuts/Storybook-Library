import{n as d,q as t,b as r,C as n,z as o,G as a}from"./vue.esm-bundler-uAEZU4-3.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as p}from"./VChip-0r_npzLP.js";import"./index-DO67qM6T.js";import"./tag-BF4Hy_PK.js";import"./display-DeHUkF7a.js";import"./locale-BpwrwHwK.js";import"./resizeObserver-DfAXdn7d.js";import"./VIcon-TVbrmen2.js";import"./index-S6nd6Ck7.js";import"./density-DjwGNt32.js";import"./VAvatar-DMNtNa3d.js";import"./VImg-CEJURHQz.js";import"./index-Ber2yls2.js";const l=d({name:"Chip",props:{isYes:{type:Boolean,default:!1}}}),f={key:0,class:"chip__yes"},h={key:1,class:"chip__no"};function C(s,g,y,v,Y,b){return o(),t("div",null,[s.isYes?(o(),t("div",f,[r(p,null,{default:n(()=>[a(" Yes ")]),_:1})])):(o(),t("div",h,[r(p,{variant:"outlined"},{default:n(()=>[a(" No ")]),_:1})]))])}const u=_(l,[["render",C]]);l.__docgenInfo={displayName:"Chip",exportName:"default",description:"",tags:{},props:[{name:"isYes",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/lulumutuli/Documents/Work/UI-Library/src/components/Atoms/Chip.vue"]};const z={title:"Atoms/Status Indicators/Chip",component:{Chip:u},argTypes:{isYes:{control:"boolean"}},parameters:{layout:"centered"}},e={render:s=>({components:{Chip:u},args:{isYes:!0},setup(){return{args:s}},template:'<Chip v-bind="args" />'})};var i,c,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Chip
    },
    args: {
      isYes: true
    },
    setup() {
      return {
        args
      };
    },
    template: '<Chip v-bind="args" />'
  })
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const D=["chip"];export{D as __namedExportsOrder,e as chip,z as default};

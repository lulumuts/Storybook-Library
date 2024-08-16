import{r as c,c as i,q as m,x as p,F as d,z as f}from"./vue.esm-bundler-uAEZU4-3.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";const s={name:"txt",props:{label:{type:String,default:"Button",required:!0},size:{type:Number,default:14}},setup(e){return e=c(e),{style:i(()=>({fontSize:`${e.size}px`}))}}};function g(e,y,l,u,_,b){return f(),m("p",{style:d(u.style)},p(l.label),5)}const o=x(s,[["render",g]]);s.__docgenInfo={displayName:"txt",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0,defaultValue:{func:!1,value:"'Button'"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"14"}}],sourceFiles:["/Users/lulumutuli/Documents/Work/UI-Library/src/components/Text.vue"]};const v={title:"Text",component:{Text:o},argTypes:{label:"String",backgroundColor:{control:"color"},onClick:{}}},t={args:{size:80},render:e=>({components:{Text:o},setup(){return{args:e}},template:'<Text v-bind="args" />'})};var r,n,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    size: 80
  },
  render: args => ({
    components: {
      Text
    },
    setup() {
      return {
        args
      };
    },
    template: '<Text v-bind="args" />'
  })
}`,...(a=(n=t.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const S=["Primary"];export{t as Primary,S as __namedExportsOrder,v as default};

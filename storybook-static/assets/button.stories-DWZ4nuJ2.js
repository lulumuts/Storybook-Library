import{r as E,c as R,q as s,b as e,D as u,C as c,z as r,G as _,x as d,v as g}from"./vue.esm-bundler-uAEZU4-3.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as l}from"./VBtn-Dw3Zelhj.js";import{V as h}from"./VIcon-TVbrmen2.js";import"./index-S6nd6Ck7.js";import"./tag-BF4Hy_PK.js";import"./density-DjwGNt32.js";import"./locale-BpwrwHwK.js";import"./resizeObserver-DfAXdn7d.js";import"./loader-DyDpDlfA.js";import"./position-CQ3bkD4L.js";const I={name:"btn",props:{label:{type:String,default:"Button"},isStandardBtn:{type:Boolean,default:!1},isFormBtn:{type:Boolean,default:!1},isAuthBtn:{type:Boolean,default:!1},isModalBtn:{type:Boolean,default:!1},isTextBtn:{type:Boolean,default:!1}},emits:["click"],setup(n,{emit:i}){return n=E(n),{style:R(()=>({})),onClick(){i("clicked")}}}},q={key:0,class:"button"},G={key:1,class:"button__auth"},O={class:"chevron-right"},W={key:2,class:"button"},j={key:3,class:"button"},H={key:4,class:"button"};function J(n,i,t,b,K,P){return r(),s("div",{type:"button",onClick:i[0]||(i[0]=(...z)=>b.onClick&&b.onClick(...z))},[t.isStandardBtn?(r(),s("div",q,[e(l,{class:"button__standard",icon:"mdi-chevron-right",size:"small"})])):u("",!0),t.isAuthBtn?(r(),s("div",G,[e(l,{class:"button__circle",variant:"text"},{default:c(()=>[_(d(t.label)+" ",1),g("span",O,[e(h,{icon:"mdi-chevron-right"})])]),_:1})])):u("",!0),t.isFormBtn&&!t.isAuthBtn?(r(),s("div",W,[e(l,{class:"button__submit","append-icon":"mdi-arrow-right"},{default:c(()=>[_(d(t.label),1)]),_:1})])):u("",!0),t.isModalBtn&&!t.isAuthBtn&&!t.isFormBtn?(r(),s("div",j,[e(l,{class:"button__modal",variant:"outlined"},{default:c(()=>[g("span",null,d(t.label),1)]),_:1})])):u("",!0),t.isTextBtn&&!t.isModalBtn&&!t.isAuthBtn&&!t.isFormBtn?(r(),s("div",H,[e(l,{class:"button__txt",variant:"text",size:"large"},{default:c(()=>[e(h,{icon:"mdi-plus-box"}),g("span",null,d(t.label),1)]),_:1})])):u("",!0)])}const o=U(I,[["render",J],["__scopeId","data-v-773d0dc8"]]);I.__docgenInfo={displayName:"btn",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},defaultValue:{func:!1,value:"'Button'"}},{name:"isStandardBtn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isFormBtn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isAuthBtn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isModalBtn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"isTextBtn",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"click"}],sourceFiles:["/Users/lulumutuli/Documents/Work/UI-Library/src/components/Atoms/Button.vue"]};const ot={title:"Button",component:{Button:o},argTypes:{label:"String",backgroundColor:{control:"color"}}},m={args:{label:"Login",isStandardBtn:!0},render:n=>({components:{Button:o},setup(){return{args:n}},template:'<Button v-bind="args" />'})},a={args:{label:"Login",isAuthBtn:!0},render:n=>({components:{Button:o},setup(){return{args:n}},template:'<Button v-bind="args" />'})},B={args:{...a.args,label:"Submit",isFormBtn:!0,isAuthBtn:!1},render:n=>({components:{Button:o},setup(){return{args:n}},template:'<Button v-bind="args" />'})},p={args:{...a.args,label:"Submit",isModalBtn:!0,isFormBtn:!1,isAuthBtn:!1},render:n=>({components:{Button:o},setup(){return{args:n}},template:'<Button v-bind="args" />'})},f={args:{...a.args,label:"Register new Dataset",isTextBtn:!0,isModalBtn:!1,isFormBtn:!1,isAuthBtn:!1},render:n=>({components:{Button:o},setup(){return{args:n}},template:'<Button v-bind="args" />'})};var v,y,A;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Login',
    isStandardBtn: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" />'
  })
}`,...(A=(y=m.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var x,S,k;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Login',
    isAuthBtn: true
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" />'
  })
}`,...(k=(S=a.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var F,V,M;B.parameters={...B.parameters,docs:{...(F=B.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...AuthButton.args,
    label: 'Submit',
    isFormBtn: true,
    isAuthBtn: false
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" />'
  })
}`,...(M=(V=B.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var T,C,N;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...AuthButton.args,
    label: 'Submit',
    isModalBtn: true,
    isFormBtn: false,
    isAuthBtn: false
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" />'
  })
}`,...(N=(C=p.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var D,L,w;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...AuthButton.args,
    label: 'Register new Dataset',
    isTextBtn: true,
    isModalBtn: false,
    isFormBtn: false,
    isAuthBtn: false
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button v-bind="args" />'
  })
}`,...(w=(L=f.parameters)==null?void 0:L.docs)==null?void 0:w.source}}};const ut=["StandardButton","AuthButton","FormButton","ModalButton","TextButton"];export{a as AuthButton,B as FormButton,p as ModalButton,m as StandardButton,f as TextButton,ut as __namedExportsOrder,ot as default};

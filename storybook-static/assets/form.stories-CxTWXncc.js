import{r as _,c as b,q as o,v as d,b as a,N as h,P as V,z as n,C as y,G as x,x as k}from"./vue.esm-bundler-uAEZU4-3.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as E}from"./VTextField-CGQ3PzbO.js";import{V as c}from"./VBtn-Dw3Zelhj.js";import{V as F}from"./VChip-0r_npzLP.js";import"./index-DO67qM6T.js";import"./tag-BF4Hy_PK.js";import"./index-Ber2yls2.js";import"./VIcon-TVbrmen2.js";import"./locale-BpwrwHwK.js";import"./loader-DyDpDlfA.js";import"./density-DjwGNt32.js";import"./index-S6nd6Ck7.js";import"./resizeObserver-DfAXdn7d.js";import"./position-CQ3bkD4L.js";import"./display-DeHUkF7a.js";import"./VAvatar-DMNtNa3d.js";import"./VImg-CEJURHQz.js";const g={name:"txt",props:{label:{type:String,default:"Button",required:!0},size:{type:Number,default:14},errorState:{type:Boolean,default:!1}},data(){return{emails:[],email:"",errorMessage:"",disabled:!1}},methods:{addEmail(){this.emails.push(this.email),this.email=""},removeEmail(e){this.emails.splice(e,1)},validateEmail(e){/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)?(this.disabled=!0,this.errorMessage=""):this.email.length&&(this.errorMessage="Must be a valid e-mail.")}},watch:{email(e){this.email=e,this.validateEmail(e)}},computed:{isValid(){return!this.disabled}},setup(e){return e=_(e),{style:b(()=>({fontSize:`${e.size}px`}))}}},w={class:"form"},z={class:"d-flex flex-row"},B={class:"emails-container d-flex"};function N(e,r,S,M,s,i){return n(),o("div",w,[d("div",z,[a(E,{type:"email",label:"Channel Members Emails",variant:"underlined",class:"form__input",modelValue:s.email,"onUpdate:modelValue":r[0]||(r[0]=l=>s.email=l),"error-messages":s.errorMessage},null,8,["modelValue","error-messages"]),a(c,{disabled:i.isValid,density:"compact",icon:"mdi-plus",variant:"text",size:"large",onClick:i.addEmail},null,8,["disabled","onClick"])]),d("div",B,[(n(!0),o(h,null,V(this.emails,(l,m)=>(n(),o("div",{key:m},[a(F,{variant:"outlined"},{default:y(()=>[x(k(l),1),a(c,{class:"close-btn",variant:"plain",icon:"mdi-close",onClick:D=>i.removeEmail(m)},null,8,["onClick"])]),_:2},1024)]))),128))])])}const v=C(g,[["render",N],["__scopeId","data-v-88c5c290"]]);g.__docgenInfo={displayName:"txt",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0,defaultValue:{func:!1,value:"'Button'"}},{name:"size",type:{name:"number"},defaultValue:{func:!1,value:"14"}},{name:"errorState",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/lulumutuli/Documents/Work/UI-Library/src/components/Form.vue"]};const Y={title:"Form",component:{Form:v},argTypes:{label:"String",backgroundColor:{control:"color"},onClick:{}}},t={args:{size:80,isDisabled:!1},render:e=>({components:{Form:v},setup(){return{args:e}},template:'<Form v-bind="args" />'})};var u,p,f;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 80,
    isDisabled: false
  },
  render: args => ({
    components: {
      Form
    },
    setup() {
      return {
        args
      };
    },
    template: '<Form v-bind="args" />'
  })
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const Z=["Primary"];export{t as Primary,Z as __namedExportsOrder,Y as default};

import{j as y}from"./jsx-runtime-DEdD30eg.js";/* empty css               */import"./index-RYns6xqu.js";const _="_button_77px1_1",b="_danger_77px1_9",x="_success_77px1_16",v="_sm_77px1_24",B="_md_77px1_27",n={button:_,danger:b,success:x,sm:v,md:B},i=({text:m,onClick:p,type:d,color:l,size:g})=>y.jsx("button",{type:d,className:[n.button,n[l],n[g??""]].join(" "),onClick:p,children:m});i.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{required:!0,tsType:{name:"union",raw:"'submit' | 'button'",elements:[{name:"literal",value:"'submit'"},{name:"literal",value:"'button'"}]},description:""},color:{required:!0,tsType:{name:"union",raw:"'success' | 'danger'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"}]},description:""},text:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const k={title:"Components/button/Button",component:i,parameters:{layout:"padded"},argTypes:{size:{options:["sm","md"],control:"select"}}},e={args:{text:"My Button",onClick:()=>{},type:"button",color:"danger"}},t={args:{text:"My Button",onClick:()=>{},type:"button",color:"success",size:"md"}};var s,o,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: 'My Button',
    onClick: () => {},
    type: 'button',
    color: 'danger'
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var a,u,c;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    text: 'My Button',
    onClick: () => {},
    type: 'button',
    color: 'success',
    size: 'md'
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const q=["buttonDanger","buttonSucces"];export{q as __namedExportsOrder,e as buttonDanger,t as buttonSucces,k as default};

import{j as b}from"./jsx-runtime-DEdD30eg.js";/* empty css               */import"./index-RYns6xqu.js";const g="_button_108yp_1",w="_danger_108yp_9",x="_blue_108yp_16",v="_success_108yp_20",h="_white_108yp_23",B="_sm_108yp_30",T="_md_108yp_33",f="_outline_108yp_38",e={button:g,danger:w,blue:x,success:v,white:h,sm:B,md:T,outline:f},c=({text:l,onClick:m,type:p,color:d,size:y,outline:_})=>b.jsx("button",{type:p,className:[e.button,e[d],e[y??""],e[_?"outline":""]].join(" "),onClick:m,children:l});c.__docgenInfo={description:"",methods:[],displayName:"Button",props:{type:{required:!0,tsType:{name:"union",raw:"'submit' | 'button'",elements:[{name:"literal",value:"'submit'"},{name:"literal",value:"'button'"}]},description:""},color:{required:!0,tsType:{name:"union",raw:"'blue' | 'danger' | 'white'",elements:[{name:"literal",value:"'blue'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'white'"}]},description:""},text:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},outline:{required:!1,tsType:{name:"boolean"},description:""}}};const j={title:"Components/button/Button",component:c,parameters:{layout:"padded"},argTypes:{size:{options:["sm","md"],control:"select"},color:{options:["blue","danger","white"],control:"select"},outline:{control:"boolean"}}},t={args:{text:"My Button",onClick:()=>{},type:"button",color:"danger"}},n={args:{text:"My Button",onClick:()=>{},type:"button",color:"success",size:"md"}};var o,s,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    text: 'My Button',
    onClick: () => {},
    type: 'button',
    color: 'danger'
  }
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var a,u,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    text: 'My Button',
    onClick: () => {},
    type: 'button',
    color: 'success',
    size: 'md'
  }
}`,...(i=(u=n.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const z=["buttonDanger","buttonSucces"];export{z as __namedExportsOrder,t as buttonDanger,n as buttonSucces,j as default};

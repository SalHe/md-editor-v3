import{a as e,l as a}from"./request.9fec4edb.js";import{v as t}from"./package.86eeea4a.js";import{d as s,i as o,j as r,u as l,c}from"./vendor.bf895ce6.js";var m=s({name:"PageAbout",props:{theme:String},setup(){const s=o(),m=o([]);r((()=>{e.get("/about.md").then((({data:e})=>{s.value=e.replace(/\$\{EDITOR_VERSION\}/g,t)})).catch((e=>{console.log(e),s.value="文档读取失败！"}))}));const n=l();return()=>c("div",{class:"container"},[c("div",{class:"doc"},[c("div",{class:"content",style:{width:"100%"}},[c(a,{theme:n.state.theme,modelValue:s.value,previewTheme:n.state.previewTheme,previewOnly:!0,showCodeRowNumber:!0,onGetCatalog:e=>{m.value=e}},null)])])])}});export{m as default};

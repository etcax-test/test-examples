import f from"./ContentRendererMarkdown.91106735.js";import{f as c,w as d,h as l,j as o}from"./entry.8f9280f0.js";import"./_commonjsHelpers.f8a6f4fc.js";const y=c({name:"ContentRenderer",props:{value:{type:Object,required:!1,default:()=>({})},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"}},setup(t){d(()=>t.excerpt,n=>{var e,r,a;n&&!((e=t.value)!=null&&e.excerpt)&&(console.warn(`No excerpt found for document content/${(r=t==null?void 0:t.value)==null?void 0:r._path}.${(a=t==null?void 0:t.value)==null?void 0:a._extension}!`),console.warn("Make sure to use <!--more--> in your content if you want to use excerpt feature."))},{immediate:!0})},render(t){var u,i;const n=l(),{value:e,excerpt:r,tag:a}=t;return!e&&(n==null?void 0:n.empty)?n.empty({value:e,excerpt:r,tag:a,...this.$attrs}):n!=null&&n.default?n.default({value:e,excerpt:r,tag:a,...this.$attrs}):e&&(e==null?void 0:e._type)==="markdown"&&((i=(u=e==null?void 0:e.body)==null?void 0:u.children)==null?void 0:i.length)?o(f,{value:e,excerpt:r,tag:a,...this.$attrs}):o("pre",null,JSON.stringify({message:"You should use slots with <ContentRenderer>",value:e,excerpt:r,tag:a},null,2))}});export{y as default};

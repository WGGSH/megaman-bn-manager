import{C as w,D as B,j as P,E as He,G as A,H as F,I as z,J as N,K as Y,q as f,V as Le,L as V,M as Me,N as q,O as C,k as J,l as Q,P as oe,Q as re,R as k,S as X,T as ue,U as je,W as Ue,X as Ke,Y as M,Z as We,F as E,$ as Z,a0 as ze,s as se,a1 as qe,a2 as ie,a3 as L,a4 as Je,a5 as Qe,a6 as Xe,a7 as Ye,a8 as Ze,a9 as et,aa as de}from"./entry.540e0128.js";const tt=w({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),ge=Symbol.for("vuetify:data-table-pagination");function at(e){const a=B(e,"page",void 0,t=>+(t??1)),l=B(e,"itemsPerPage",void 0,t=>+(t??10));return{page:a,itemsPerPage:l}}function lt(e){const{page:a,itemsPerPage:l,itemsLength:t}=e,n=P(()=>l.value===-1?0:l.value*(a.value-1)),d=P(()=>l.value===-1?t.value:Math.min(t.value,n.value+l.value)),u=P(()=>l.value===-1||t.value===0?1:Math.ceil(t.value/l.value));He(()=>{a.value>u.value&&(a.value=u.value)});function r(g){l.value=g,a.value=1}function o(){a.value=z(a.value+1,1,u.value)}function i(){a.value=z(a.value-1,1,u.value)}function s(g){a.value=z(g,1,u.value)}const v={page:a,itemsPerPage:l,startIndex:n,stopIndex:d,pageCount:u,itemsLength:t,nextPage:o,prevPage:i,setPage:s,setItemsPerPage:r};return A(ge,v),v}function nt(){const e=F(ge);if(!e)throw new Error("Missing pagination!");return e}function ot(e){const{items:a,startIndex:l,stopIndex:t,itemsPerPage:n}=e;return{paginatedItems:P(()=>n.value<=0?a.value:a.value.slice(l.value,t.value))}}const me=w({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),ce=N()({name:"VDataTableFooter",props:me(),setup(e,a){let{slots:l}=a;const{t}=Y(),{page:n,pageCount:d,startIndex:u,stopIndex:r,itemsLength:o,itemsPerPage:i,setItemsPerPage:s}=nt(),v=P(()=>e.itemsPerPageOptions.map(g=>({...g,title:t(g.title)})));return()=>{var g;return f("div",{class:"v-data-table-footer"},[(g=l.prepend)==null?void 0:g.call(l),f("div",{class:"v-data-table-footer__items-per-page"},[f("span",null,[t(e.itemsPerPageText)]),f(Le,{items:v.value,modelValue:i.value,"onUpdate:modelValue":p=>s(Number(p)),density:"compact",variant:"outlined","hide-details":!0},null)]),f("div",{class:"v-data-table-footer__info"},[f("div",null,[t(e.pageText,o.value?u.value+1:0,r.value,o.value)])]),f("div",{class:"v-data-table-footer__pagination"},[f(V,{icon:e.firstIcon,variant:"plain",onClick:()=>n.value=1,disabled:n.value===1,"aria-label":t(e.firstPageLabel)},null),f(V,{icon:e.prevIcon,variant:"plain",onClick:()=>n.value=Math.max(1,n.value-1),disabled:n.value===1,"aria-label":t(e.prevPageLabel)},null),e.showCurrentPage&&f("span",{key:"page",class:"v-data-table-footer__page"},[n.value]),f(V,{icon:e.nextIcon,variant:"plain",onClick:()=>n.value=Math.min(d.value,n.value+1),disabled:n.value===d.value,"aria-label":t(e.nextPageLabel)},null),f(V,{icon:e.lastIcon,variant:"plain",onClick:()=>n.value=d.value,disabled:n.value===d.value,"aria-label":t(e.lastPageLabel)},null)])])}}}),ee=Me({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,a)=>{let{slots:l,attrs:t}=a;const n=e.tag??"td";return f(n,q({class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:C(e.height),width:C(e.width),left:C(e.fixedOffset||null)}},t),{default:()=>{var d;return[(d=l.default)==null?void 0:d.call(l)]}})}),rt=w({headers:{type:Array,default:()=>[]}},"DataTable-header"),ye=Symbol.for("vuetify:data-table-headers");function ut(e,a){const l=J([]),t=J([]);Q(()=>e.headers,()=>{var p,y,S;const d=e.headers.length?Array.isArray(e.headers[0])?e.headers:[e.headers]:[],u=d.flatMap((c,m)=>c.map(h=>({column:h,row:m}))),r=d.length,o={title:"",sortable:!1},i={...o,width:48};if((p=a==null?void 0:a.groupBy)!=null&&p.value.length){const c=u.findIndex(m=>{let{column:h}=m;return h.key==="data-table-group"});c<0?u.unshift({column:{...o,key:"data-table-group",title:"Group",rowspan:r},row:0}):u.splice(c,1,{column:{...o,...u[c].column},row:u[c].row})}if((y=a==null?void 0:a.showSelect)!=null&&y.value){const c=u.findIndex(m=>{let{column:h}=m;return h.key==="data-table-select"});c<0?u.unshift({column:{...i,key:"data-table-select",rowspan:r},row:0}):u.splice(c,1,{column:{...i,...u[c].column},row:u[c].row})}if((S=a==null?void 0:a.showExpand)!=null&&S.value){const c=u.findIndex(m=>{let{column:h}=m;return h.key==="data-table-expand"});c<0?u.push({column:{...i,key:"data-table-expand",rowspan:r},row:0}):u.splice(c,1,{column:{...i,...u[c].column},row:u[c].row})}const s=oe(r).map(()=>[]),v=oe(r).fill(0);u.forEach(c=>{let{column:m,row:h}=c;const D=m.key;for(let x=h;x<=h+(m.rowspan??1)-1;x++)s[x].push({...m,key:D,fixedOffset:v[x],sortable:m.sortable??!!m.key}),v[x]+=Number(m.width??0)}),s.forEach(c=>{for(let m=c.length;m--;m>=0)if(c[m].fixed){c[m].lastFixed=!0;return}});const g=new Set;l.value=s.map(c=>{const m=[];for(const h of c)g.has(h.key)||(g.add(h.key),m.push(h));return m}),t.value=s.at(-1)??[]},{deep:!0,immediate:!0});const n={headers:l,columns:t};return A(ye,n),n}function j(){const e=F(ye);if(!e)throw new Error("Missing headers!");return e}const st={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:a,value:l}=e;return new Set(l?[(t=a[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:a}=e;return a}},be={showSelectAll:!0,allSelected:e=>{let{currentPage:a}=e;return a},select:e=>{let{items:a,value:l,selected:t}=e;for(const n of a)l?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:a,currentPage:l,selected:t}=e;return be.select({items:l,value:a,selected:t})}},pe={showSelectAll:!0,allSelected:e=>{let{allItems:a}=e;return a},select:e=>{let{items:a,value:l,selected:t}=e;for(const n of a)l?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:a,allItems:l,selected:t}=e;return pe.select({items:l,value:a,selected:t})}},it=w({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]}},"DataTable-select"),he=Symbol.for("vuetify:data-table-selection");function dt(e,a){let{allItems:l,currentPage:t}=a;const n=B(e,"modelValue",e.modelValue,c=>new Set(c),c=>[...c.values()]),d=P(()=>l.value.filter(c=>c.selectable)),u=P(()=>t.value.filter(c=>c.selectable)),r=P(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return st;case"all":return pe;case"page":default:return be}});function o(c){return re(c).every(m=>n.value.has(m.value))}function i(c){return re(c).some(m=>n.value.has(m.value))}function s(c,m){const h=r.value.select({items:c,value:m,selected:new Set(n.value)});n.value=h}function v(c){s([c],!o([c]))}function g(c){const m=r.value.selectAll({value:c,allItems:d.value,currentPage:u.value,selected:new Set(n.value)});n.value=m}const p=P(()=>n.value.size>0),y=P(()=>{const c=r.value.allSelected({allItems:d.value,currentPage:u.value});return o(c)}),S={toggleSelect:v,select:s,selectAll:g,isSelected:o,isSomeSelected:i,someSelected:p,allSelected:y,showSelectAll:r.value.showSelectAll};return A(he,S),S}function U(){const e=F(he);if(!e)throw new Error("Missing selection!");return e}const ct=w({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Se=Symbol.for("vuetify:data-table-sort");function ft(e){const a=B(e,"sortBy"),l=k(e,"mustSort"),t=k(e,"multiSort");return{sortBy:a,mustSort:l,multiSort:t}}function vt(e){const{sortBy:a,mustSort:l,multiSort:t,page:n}=e,d=o=>{let i=a.value.map(v=>({...v}))??[];const s=i.find(v=>v.key===o.key);s?s.order==="desc"?l.value?s.order="asc":i=i.filter(v=>v.key!==o.key):s.order="desc":t.value?i=[...i,{key:o.key,order:"asc"}]:i=[{key:o.key,order:"asc"}],a.value=i,n&&(n.value=1)};function u(o){return!!a.value.find(i=>i.key===o.key)}const r={sortBy:a,toggleSort:d,isSorted:u};return A(Se,r),r}function gt(){const e=F(Se);if(!e)throw new Error("Missing sort!");return e}function mt(e,a,l){const t=Y();return{sortedItems:P(()=>l.value.length?yt(a.value,l.value,t.current.value,e.customKeySort):a.value)}}function yt(e,a,l,t){const n=new Intl.Collator(l,{sensitivity:"accent",usage:"sort"});return[...e].sort((d,u)=>{for(let r=0;r<a.length;r++){const o=a[r].key,i=a[r].order??"asc";if(i===!1)continue;let s=X(d.raw,o),v=X(u.raw,o);if(i==="desc"&&([s,v]=[v,s]),t!=null&&t[o]){const g=t[o](s,v);if(!g)continue;return g}if(s instanceof Date&&v instanceof Date)return s.getTime()-v.getTime();if([s,v]=[s,v].map(g=>g!=null?g.toString().toLocaleLowerCase():g),s!==v)return!isNaN(s)&&!isNaN(v)?Number(s)-Number(v):n.compare(s,v)}return 0})}const xe=w({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:ue,default:"$sortAsc"},sortDescIcon:{type:ue,default:"$sortDesc"},...je()},"VDataTableHeaders"),fe=N()({name:"VDataTableHeaders",props:xe(),setup(e,a){let{slots:l,emit:t}=a;const{toggleSort:n,sortBy:d,isSorted:u}=gt(),{someSelected:r,allSelected:o,selectAll:i,showSelectAll:s}=U(),{columns:v,headers:g}=j(),{loaderClasses:p}=Ue(e),y=(x,b)=>{if(!(!e.sticky&&!x.fixed))return{position:"sticky",zIndex:x.fixed?4:e.sticky?3:void 0,left:x.fixed?C(x.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${b})`:void 0}};function S(x){const b=d.value.find(I=>I.key===x.key);return b?b.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:c,backgroundColorStyles:m}=Ke(e,"color"),h=P(()=>({headers:g.value,columns:v.value,toggleSort:n,isSorted:u,sortBy:d.value,someSelected:r.value,allSelected:o.value,selectAll:i,getSortIcon:S,getFixedStyles:y})),D=x=>{let{column:b,x:I,y:_}=x;const K=b.key==="data-table-select"||b.key==="data-table-expand";return f(ee,{tag:"th",align:b.align,class:["v-data-table__th",{"v-data-table__th--sortable":b.sortable,"v-data-table__th--sorted":u(b)},p.value],style:{width:C(b.width),minWidth:C(b.width),...y(b,_)},colspan:b.colspan,rowspan:b.rowspan,onClick:b.sortable?()=>n(b):void 0,lastFixed:b.lastFixed,noPadding:K},{default:()=>{var H;const G=`column.${b.key}`,R={column:b,selectAll:i,isSorted:u,toggleSort:n,sortBy:d.value,someSelected:r.value,allSelected:o.value,getSortIcon:S};return l[G]?l[G](R):b.key==="data-table-select"?((H=l["column.data-table-select"])==null?void 0:H.call(l,R))??(s&&f(Z,{modelValue:o.value,indeterminate:r.value&&!o.value,"onUpdate:modelValue":i},null)):f("div",{class:"v-data-table-header__content"},[f("span",null,[b.title]),b.sortable&&f(ze,{key:"icon",class:"v-data-table-header__sort-icon",icon:S(b)},null),e.multiSort&&u(b)&&f("div",{key:"badge",class:["v-data-table-header__sort-badge",...c.value],style:m.value},[d.value.findIndex($=>$.key===b.key)+1])])}})};M(()=>f(E,null,[l.headers?l.headers(h.value):g.value.map((x,b)=>f("tr",null,[x.map((I,_)=>f(D,{column:I,x:_,y:b},null))])),e.loading&&f("tr",{class:"v-data-table-progress"},[f("th",{colspan:v.value.length},[f(We,{name:"v-data-table-progress",active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:l.loader})])])]))}}),bt=w({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Pe=Symbol.for("vuetify:data-table-group");function pt(e){return{groupBy:B(e,"groupBy")}}function ht(e){const{groupBy:a,sortBy:l}=e,t=J(new Set),n=P(()=>a.value.map(i=>({...i,order:i.order??!1})).concat(l.value));function d(i){return t.value.has(i.id)}function u(i){const s=new Set(t.value);d(i)?s.delete(i.id):s.add(i.id),t.value=s}function r(i){function s(v){const g=[];for(const p of v.items)"type"in p&&p.type==="group"?g.push(...s(p)):g.push(p);return g}return s({type:"group",items:i,id:"dummy",key:"dummy",value:"dummy",depth:0})}const o={sortByWithGroups:n,toggleGroup:u,opened:t,groupBy:a,extractRows:r,isGroupOpen:d};return A(Pe,o),o}function we(){const e=F(Pe);if(!e)throw new Error("Missing group!");return e}function St(e,a){if(!e.length)return[];const l=new Map;for(const t of e){const n=X(t.raw,a);l.has(n)||l.set(n,[]),l.get(n).push(t)}return l}function ke(e,a){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!a.length)return[];const n=St(e,a[0]),d=[],u=a.slice(1);return n.forEach((r,o)=>{const i=a[0],s=`${t}_${i}_${o}`;d.push({depth:l,id:s,key:i,value:o,items:u.length?ke(r,u,l+1,s):r,type:"group"})}),d}function Te(e,a){const l=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&l.push(t),(a.has(t.id)||t.value==null)&&l.push(...Te(t.items,a))):l.push(t);return l}function xt(e,a,l){return{flatItems:P(()=>{if(!a.value.length)return e.value;const n=ke(e.value,a.value.map(d=>d.key));return Te(n,l.value)})}}const Pt=w({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),wt=N()({name:"VDataTableGroupHeaderRow",props:Pt(),setup(e,a){let{slots:l}=a;const{isGroupOpen:t,toggleGroup:n,extractRows:d}=we(),{isSelected:u,isSomeSelected:r,select:o}=U(),{columns:i}=j(),s=P(()=>d([e.item]));return()=>f("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[i.value.map(v=>{var g,p;if(v.key==="data-table-group"){const y=t(e.item)?"$expand":"$next",S=()=>n(e.item);return((g=l["data-table-group"])==null?void 0:g.call(l,{item:e.item,count:s.value.length,props:{icon:y,onClick:S}}))??f(ee,{class:"v-data-table-group-header-row__column"},{default:()=>[f(V,{size:"small",variant:"text",icon:y,onClick:S},null),f("span",null,[e.item.value]),f("span",null,[se("("),s.value.length,se(")")])]})}if(v.key==="data-table-select"){const y=u(s.value),S=r(s.value)&&!y,c=m=>o(s.value,m);return((p=l["data-table-select"])==null?void 0:p.call(l,{props:{modelValue:y,indeterminate:S,"onUpdate:modelValue":c}}))??f("td",null,[f(Z,{modelValue:y,indeterminate:S,"onUpdate:modelValue":c},null)])}return f("td",null,null)})])}}),kt=w({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),De=Symbol.for("vuetify:datatable:expanded");function Tt(e){const a=k(e,"expandOnClick"),l=B(e,"expanded",e.expanded,r=>new Set(r),r=>[...r.values()]);function t(r,o){const i=new Set(l.value);o?i.add(r.value):i.delete(r.value),l.value=i}function n(r){return l.value.has(r.value)}function d(r){t(r,!n(r))}const u={expand:t,expanded:l,expandOnClick:a,isExpanded:n,toggleExpand:d};return A(De,u),u}function Ie(){const e=F(De);if(!e)throw new Error("foo");return e}const Dt=w({index:Number,item:Object,onClick:Function},"VDataTableRow"),It=qe({name:"VDataTableRow",props:Dt(),setup(e,a){let{slots:l}=a;const{isSelected:t,toggleSelect:n}=U(),{isExpanded:d,toggleExpand:u}=Ie(),{columns:r}=j();M(()=>f("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!e.onClick}],onClick:e.onClick},[e.item&&r.value.map((o,i)=>f(ee,{align:o.align,fixed:o.fixed,fixedOffset:o.fixedOffset,lastFixed:o.lastFixed,noPadding:o.key==="data-table-select"||o.key==="data-table-expand",width:o.width},{default:()=>{var p,y;const s=e.item,v=`item.${o.key}`,g={index:e.index,item:e.item,columns:r.value,isSelected:t,toggleSelect:n,isExpanded:d,toggleExpand:u};return l[v]?l[v](g):o.key==="data-table-select"?((p=l["item.data-table-select"])==null?void 0:p.call(l,g))??f(Z,{disabled:!s.selectable,modelValue:t([s]),onClick:ie(()=>n(s),["stop"])},null):o.key==="data-table-expand"?((y=l["item.data-table-expand"])==null?void 0:y.call(l,g))??f(V,{icon:d(s)?"$collapse":"$expand",size:"small",variant:"text",onClick:ie(()=>u(s),["stop"])},null):L(s.columns,o.key)}}))]))}}),Ve=w({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowHeight:Number,"onClick:row":Function},"VDataTableRows"),ve=N()({name:"VDataTableRows",props:Ve(),setup(e,a){let{emit:l,slots:t}=a;const{columns:n}=j(),{expandOnClick:d,toggleExpand:u,isExpanded:r}=Ie(),{isSelected:o,toggleSelect:i}=U(),{toggleGroup:s,isGroupOpen:v}=we(),{t:g}=Y();return M(()=>{var p;return e.loading&&t.loading?f("tr",{class:"v-data-table-rows-loading",key:"loading"},[f("td",{colspan:n.value.length},[t.loading()])]):!e.loading&&!e.items.length&&!e.hideNoData?f("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[f("td",{colspan:n.value.length},[((p=t["no-data"])==null?void 0:p.call(t))??g(e.noDataText)])]):f(E,null,[e.items.map((y,S)=>{var h;if(y.type==="group")return t["group-header"]?t["group-header"]({index:S,item:y,columns:n.value,isExpanded:r,toggleExpand:u,isSelected:o,toggleSelect:i,toggleGroup:s,isGroupOpen:v}):f(wt,{key:`group-header_${y.id}`,item:y},t);const c={index:S,item:y,columns:n.value,isExpanded:r,toggleExpand:u,isSelected:o,toggleSelect:i},m={...c,props:{key:`item_${y.value}`,onClick:d.value||e["onClick:row"]?D=>{var x;d.value&&u(y),(x=e["onClick:row"])==null||x.call(e,D,{item:y})}:void 0,index:S,item:y}};return f(E,null,[t.item?t.item(m):f(It,m.props,t),r(y)&&((h=t["expanded-row"])==null?void 0:h.call(t,c))])})])}),{}}}),Vt=w({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},returnObject:Boolean},"DataTable-items");function Ct(e,a,l,t){const n=e.returnObject?a:L(a,e.itemValue),d=L(a,e.itemSelectable,!0),u=t.reduce((r,o)=>(r[o.key]=L(a,o.value??o.key),r),{});return{type:"item",index:l,value:n,selectable:d,columns:u,raw:a}}function Bt(e,a,l){return a.map((t,n)=>Ct(e,t,n,l))}function At(e,a){return{items:P(()=>Bt(e,e.items,a.value))}}function Ft(e){let{page:a,itemsPerPage:l,sortBy:t,groupBy:n,search:d}=e;const u=Je("VDataTable"),r=P(()=>({page:a.value,itemsPerPage:l.value,sortBy:t.value,groupBy:n.value,search:d.value}));Q(()=>d==null?void 0:d.value,()=>{a.value=1});let o=null;Q(r,()=>{Qe(o,r.value)||(u.emit("update:options",r.value),o=r.value)},{deep:!0,immediate:!0})}const _t=w({...Ve(),width:[String,Number],search:String,...kt(),...bt(),...rt(),...Vt(),...it(),...ct(),...xe(),...Xe()},"DataTable"),$t=w({...tt(),..._t(),...Ye(),...me()},"VDataTable"),Et=N()({name:"VDataTable",props:$t(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,a){let{emit:l,slots:t}=a;const{groupBy:n}=pt(e),{sortBy:d,multiSort:u,mustSort:r}=ft(e),{page:o,itemsPerPage:i}=at(e),{columns:s,headers:v}=ut(e,{groupBy:n,showSelect:k(e,"showSelect"),showExpand:k(e,"showExpand")}),{items:g}=At(e,s),p=k(e,"search"),{filteredItems:y}=Ze(e,g,p,{transform:W=>W.columns}),{toggleSort:S}=vt({sortBy:d,multiSort:u,mustSort:r,page:o}),{sortByWithGroups:c,opened:m,extractRows:h,isGroupOpen:D,toggleGroup:x}=ht({groupBy:n,sortBy:d}),{sortedItems:b}=mt(e,y,c),{flatItems:I}=xt(b,n,m),_=P(()=>I.value.length),{startIndex:K,stopIndex:G,pageCount:R,setItemsPerPage:H}=lt({page:o,itemsPerPage:i,itemsLength:_}),{paginatedItems:$}=ot({items:I,startIndex:K,stopIndex:G,itemsPerPage:i}),te=P(()=>h($.value)),{isSelected:Ce,select:Be,selectAll:Ae,toggleSelect:Fe,someSelected:_e,allSelected:$e}=dt(e,{allItems:g,currentPage:te}),{isExpanded:Oe,toggleExpand:Ee}=Tt(e);Ft({page:o,itemsPerPage:i,sortBy:d,groupBy:n,search:p}),et({VDataTableRows:{hideNoData:k(e,"hideNoData"),noDataText:k(e,"noDataText"),loading:k(e,"loading"),loadingText:k(e,"loadingText")}});const T=P(()=>({page:o.value,itemsPerPage:i.value,sortBy:d.value,pageCount:R.value,toggleSort:S,setItemsPerPage:H,someSelected:_e.value,allSelected:$e.value,isSelected:Ce,select:Be,selectAll:Ae,toggleSelect:Fe,isExpanded:Oe,toggleExpand:Ee,isGroupOpen:D,toggleGroup:x,items:te.value,groupedItems:$.value,columns:s.value,headers:v.value}));return M(()=>{const[W]=ce.filterProps(e),[Ne]=fe.filterProps(e),[Ge]=ve.filterProps(e),[Re]=de.filterProps(e);return f(de,q({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},Re),{top:()=>{var O;return(O=t.top)==null?void 0:O.call(t,T.value)},default:()=>{var O,ae,le,ne;return t.default?t.default(T.value):f(E,null,[(O=t.colgroup)==null?void 0:O.call(t,T.value),f("thead",null,[f(fe,Ne,t)]),(ae=t.thead)==null?void 0:ae.call(t,T.value),f("tbody",null,[t.body?t.body(T.value):f(ve,q(Ge,{items:$.value}),t)]),(le=t.tbody)==null?void 0:le.call(t,T.value),(ne=t.tfoot)==null?void 0:ne.call(t,T.value)])},bottom:()=>t.bottom?t.bottom(T.value):f(E,null,[f(ce,W,{prepend:t["footer.prepend"]})])})}),{}}});export{Et as V};

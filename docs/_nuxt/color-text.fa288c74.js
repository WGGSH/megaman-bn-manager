var X=Object.defineProperty;var Y=(f,m,o)=>m in f?X(f,m,{enumerable:!0,configurable:!0,writable:!0,value:o}):f[m]=o;var P=(f,m,o)=>(Y(f,typeof m!="symbol"?m+"":m,o),o);import{e as j,m as q,l as z,r as k,o as v,c as C,w as _,f as h,F as b,h as I,u as L,s as N,v as V,t as $,A,a as F}from"./entry.96203933.js";const O=["red","blue","green","yellow","pink","white"],g=11,R=j({__name:"navi-customizer",props:{cells:{type:Array,required:!0},selectedProgram:{type:Object,required:!1,default:null},programState:{type:Object,required:!1,default:null}},emits:["add-program","remove-program"],setup(f,{emit:m}){const o=f,d=q({x:0,y:0}),p=z(()=>{var r,c;const e=[];for(let t=0;t<g;t+=1){e.push([]);for(let u=0;u<g;u+=1)e[t].push({programId:null,registeredProgramId:null,color:"transparent"})}for(let t=0;t<o.cells.length;t+=1)for(let u=0;u<o.cells[t].length;u+=1)e[t+2][u+2]=o.cells[t][u];if(d.value.x!==null&&d.value.y!==null&&o.selectedProgram){const t=o.programState.isCompressed?(r=o.selectedProgram)==null?void 0:r.compressedCells:(c=o.selectedProgram)==null?void 0:c.cells;t&&t.forEach((u,i)=>{u.forEach((s,n)=>{if(!(d.value.y+i<0||d.value.y+i>=g)&&!(d.value.x+n<0||d.value.x+n>=g)&&s){let a,l;switch(o.programState.rotate){case 0:a=i,l=n;break;case 1:a=t.length-n-1,l=i;break;case 2:a=t.length-i-1,l=t[i].length-n-1;break;case 3:a=n,l=t[i].length-i-1;break;default:a=i,l=n;break}if(d.value.y+a<0||d.value.y+a>=g||d.value.x+l<0||d.value.x+l>=g)return;e[d.value.y+a][d.value.x+l]&&(e[d.value.y+a][d.value.x+l]={programId:o.selectedProgram.id,color:o.selectedProgram.color,isProgram:o.selectedProgram.isProgram})}})})}return e}),B=(e,r)=>{d.value={x:r,y:e}},w=()=>{d.value={x:null,y:null}},M=(e,r)=>{var t,u;const c=o.programState.isCompressed?(t=o.selectedProgram)==null?void 0:t.compressedCells:(u=o.selectedProgram)==null?void 0:u.cells;if(c){let i=!1;for(let s=0;s<c.length;s+=1)for(let n=0;n<c[s].length;n+=1)if(c[s][n]){let a,l;switch(o.programState.rotate){case 0:a=s,l=n;break;case 1:a=c.length-n-1,l=s;break;case 2:a=c.length-s-1,l=c[s].length-n-1;break;case 3:a=n,l=c[s].length-s-1;break;default:a=s,l=n;break}if(e+a<2||e+a>=g-2||r+l<2||r+l>=g-2||e+a===2&&r+l===2||e+a===2&&r+l===g-3||e+a===g-3&&r+l===2||e+a===g-3&&r+l===g-3||O.includes(o.cells[e+a-2][r+l-2].color))return;e+a>=3&&e+a<=7&&r+l>=3&&r+l<=7&&(i=!0)}if(!i)return}m("add-program",{x:r-2,y:e-2},o.programState.value)},S=(e,r)=>{const{targetY:c,targetX:t}={targetY:e-2,targetX:r-2};if(c<0||c>=g-4||t<0||t>=g-4)return;const{registeredProgramId:u}=o.cells[c][t];u&&m("remove-program",u,null)},E=(e,r)=>{o.selectedProgram?M(e,r):S(e,r)},T=(e,r)=>{let[c,t,u,i]=[!0,!0,!0,!0];const s=p.value[e][r];return e>0&&p.value[e-1][r].registeredProgramId===s.registeredProgramId&&(c=!1),e<g-1&&p.value[e+1][r].registeredProgramId===s.registeredProgramId&&(t=!1),r<g-1&&p.value[e][r+1].registeredProgramId===s.registeredProgramId&&(u=!1),r>0&&p.value[e][r-1].registeredProgramId===s.registeredProgramId&&(i=!1),{transparent:p.value[e][r].color==="transparent","elevation-0":p.value[e][r].color==="transparent","has-border-top":c,"has-border-bottom":t,"has-border-right":u,"has-border-left":i}};return(e,r)=>{const c=k("v-icon"),t=k("v-card");return v(),C(t,{class:"pa-8"},{default:_(()=>[(v(!0),h(b,null,I(L(p),(u,i)=>(v(),h("div",{key:i,class:"grid"},[(v(!0),h(b,null,I(u,(s,n)=>(v(),h("div",{key:n},[N(t,{class:V(["pa-5 elevation-1 rounded-0 cell",T(i,n)]),width:"100%",height:"100%",color:s.color,onMouseenter:a=>B(i,n),onMouseleave:r[0]||(r[0]=a=>w()),onClick:a=>E(i,n)},{default:_(()=>[s.programId&&!s.isProgram?(v(),C(c,{key:0,color:"grey-darken-3",class:"plus-part"},{default:_(()=>[$(" mdi-plus ")]),_:1})):A("",!0)]),_:2},1032,["class","color","onMouseenter","onClick"])]))),128))]))),128))]),_:1})}}});const H=F(R,[["__scopeId","data-v-a7ef6940"]]);class W{}P(W,"colorToTextMap",{red:"赤",blue:"青",green:"緑",yellow:"黄",pink:"ピンク",white:"白"});export{W as C,H as _};
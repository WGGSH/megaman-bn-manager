import{_ as fe}from"./accept.81a167eb.js";import{a as ge,r,o as m,c as M,w as t,b as he,e as K,f as S,F as I,h as B,i as Ce,j as ye,k as xe,l as x,m as c,p as G,q as Ne,s as e,t as s,u as z,v as ke}from"./entry.96203933.js";import{_ as ze,a as be}from"./subtitle.701e0501.js";import{C as Pe,_ as Se}from"./color-text.fa288c74.js";import{C as Ie,_ as Me}from"./chip-folder.40652e7f.js";import{u as Ve,N as H,a as Be,M as J,_ as we}from"./megaman-status.1cda3514.js";import{u as $e,_ as Ae}from"./master-patch-card.48cb7c37.js";import"./VDataTable.75b4a7f7.js";const Fe={};function Ee(N,_){const v=r("v-btn");return m(),M(v,{color:"red"},{default:t(()=>[he(N.$slots,"default")]),_:3})}const Te=ge(Fe,[["render",Ee]]),Ue=K({__name:"navi-customizer-text",props:{registeredNaviCustomizerPrograms:{type:Array,required:!0},masterNaviCustomizerPrograms:{type:Array,required:!0}},setup(N){const _=N,v=b=>{const a=_.masterNaviCustomizerPrograms.find(i=>i.id===b.programId);return`${a.name}: ${Pe.colorToTextMap[a.color]}`};return(b,a)=>{const i=r("v-list-item"),f=r("v-card");return m(),M(f,{class:"pa-8",width:"100%",height:"100%"},{default:t(()=>[(m(!0),S(I,null,B(N.registeredNaviCustomizerPrograms,p=>(m(),M(i,{key:p.id,title:v(p)},null,8,["title"]))),128))]),_:1})}}}),qe=80,Oe=K({__name:"abstract",setup(N){const _=Ce(),v=ye(),b=xe(),a=x(()=>_.selectedBuild),i=c(),f=c([]),p=c(),P=c(!1),O=Ve(),Q=x(()=>O.programs),g=c(new H),W=x(()=>g.value.cells),X=x(()=>g.value.registeredNaviCustomizerPrograms),V=c(new Ie),w=c(0),$=c([]),Y=x(()=>$.value.map(o=>V.value.chips.find(d=>d.id===o))),A=Be(),F=$e(),k=c([]),h=c(new J),Z=x(()=>{let o=0;return k.value.forEach(l=>{l.isActive&&(o+=Number(l.capacity))}),o}),ee=()=>{a.value&&(k.value=a.value.patchCards.map(o=>{const l=F.getCardById(o.id);if(!l)return null;const d=l.clone();return o.isActive||d.toggleActive(),d}).filter(o=>o!==null))},te=[{key:"G",name:"グレイガ"},{key:"F",name:"ファルザー"}],E=()=>{a.value&&(g.value=new H,a.value.registeredNaviCustomizerPrograms.forEach(o=>{g.value.addProgram(o)}))},ae=()=>{a.value&&(V.value.chips=a.value.folderChips.map((o,l)=>({id:l+1,chipId:o.chipId,codeIndex:o.codeIndex})).filter(o=>o!==null),a.value.regularChipId&&(w.value=a.value.regularChipId),a.value.tagChipIds&&($.value=a.value.tagChipIds))},T=()=>{!a.value||!a.value.id||(i.value=a.value.name,f.value=a.value.versions,p.value=a.value.hpMemoryNum,E(),ae(),ee())};G(a,o=>{o&&T()},{deep:!0}),G(k,o=>{h.value=new J,a.value&&(h.value.hpMemoryNum=a.value.hpMemoryNum,E(),A.update(a.value.hpMemoryNum,g.value.registeredNaviCustomizerPrograms,g.value.cells),A.naviCustomizerStatus.megamanStatus.abilities.forEach(l=>{h.value.pushAbility(l)}),o.forEach(l=>{l.isActive&&l.abilities.forEach(d=>{h.value.pushAbility(d)})}),h.value.apply())},{deep:!0}),Ne(()=>{F.fetchCards(),_.setSelectedBuildById(b.params.id),a?T():v.push({path:"/"})});const le=()=>{_.updateBuildById({id:a.value.id,name:i.value,versions:f.value,hpMemoryNum:p.value})},oe=()=>{P.value=!0},ue=()=>{_.deleteBuildById(a.value.id),v.push({path:"/"})};return(o,l)=>{const d=r("v-card-title"),U=fe,q=Te,ne=r("v-card-actions"),L=r("v-card"),re=r("v-dialog"),se=ze,u=r("v-row"),R=r("v-container"),C=be,j=r("v-text-field"),ce=r("v-checkbox"),y=r("v-col"),D=r("v-divider"),ie=Se,de=Ue,me=Me,_e=we,pe=Ae;return m(),S(I,null,[e(R,null,{default:t(()=>[e(re,{modelValue:P.value,"onUpdate:modelValue":l[1]||(l[1]=n=>P.value=n)},{default:t(()=>[e(L,null,{default:t(()=>[e(d,null,{default:t(()=>[s(" 本当に削除しますか？ ")]),_:1}),e(ne,null,{default:t(()=>[e(U,{onClick:l[0]||(l[0]=n=>P.value=!1)},{default:t(()=>[s(" キャンセル ")]),_:1}),e(q,{color:"red",onClick:ue},{default:t(()=>[s(" 削除する ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(se,null,{default:t(()=>[s(" ビルド概要 ")]),_:1}),e(u,{class:"ma-0"},{default:t(()=>[e(U,{class:"mr-auto",onClick:le},{default:t(()=>[s(" 保存する ")]),_:1}),e(q,{onClick:oe},{default:t(()=>[s(" 削除する ")]),_:1})]),_:1})]),_:1}),e(R,{class:"pa-8"},{default:t(()=>[e(u,null,{default:t(()=>[e(C,null,{default:t(()=>[s(" ビルド名 ")]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(j,{modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=n=>i.value=n)},null,8,["modelValue"])]),_:1}),e(u,{class:"mt-8"},{default:t(()=>[e(C,null,{default:t(()=>[s(" 対応バージョン ")]),_:1})]),_:1}),e(u,null,{default:t(()=>[(m(),S(I,null,B(te,n=>e(y,{key:n.key},{default:t(()=>[e(ce,{modelValue:f.value,"onUpdate:modelValue":l[3]||(l[3]=ve=>f.value=ve),label:n.name,value:n.key},null,8,["modelValue","label","value"])]),_:2},1024)),64))]),_:1}),e(u,null,{default:t(()=>[e(C,null,{default:t(()=>[s(" HPメモリ ")]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(j,{modelValue:p.value,"onUpdate:modelValue":l[4]||(l[4]=n=>p.value=n),type:"number",max:"45",min:"0"},null,8,["modelValue"])]),_:1}),e(u,{class:"mt-8"},{default:t(()=>[e(D)]),_:1}),e(u,null,{default:t(()=>[e(C,null,{default:t(()=>[s(" ナビカスタマイザー ")]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(y,{cols:"6",sm:"6"},{default:t(()=>[e(ie,{cells:z(W)},null,8,["cells"])]),_:1}),e(y,{cols:"6",sm:"6"},{default:t(()=>[e(de,{"registered-navi-customizer-programs":z(X),"master-navi-customizer-programs":z(Q)},null,8,["registered-navi-customizer-programs","master-navi-customizer-programs"])]),_:1})]),_:1}),e(u,{class:"mt-8"},{default:t(()=>[e(D)]),_:1}),e(u,null,{default:t(()=>[e(C,null,{default:t(()=>[s(" フォルダ ")]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(y,{cols:"12"},{default:t(()=>[e(me,{"chip-folder":V.value,"regular-chip-id":w.value,"tag-chips":z(Y),"read-only":"",onClick:o.onClickChipFolder},null,8,["chip-folder","regular-chip-id","tag-chips","onClick"])]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(C,null,{default:t(()=>[s(" 改造カード ")]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(y,{cols:"12"},{default:t(()=>[e(_e,{"megaman-status":h.value,"max-capacity":qe,"current-capacity":z(Z)},null,8,["megaman-status","current-capacity"])]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(y,{class:"pa-0"},{default:t(()=>[e(L,{class:ke(["px-0 mt-4 mx-0",{"py-8":k.value.length===0}]),color:"primary"},{default:t(()=>[(m(!0),S(I,null,B(k.value,n=>(m(),M(pe,{key:n.id,"patch-card":n,class:"ma-4"},null,8,["patch-card"]))),128))]),_:1},8,["class"])]),_:1})]),_:1})]),_:1})],64)}}});export{Oe as default};
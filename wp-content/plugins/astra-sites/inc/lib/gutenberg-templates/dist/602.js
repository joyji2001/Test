<<<<<<< HEAD
"use strict";(self.webpackChunkast_block_templates=self.webpackChunkast_block_templates||[]).push([[602],{9602:function(e,t,s){s.r(t),s.d(t,{default:function(){return i}});var n=s(1392);const a=e=>{const t=["quote","testimonial","client-logo","team","skip","logo","fav-icon"];for(const s of t)if(e.includes(s))return!0;return!1},{useEffect:c,useState:o,createRef:r}=wp.element,{spectra_common_styles:l}=ast_block_template_vars;var i=e=>{let{item:t,InitMasonry:s,content:i,stylesheet:m,astraCustomizer:p,globalStylesheet:d,colorPalette:u,onMount:g,dynamicContent:y,selectedImages:h}=e;const b=r(),f=r(),k=t["thumbnail-image-url"]||"",v=t["featured-image-url"]||"";let E=0,_=0;const[w,R]=o({importing:!1}),[$,x]=o(`${ast_block_template_vars.uri}dist/placeholder_200_200.png`),[N,C]=o(`${ast_block_template_vars.uri}dist/placeholder_200_200.png`);function I(){const e=(b?.current?.parentNode?.offsetWidth-10)/1200,t=e*f?.current?.offsetHeight,s=b?.current;s&&(s.style.transform=`scale(${e})`,s.style.height=`${t}px`)}return c((()=>{let e=!0;const n={landscape:[],portrait:[]};h?.forEach((e=>{"landscape"===e.orientation?n.landscape.push(e):n.portrait.push(e)}));const c=n,o=new Image;o.src=k;const r=new Image;r.src=v;const b=f.current;function w(t,s){e&&(t.onload=()=>{s(t.src)})}w(o,x),w(r,C);const R=document.getElementById("astra-wp-editor-styles-inline-css")?.textContent.replace(/:root/g,".block-container").replace(/body/g,".block-container"),$=document.getElementById("astra-block-editor-styles-inline-css")?.textContent.replace(/:root/g,".block-container").replace(/body/g,".block-container");let N="";var S,z;if(m&&(S=m,z=c?.landscape,m=z&&0===z.length?S:S.replace(/background-image\s*:\s*url\(['"]?([^'")]+)['"]?\)/g,(function(e,t){if(a(t))return e;const s=z[E].url;return E++,'background-image: url("'+s+'")'}))),N+=p?`<style type="text/css" id="gt-astra-customizer">${p}</style>`:"",N+=`<style type="text/css" id="gt-spectra-common-stylesheet">${l}</style>`,N=m?`${N} <style type="text/css" id="gt-common-stylesheet">${m}</style>`:N,d&&(N+=`<style type="text/css" id="gt-global-stylesheet"> ${d} </style>`),R&&(N+=`<style type="text/css" id="gt-wpeditor-css" > ${R} </style>`),$&&(N+=`<style type="text/css" id="gt-blockeditor-css"> ${$} </style>`),b&&i){const e=b.attachShadow({mode:"open"});if(null===e)return;let s=i;const n=y?y[t.category]:[];n&&Object.keys(n)?.length>0&&Object.keys(n).forEach((e=>{s=null!==n[e]?s.replace(e,n[e]):s})),e.innerHTML=N+s,u.forEach(((t,s)=>{e?.host.style.setProperty(`--ast-global-color-${s}`,t)}));const o=b.shadowRoot.querySelectorAll("div")[0];o?.classList.add("st-block-container");const r=b.shadowRoot.querySelectorAll("img");e&&(I(),((e,t)=>{const s=t.landscape?t.landscape:[],n=t.portrait?t.portrait:[];0!==s.length&&0!==n.length&&e?.forEach((function(e){a(e.src)||(e.onload=()=>{const t=(e=>{const t=new Image;return t.src=e,t.width>t.height?"landscape":"portrait"})(e.src);let a;if(a="landscape"===t?s[E]:n[_],void 0===a)return;if(!(a.url.includes("unsplash")||a.url.includes("pexels")||a.url.includes("pixabay")))return;"landscape"===t?E++:_++;const c=document.createElement("img");c.src=a.optimized_url,e.parentNode.replaceChild(c,e)})}))})(r,c))}return e&&(g(),s()),()=>{e=!1}}),[]),c((()=>(window.addEventListener("resize",I),()=>{window.removeEventListener("resize",I)})),[]),c((()=>{const e=f?.current;if(e){const t=e.shadowRoot;u.forEach(((e,s)=>{t?.host.style.setProperty(`--ast-global-color-${s}`,e)}))}}),[u]),React.createElement("div",{className:"item single-block "+(!0===w.importing?"importing":"")},React.createElement("div",{className:"inner"},React.createElement("div",{className:"thumbnail",ref:b},React.createElement("div",{className:"thumbnail-container",ref:f},!i&&React.createElement("img",{srcSet:`${N}, ${$}`,src:$}),React.createElement("div",{className:"preview"},React.createElement("span",{className:"ast-block-templates-icon ast-block-templates-icon-search"})))),React.createElement("div",{className:"heading-wrap"},React.createElement("div",{className:"button-actions"},React.createElement(n.Z,{btnClass:"button button-primary gt-btn-import",title:"Import",liveRequest:!0,item:t,onClick:()=>{R({...w,importing:!0})},onBlockImport:()=>{R({...w,importing:!1})}})))))}}}]);
=======
"use strict";(self.webpackChunkast_block_templates=self.webpackChunkast_block_templates||[]).push([[602],{602:function(e,t,s){s.r(t),s.d(t,{default:function(){return i}});var n=s(392);const a=e=>{const t=["quote","testimonial","client-logo","team","skip","logo","fav-icon"];for(const s of t)if(e.includes(s))return!0;return!1},{useEffect:c,useState:o,createRef:r}=wp.element,{spectra_common_styles:l}=ast_block_template_vars;var i=e=>{let{item:t,InitMasonry:s,content:i,stylesheet:m,astraCustomizer:p,globalStylesheet:d,colorPalette:u,onMount:g,dynamicContent:y,selectedImages:h}=e;const b=r(),f=r(),k=t["thumbnail-image-url"]||"",v=t["featured-image-url"]||"";let E=0,_=0;const[w,R]=o({importing:!1}),[$,x]=o(`${ast_block_template_vars.uri}dist/placeholder_200_200.png`),[N,C]=o(`${ast_block_template_vars.uri}dist/placeholder_200_200.png`);function I(){const e=(b?.current?.parentNode?.offsetWidth-10)/1200,t=e*f?.current?.offsetHeight,s=b?.current;s&&(s.style.transform=`scale(${e})`,s.style.height=`${t}px`)}return c((()=>{let e=!0;const n={landscape:[],portrait:[]};h?.forEach((e=>{"landscape"===e.orientation?n.landscape.push(e):n.portrait.push(e)}));const c=n,o=new Image;o.src=k;const r=new Image;r.src=v;const b=f.current;function w(t,s){e&&(t.onload=()=>{s(t.src)})}w(o,x),w(r,C);const R=document.getElementById("astra-wp-editor-styles-inline-css")?.textContent.replace(/:root/g,".block-container").replace(/body/g,".block-container"),$=document.getElementById("astra-block-editor-styles-inline-css")?.textContent.replace(/:root/g,".block-container").replace(/body/g,".block-container");let N="";var S,z;if(m&&(S=m,z=c?.landscape,m=z&&0===z.length?S:S.replace(/background-image\s*:\s*url\(['"]?([^'")]+)['"]?\)/g,(function(e,t){if(a(t))return e;const s=z[E].url;return E++,'background-image: url("'+s+'")'}))),N+=p?`<style type="text/css" id="gt-astra-customizer">${p}</style>`:"",N+=`<style type="text/css" id="gt-spectra-common-stylesheet">${l}</style>`,N=m?`${N} <style type="text/css" id="gt-common-stylesheet">${m}</style>`:N,d&&(N+=`<style type="text/css" id="gt-global-stylesheet"> ${d} </style>`),R&&(N+=`<style type="text/css" id="gt-wpeditor-css" > ${R} </style>`),$&&(N+=`<style type="text/css" id="gt-blockeditor-css"> ${$} </style>`),b&&i){const e=b.attachShadow({mode:"open"});if(null===e)return;let s=i;const n=y?y[t.category]:[];n&&Object.keys(n)?.length>0&&Object.keys(n).forEach((e=>{s=null!==n[e]?s.replace(e,n[e]):s})),e.innerHTML=N+s,u.forEach(((t,s)=>{e.host.style.setProperty(`--ast-global-color-${s}`,t)}));const o=b.shadowRoot.querySelectorAll("div")[0];o?.classList.add("st-block-container");const r=b.shadowRoot.querySelectorAll("img");e&&(I(),((e,t)=>{const s=t.landscape?t.landscape:[],n=t.portrait?t.portrait:[];0!==s.length&&0!==n.length&&e?.forEach((function(e){a(e.src)||(e.onload=()=>{const t=(e=>{const t=new Image;return t.src=e,t.width>t.height?"landscape":"portrait"})(e.src);let a;if(a="landscape"===t?s[E]:n[_],void 0===a)return;if(!(a.url.includes("unsplash")||a.url.includes("pexels")||a.url.includes("pixabay")))return;"landscape"===t?E++:_++;const c=document.createElement("img");c.src=a.optimized_url,e.parentNode.replaceChild(c,e)})}))})(r,c))}return e&&(g(),s()),()=>{e=!1}}),[]),c((()=>(window.addEventListener("resize",I),()=>{window.removeEventListener("resize",I)})),[]),c((()=>{const e=f?.current;if(e){const t=e.shadowRoot;u.forEach(((e,s)=>{t.host.style.setProperty(`--ast-global-color-${s}`,e)}))}}),[u]),React.createElement("div",{className:"item single-block "+(!0===w.importing?"importing":"")},React.createElement("div",{className:"inner"},React.createElement("div",{className:"thumbnail",ref:b},React.createElement("div",{className:"thumbnail-container",ref:f},!i&&React.createElement("img",{srcSet:`${N}, ${$}`,src:$}),React.createElement("div",{className:"preview"},React.createElement("span",{className:"ast-block-templates-icon ast-block-templates-icon-search"})))),React.createElement("div",{className:"heading-wrap"},React.createElement("div",{className:"button-actions"},React.createElement(n.Z,{btnClass:"button button-primary gt-btn-import",title:"Import",liveRequest:!0,item:t,onClick:()=>{R({...w,importing:!0})},onBlockImport:()=>{R({...w,importing:!1})}})))))}}}]);
>>>>>>> 9cf9ad8de717179efb6f155af65240bb01ebb841

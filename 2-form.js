import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const m="feedback-form-data",e={email:"",message:""},o=document.querySelector(".feedback-form");document.querySelector(".feedback-form").addEventListener("load",()=>{const t=JSON.parse(localStorage.getItem(m));t&&(e.email=t.email,e.message=t.message);for(const a in e)o.elements[a]=e[a]});o.addEventListener("change",t=>{const{target:a}=t;e[a.name]=a.value,localStorage.setItem(m,JSON.stringify(e))});o.addEventListener("submit",()=>{localStorage.removeItem(m),o.reset()});
//# sourceMappingURL=2-form.js.map

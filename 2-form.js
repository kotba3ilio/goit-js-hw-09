import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const l="feedback-form-data",e={email:"",message:""},o=document.querySelector(".feedback-form"),m=()=>{const t=JSON.parse(localStorage.getItem(l));t&&(e.email=t.email,e.message=t.message);for(const a in e)o.elements[a].value=e[a]};o.addEventListener("input",t=>{const{target:a}=t;e[a.name]=a.value,localStorage.setItem(l,JSON.stringify(e))});o.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(l),o.reset()});m();
//# sourceMappingURL=2-form.js.map

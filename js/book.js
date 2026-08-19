function openRegisterBox(obj){
    let id = obj.getAttribute('rel');
    let e = document.getElementById(id);
    e.classList.remove('register-box-hidden');
    e.classList.add('register-box-show');
   
}
function closeRegisterBox(obj){
    let id = obj.getAttribute('rel');
    let e = document.getElementById(id);
    e.classList.remove('register-box-show');
    e.classList.add('register-box-hidden');
   
}
let inputs = document.querySelectorAll('.register-box input');
for (let inp of inputs){
    inp.addEventListener('blur',function(){
        if (!this.value || this.value === ""){
            this.classList.add('error');
        }
        else{
            this.classList.remove('error')
        }
    })
}
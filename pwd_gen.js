class password{
    constructor(){
    this.ucase="QWERTYUIOPASDFGHJLKZXCVBNM";
    this.lcase="abcdefghijklmnopqrstuvwxyz";
    this.num="1234567890";
    this.specialChar = "~`!@#$%^&*()";
    }
    getStrongPwd(){
        let pass = ""
        let arr = [this.ucase, this.lcase,,this.specialChar];
        for (let i = 0; i < 15; i++) {
            let ind1 = Math.floor(Math.random() * arr.length);
            let ind2 = Math.floor(Math.random() * arr[ind1].length);
            pass += arr[ind1][ind2];
        }
        return pass;
    }
    getWeakPwd(){
        let pass = ""
        let arr = [this.ucase, this.lcase];
        for (let i = 0; i < 8; i++) {
            let ind1 = Math.floor(Math.random() * arr.length);
            let ind2 = Math.floor(Math.random() * arr[ind1].length);
            pass += arr[ind1][ind2];
        }
        return pass;
    }
    getFunnyPwd(){
        let arr = ["password", "incorrect", "12345678", "iforgot", "secret", "MyPreciousssPasssword", "MyName", "Chintu_Hacker", "nothing", "user", "maiNahiBatunga", "Sorry", "1$perhour", "admin", "AskYourDaddy"]
        let pass = arr[Math.floor(Math.random() * arr.length)]
        return pass
    }
    getSuperStrongPwd(){
        let pass = ""
        let arr = [this.ucase, this.lcase,this.specialChar,this.num];
        for (let i = 0; i < 25; i++) {
            let ind1 = Math.floor(Math.random() * arr.length);
            let ind2 = Math.floor(Math.random() * arr[ind1].length);
            pass += arr[ind1][ind2];
        }
        return pass;
    }
}
let disp=document.getElementById("disp");
let radio=document.getElementsByClassName("redio");
let btn=document.getElementById("btn");
let copy = document.getElementById("copy");

let p = new password();

btn.addEventListener("click",()=>{
    let b;
    if(radio[0].checked){
        b=p.getFunnyPwd();
    }else if(radio[1].checked){
        b=p.getWeakPwd();
    }else if(radio[2].checked){
        b=p.getStrongPwd();
    }else if(radio[3].checked){
        b=p.getSuperStrongPwd();
    }
    disp.value=b;
})
const toastLiveExample = document.getElementById('liveToast');
const toast = new bootstrap.Toast(toastLiveExample);

copy.addEventListener("click",()=>{
    if (disp.value != ""){
        disp.select()
        disp.setSelectionRange(0, 33);
        document.execCommand("copy")
        navigator.clipboard.writeText(disp.value)
        toast.show()
    }
})

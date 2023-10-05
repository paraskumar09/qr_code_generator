const textbox=document.querySelector("[textbox]");
const qr= document.querySelector("[qrcode]");
const btn=document.querySelector("[generatebtn]");
const qrdiv=document.querySelector(".qr");
btn.addEventListener("click",printqr);

function printqr()
{
    let data=textbox.value;
    if(data!="")
    {
        qr.src="https://api.qrserver.com/v1/create-qr-code/?size=150x15&data="+ data;
        qrdiv.classList.remove("hide");
    }
    else
    {
        textbox.classList.add("vibrate");
        setTimeout(()=>{
            textbox.classList.remove("vibrate");
        },"400");
        qrdiv.classList.add("hide");
        
    }

}
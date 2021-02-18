let buttonVerify = document.getElementById("btn");
let buttonResset = document.getElementById("reset");
let container = document.getElementById("container");
let oneImageClicked = false;
let img1DataNsTest;
let img2DataNsTest;
let img1Key;
let img2Key;
function reset(){
let randomNumber = Math.floor(Math.random()*5+1);
let randomImage = document.querySelector(`[data-ns-test=img${randomNumber}]`);
let randomImageElement = document.getElementById("random");
randomImageElement.src=randomImage.src;
randomImageElement.setAttribute("data-ns-test",`img${randomNumber}`);
buttonVerify.classList.add("dis");
buttonResset.classList.add("dis");
document.getElementById("para").innerHTML="";
oneImageClicked = false;
}
reset();
container.addEventListener("click",(event)=>{
       if(!oneImageClicked){
           img1DataNsTest = event.target.getAttribute("data-ns-test");
           oneImageClicked = true;
           img1Key = event.target.getAttribute("key");
           buttonResset.classList.remove("dis");
       }
       else{
           img2Key = event.target.getAttribute("key");
           if(img2Key===img1Key){
               return;
           }
           else{
               img2DataNsTest = event.target.getAttribute("data-ns-test");    
               buttonVerify.classList.remove("dis")     
           }

       }
   
});
    
function verify(){
    if(img2DataNsTest===img1DataNsTest){
        document.getElementById("para").innerHTML="You are a human. Congratulations!";
    }
    else{
        document.getElementById("para").innerHTML="We can't verify you as a human. You selected the non-identical tiles.";
       
    }
}



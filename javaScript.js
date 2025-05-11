let rezultat=0,semn,cifra1=null,cifra2=null,reset=0,previous=0

const button=document.querySelectorAll("button")

class inpuT{
    primit

    cifra1
    cifra2
}
//tot nu functioneaza coreect(la C,cand schimbi valoarea lui cifra1 si cifra2,la inmultire)
function calculeaza(a,b,semn){
        switch(semn){
                case '+': rezultat=a+b; break;
                case '-':rezultat=a-b;break;
                case '*':rezultat=a*b; break;
                case '/':rezultat=a/b;break;
                case '%':rezultat=a%b;break;
                case '+/-':rezultat=rezultat * (-1);break;
                case 'C':rezultat=0;reset=3;break;
                case '=':break;
             }
            cifra1=rezultat
            return rezultat

}


function input(){
    button.forEach( (element) => {
        element.addEventListener( "click", () =>{
            if(element.classList.contains("cifra")){
            if(cifra1==null){
            cifra1=Number(element.textContent);console.log("cifra1 =", cifra1);
            }else{
            cifra2=Number(element.textContent); console.log("cifra1 =", cifra2);
            if(semn){
                rezultat=calculeaza(cifra1,cifra2,semn); console.log("rezultat =", rezultat);
                cifra1=rezultat;
                cifra2=null;
            }
        }
        }else if(element.classList.contains("operator")){
          if(element.classList.contains("operator")=='C'){ 
            cifra1 = cifra2 = semn = null;
            rezultat = 0;
            console.log("Resetat →", rezultat);
          }else if(element.classList.contains("operator")=='='){
            cifra1=rezultat;cifra2=null;semn=null;
        }else{
            semn=element.textContent;
        }
    }   
        })
    })
}

input()
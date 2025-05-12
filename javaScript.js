// let rezultat=0,semn,cifra=null,cifra2=null,reset=0,previous=0

// const button=document.querySelectorAll("button")

// class inpuT{
//     primit

//     cifra
//     cifra2
// }
// //tot nu functioneaza coreect(la C,cand schimbi valoarea lui cifra si cifra2,la inmultire)
// function calculeaza(a,b,semn){
//         switch(semn){
//                 case '+': rezultat=a+b; break;
//                 case '-':rezultat=a-b;break;
//                 case '*':rezultat=a*b; break;
//                 case '/':rezultat=a/b;break;
//                 case '%':rezultat=a%b;break;
//                 case '+/-':rezultat=rezultat * (-1);break;
//                 case 'C':rezultat=0;reset=3;break;
//                 case '=':break;
//              }
//             cifra=rezultat
//             return rezultat

// }


// function input(){
//     button.forEach( (element) => {
//         element.addEventListener( "click", () =>{
//             if(element.classList.contains("cifra")){
//             if(cifra==null){
//             cifra=Number(element.textContent);console.log("cifra =", cifra);
//             }else{
//             cifra2=Number(element.textContent); console.log("cifra =", cifra2);
//             if(semn){
//                 rezultat=calculeaza(cifra,cifra2,semn); console.log("rezultat =", rezultat);
//                 cifra=rezultat;
//                 cifra2=null;
//             }
//         }
//         }else if(element.classList.contains("operator")){
//           if(element.classList.contains("operator")=='C'){ 
//             cifra = cifra2 = semn = null;
//             rezultat = 0;
//             console.log("Resetat →", rezultat);
//           }else if(element.classList.contains("operator")=='='){
//             cifra=rezultat;cifra2=null;semn=null;
//         }else{
//             semn=element.textContent;
//         }
//     }   
//         })
//     })
// }

// input()

let rezultat=cifra=numar1=numar2=operand=ultimaApasare=null,stare=0
//stare=1- s-a itnrodus primul operator/stare=2-s-a introdus acelasi operator
const button=document.querySelectorAll("button");

function calcul(a, op, b) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b === 0 ? NaN : a / b;
        case '%': return a % b;
        case '+/-': return -a;
        default: return a;
    }
}
//problema nu citeste numarul 2 ca fiind de 2 sau mai multe cifre
//dupa egal daca apesi un alt numar concateneaza

function input(){
    button.forEach( (buton) =>{
     buton.addEventListener( "click", () =>{
     let val=buton.textContent
     
    if(buton.classList.contains("cifra")){
        const cifra=Number(val);
        if(stare===0 || stare===1){
            //primul numar
            numar1=(numar1 ?? 0)*10+cifra; //?? daca numar1 este null atunci va primi valoarea 0
            stare=1;ultimaApasare=["numar"]
            console.log("Număr curent:", numar1);
        }else if(stare ===2 || stare ===3){
            //al doilea numar
            numar2=(numar2 ?? 0)*10+cifra;
            stare=3;
            ultimaApasare=["numar"]
            console.log("Număr 2 =", numar2);
        }

    }else if(buton.classList.contains("operator")){
        if(val==='C'){
            rezultat=numar1=numar2=operand=null;
            stare=0;  console.log("Reset complet");
        }else if (val === "=" && numar1 != null && operand != null && numar2 != null) {
            rezultat = calcul(numar1, operand, numar2);
            console.log(`Rezultat final: ${numar1} ${operand} ${numar2} = ${rezultat}`);
            numar1 = rezultat;
            numar2 = null;
            operand = null;
            stare = 2;
        }else if(ultimaApasare.at(0)=="Operand" && ultimaApasare.at(1)==val){
            rezultat = calcul(numar1, val, numar1);
            console.log(`Operator dublu: ${numar1} ${val} ${numar1} = ${rezultat}`);
            numar1 = rezultat;
         } else if (numar1 != null && numar2 != null && operand != null) {
            rezultat = calcul(numar1, operand, numar2);
            console.log(`Auto-calc: ${numar1} ${operand} ${numar2} = ${rezultat}`);
            numar1 = rezultat;
            numar2 = null;
            operand = val;
            stare = 2;
            ultimaApasare = ["Operand", val];
        }else{
            operand=val;
            stare=2; ultimaApasare=["Operand",operand]
            console.log("Operator setat:", operand);
        }
    }
     })
    })
}

input();
realResult=0

function add1(){
    realResult +=1
    document.getElementById("score-dpl1").innerText=realResult
}

function add2(){
    realResult +=2
    document.getElementById("score-dpl1").innerText=realResult
}

function add3(){
    realResult +=3
    document.getElementById("score-dpl1").innerText=realResult
}

guestResult=0

function guAdd1(){
    guestResult +=1
    document.getElementById("score-dpl2").innerText=guestResult
}

function guAdd2(){
    guestResult +=2
    document.getElementById("score-dpl2").innerText=guestResult
}
function guAdd3(){
    guestResult +=3
    document.getElementById("score-dpl2").innerText=guestResult
}

function reset(){
    document.getElementById("score-dpl1").innerText=0
    document.getElementById("score-dpl2").innerText=0
}
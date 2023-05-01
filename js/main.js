let inpname = document.querySelector(`.inpname`);
let inpurl = document.querySelector(`.inpurl`);
let submit = document.querySelector(`.submit`);
let kartona = document.querySelector(`.kartona`);
let arr;


if(localStorage.projectinp != null){
    arr = JSON.parse(localStorage.projectinp);
    display()
}else{
    arr = [];
}

submit.onclick = function(){
    let inpobjuct = {
        presssname:inpname.value,
        presssurl:inpurl.value,
    }
    if(inpname.value === '' && inpurl.value === ''){
        return false

    }else{
        arr.push(inpobjuct)
        localStorage.setItem(`projectinp`,JSON.stringify(arr))
    }
    display()
    cleardata()
}
function display(){
    let tr ='';
    for(let i=0;i<arr.length;i++){
        tr += `
        <div class="row mb-2">
            <div class="infocol col col-sm-6 col-12 d-flex text-white align-items-center">
                <span>${i+1}</span>
                <h5 class="ms-2 mb-0">${arr[i].presssname}</h5>
               
            </div>
            <div class="col btns col-sm-6 justify-content-end d-flex">
                <button class="btn btn-outline-primary "><a href="${arr[i].presssurl}" target="_blank">Visit</a></button>
                <button onclick="delate(${i})" class="btn btn-outline-danger ms-2">Delate</button>
            </div>
        </div>
        <hr>
        `
    }

    kartona.innerHTML = tr;
    }
    function delate(inde){
        arr.splice(inde,1);
        localStorage.setItem(`projectinp`,JSON.stringify(arr));
        display()
    }
    function cleardata(){
        inpname.value = "";
        inpurl.value  = "";
    }

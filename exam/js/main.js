let arr=[];
let btn= document.querySelector(`.btnn`);
let inp= document.querySelector(`.inp`);
async function curr(con){
    let a = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${con}&days=3`);
    let s = await a.json()
    arr = s;
    display()
    dis()
    bis()
}
curr(`cairo`)

btn.addEventListener(`click`,function(){
    serch()
})

function serch(){
    inp.addEventListener(`blur`,function(){
        if(inp.value == ''){
            return false
            
        }else{
            let contary = inp.value;
            inp.value = '';
            curr(contary) 
        }
    })
}
serch()


let box1= document.querySelector(`.box-1`)
function display(){
    let lol = `
    <div class="head">
    <span>${arr.forecast.forecastday[0].date}</span>
    </div>
    <div class="info">
    <span class="cantry">${arr.location.name}</span>
    <h5>${arr.current.temp_c}<sup>o</sup>C <img src="${arr.current.condition.icon}"></h5>
    <span class="sun">${arr.current.condition.text}</span>
    <div class="sp mt-3">
    20% 18km/h East
    </div>
    </div>
    `
    box1.innerHTML = lol;
}

let box2= document.querySelector(`.box-2`)

function dis(){
    let mol = `
    <div class="head ">
    <h6 class="m-0">${arr.forecast.forecastday[1].date}</h6>
    </div>
    <div class="info text-center">
    <img src="${arr.forecast.forecastday[1].day.condition.icon}">
    <h5 class="fs-4 fw-bold">${arr.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h5>
    <h5 class="fs-6">${arr.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</h5>
    <span class="sun">${arr.forecast.forecastday[1].day.condition.text}</span>
    </div>
    `
    box2.innerHTML = mol;
};
let box3= document.querySelector(`.box-3`)
function bis(){
    let fol = `
    <div class="head">
    <h6 class="m-0">${arr.forecast.forecastday[2].date}</h6>
    </div>
    <div class="info text-center">
    <img src="${arr.forecast.forecastday[2].day.condition.icon}">
    <h5 class="fs-4 fw-bold">${arr.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h5>
    <h5 class="fs-6">${arr.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</h5>
    <span class="sun">${arr.forecast.forecastday[2].day.condition.text}</span>
    </div>
    `
    box3.innerHTML = fol;
}
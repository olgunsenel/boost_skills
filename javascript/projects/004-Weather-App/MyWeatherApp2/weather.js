const form = document.querySelector(`section.top-banner form`); //topbanner sectionun altindaki form
const input = document.querySelector(`.container input`); //container altindaki input
const msg = document.querySelector(`span.msg`); //msg classina sahip olan span
const list = document.querySelector(`.ajax-section .cities`); // 

//token : d3b96043a21102d3ea80501b9de191fd

localStorage.setItem(`tokenKey`, `fmJMA55C7HKg25rP+Ol7/jXaFTtHIpHU1BtRHQeJYqLyK+1vxo1XPWnpQtOKUnQJ`);
// localStorage.setItem(`tokenKeyEncrypted`, EncryptStringAES (`d3b96043a21102d3ea80501b9de191fd`));

form.addEventListener(`submit`, (event) => {
    event.preventDefault(); //site yenilenmesini engelliyor.
    getWeatherData();
});

const getWeatherData = async() => {
    const tokenKey = DecryptStringAES(localStorage.getItem(`tokenKey`));
    // alert(tokenKey);
    const inputValue = input.value;
    const units = "metric";
    const lang = `tr`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;

    const response = await fetch(url).then(response=>response.json());
    const {main, sys, weather, name} = response;
    console.log(response);
    const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
    const iconUrlAWS = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0].icon}.svg`;

    const cityNameSpans = list.querySelectorAll(`.city span`);
    const cityNameSpansArray = Array.from(cityNameSpans);
    if(cityNameSpansArray.length > 0) {
        const filteredArray = cityNameSpansArray.filter(span=>span.innerText == name);
        if(filteredArray.length > 0){
            msg.innerText = `Bu sehir var`
            setTimeout(() => {
                msg.innerText = ``;
            }, 5000);
            form.reset();
            return;
        }
    }


    const createdLi = document.createElement(`li`);
    createdLi.classList.add(`city`);
    createdLi.innerHTML = `<h2 class="city-name" data-name="${name}, ${sys.country}">
                                <span>${name}<span/>
                                <sup>${sys.country}</sup>
                            </h2>
                            <div class="city-temp">${Math.round(main.temp)}<sup>??C</sup><div/>
                            <figure>
                                <img class="city-icon" src="${iconUrl}">
                                <figcaption>${weather[0].description}</figcaption>
                            </figure>`;
    //append vs prepend
    list.prepend(createdLi);
    form.reset();





    
}


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
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${tokenKey}&units=${units}&lang=${lang}`;

    const response = await fetch(url).then(response=>response.json());
    console.log(response);
}


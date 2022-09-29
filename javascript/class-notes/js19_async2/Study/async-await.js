//*=================================================
//*               ASYNC-AWAIT
//*=================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//? Bu baglamda sentetik seker benzetmesi yapilabilir.

//* Bir fonskiyonu asenkron hale getirmek icin fonksiyon keyword'nun onune
//* async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin
//* beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron
//* kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi
//* satirdaki kodun durudurulmasini saglar. Yapilan istek yerine getirilip sonuc
//* degerlerinin dondurulmesine ile kodun calismasi devam eder.

// const getNews = async function () {
  // const API_KEY = `94fd92f5f9704ef29dd878012108fba9`
  // const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=` + API_KEY;
  ///responce adinda bir degisken ile 
  ///fetch yaparak veri cevabi bekliyoruz.
  // const response = await fetch(url);  
  /// console.log(response);
  /// data adinda bir await ile gelen 
  /// response'u al ve json'u bize cikart.
  // const data = await response.json();
  /// console.log(data);
  ///url kaynagi icindeki articles adindaki bilgileri cekiyoruz.
  // console.log(data.articles);
// };
// getNews();

//? Yukaridaki fetch surecini bir try catch blogunun icine almamiz lazim cunku
//? fetch'den gelen response'da bir sorun varsa kullanicinin karsisina cikarmadan
//? sorunu ele alabiliriz.
//? Yukaridaki kodlamanin try catch icine eklenmis hali:


const getNews = async function () {
  const API_KEY = `94fd92f5f9704ef29dd878012108fba9`
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=` + API_KEY;

  try {
    const response = await fetch(url);
    if(!response.ok){
      isError = true;
      // throw new Error(`Something went wrong: ${response.status}`)
    }
    const data = await response.json();
    // console.log(data.articles);
    renderNews(data.articles);
  } catch (error) {
    console.log(error);
  }
};

const renderNews = (news) =>{
  const newList = document.getElementById(`news-list`);
  news.forEach((item) => {
    const {title, description, urlToImage} = item;
    newList.innerHTML += `
    <div class = "col-md-6 col-lg-4 col-xl-3>
      <div class="card" style="width: 18rem;">
        <img src="${urlToImage}" class="card-img-top" alt="news">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <a href="#" class="btn btn-danger">Habere Git</a>
        </div>
      </div>
    </div>
  `
});
};


window.addEventListener(`load`, getNews);




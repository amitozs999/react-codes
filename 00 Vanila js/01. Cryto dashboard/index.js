let data = [];
let cardContainer = document.getElementById("card-container");  //store cards vertically inside this flex conatiner

//The DOMContentLoaded event fires when the HTML document has been completely parsed,
// and all deferred scripts (<script defer src="…"> and <script type="module">) have downloaded
//and executed. It doesn't wait for other things like images

//addEventListener("DOMContentLoaded", (event) => {});

document.addEventListener("DOMContentLoaded", function (event) {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  )
    .then((res) => res.json())
    .then((res) => {
      data = res;
      console.log(res);

      for (let i = 0; i < data.length; i++) {
        //for each crpto show a div on screen

        //card -> image + detailsdiv(2 rows of info)

        cardContainer.innerHTML += `<div class="card">
             <div class="image"> 
                <img class="img" src=${data[i].image} /> 
             </div>
            <div class="details">
               <div class="row">
                     <span class="name">${data[i].name}</span>
                     <span class="price">${data[i].current_price}</span>
               </div>
              <div class="row">
                     <span class="symbol">${data[i].symbol}</span>
                     <span class="percent">${data[i].market_cap_change_percentage_24h}%</span>
              </div>
            </div>
      </div>`;
      }
    });
});

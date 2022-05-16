var baseUrl = "https://api.coinranking.com/v2/coins";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinrankingba08768577af964a173f06754aec32dbbef4eab6076269e8";

var apiUrl = `${proxyUrl}${baseUrl}`;
console.log(apiUrl);
const Coin = [];

fetch(`${proxyUrl}${baseUrl}`, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "X-My-Custom-Header": `${apiKey}`,
    "Access-Control-Allow-Origin": "*",
  },
})
  .then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.log(json.data, "ffffffffffff");
        let coinsData = json.data.coins;

        if (coinsData.length > 0) {
          var cryptoCoin = "";
        }

        //For Loop Starts

        // Jquery;

        coinsData.forEach((coin) => {
          cryptoCoin += "<tr>";
          cryptoCoin += `<td> ${coin.rank}</td>`;
          cryptoCoin += `<td> <img style="width:20px;height:20px" src="${coin.iconUrl}"/></td>`;
          cryptoCoin += `<td> ${coin.name}</td>`;
          cryptoCoin += `<td> $${Math.round(coin.price)} Billion</td>`;
          cryptoCoin += `<td> ${coin.symbol} </td>`;
          cryptoCoin += `<td class="value"> ${coin.change} </td>`;
          ("<tr>");
        });
        //For Loop Ends
        document.getElementById("data").innerHTML = cryptoCoin;
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });

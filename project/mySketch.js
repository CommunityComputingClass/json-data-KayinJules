let data;
let floww=2
let flowprev=1
let names = ["sunflower" , "tulip"]
let y = 40

//KEY: HN9TUQGX2II5XAY3

function preload() {
  data = loadJSON("flower.json");
  catData = loadJSON('https://catfact.ninja/fact');
  // stockData = loadJSON('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=HN9TUQGX2II5XAY3');
  stockData = loadJSON('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo');
}


function setup() {
  createCanvas(400, 400);
  background(200);
  
  // Print the stock data to see the structure
  console.log(stockData);
  
  // Access the "Time Series (5min)" section
  let timeSeries = stockData["Time Series (5min)"];

  // Loop through the time series data
  for (let timestamp in timeSeries) {
    if (timeSeries.hasOwnProperty(timestamp)) {
      let stockInfo = timeSeries[timestamp]; // This contains the open, high, low, close, volume
      console.log("Timestamp: " + timestamp); // This is the timestamp
      console.log("Stock data: ", stockInfo); // This is the stock data at that timestamp
    }
  }
}



function draw() {
  background(200);  // Clear the canvas on each frame
  
  textFont('Arial');
  fill("white");
  textSize(14);

  let yOffset = 20;  // Start y-position for displaying data
  let stockSeries = stockData["Time Series (5min)"];  // Extract the time series data

  // // Loop through the time series and display timestamps and corresponding stock data
  // for (let timestamp in stockSeries) {
  //   let stockInfo = stockSeries[timestamp];
  //   let openPrice = stockInfo["1. open"];
  //   let closePrice = stockInfo["4. close"];
  //   let volume = stockInfo["5. volume"];

  //   // Display the timestamp and stock data as text on the canvas
  //   text(`Time: ${timestamp}`, 10, yOffset);
  //   text(`Open: ${openPrice}`, 10, yOffset + 20);
  //   text(`Close: ${closePrice}`, 10, yOffset + 40);
  //   text(`Volume: ${volume}`, 10, yOffset + 60);

  //   yOffset += 80;  // Increment yOffset to avoid overlap for each entry
  // }
  let stockInfo = stockSeries["2025-04-10 14:05:00"];
  let openPrice = stockInfo["1. open"];
  let closePrice = stockInfo["4. close"];
  let volume = stockInfo["5. volume"];

  text(`Open: ${openPrice}`, 10, yOffset + 20);
  text(`Close: ${closePrice}`, 10, yOffset + 40);
  text(`Volume: ${volume}`, 10, yOffset + 60);
} 
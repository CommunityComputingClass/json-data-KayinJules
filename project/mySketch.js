let data;
let floww=2
let flowprev=1
let names = ["sunflower" , "tulip"]
let y = 40
let fakeopen = 100
let fakeclose = 110
let fakevolume = 12000
let stocknum = 4
let timekey = 1

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
  let stockInfo = stockSeries["2025-05-14 18:05:00"];
  let openPrice = stockInfo["1. open"];
  let closePrice = stockInfo["4. close"];
  let volume = stockInfo["5. volume"];

  text(`Open: ${openPrice}`, 10, yOffset + 20);
  text(`Close: ${closePrice}`, 10, yOffset + 40);
  text(`Volume: ${volume}`, 10, yOffset + 60);
  
  for (let i = 1; i < stocknum; i += 1) {

    //let timeKey = `2025-05-14 10:${String(i * 5).padStart(2, '0')}:00`;
    // Ensure stockInfo exists for the given timeKey
    //let stockInfo = stockSeries[timeKey];
 
  let stockInfo = stockSeries[timeSeries[i]];
  let openPrice = stockInfo["1. open"];
  let closePrice = stockInfo["4. close"];
  let volume = stockInfo["5. volume"];

  stroke('magenta')
  strokeWeight(5);
  line((50*i),(((closePrice)-260)*50), (50*i), (((closePrice)-260)*50)+20)
  }

  
} 



function generateTimeSeries(startTime, intervals) {
  const timeSeries = [];
  let currentTime = new Date(startTime);

  for (let i = 0; i < intervals; i++) {
    const timeKey = currentTime.toISOString().slice(0, 19).replace("T", " ");
    timeSeries.push(timeKey);
    currentTime.setMinutes(currentTime.getMinutes() + 5);
  }

  return timeSeries;
}

// Example usage:
const startTime = "2025-05-14T11:20:00";
const intervals = 6;
const timeSeries = generateTimeSeries(startTime, intervals);
console.log(timeSeries);
 /// function Graph(){
 ///   rect(1,124,134)

///  }
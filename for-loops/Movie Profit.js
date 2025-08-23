function movieProfit(input){
    let movieName = input[0];
    let dayCount = Number(input[1]);
    let ticketCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaPercent = Number(input[4])/100;
    let ticket = (ticketPrice * ticketCount)*dayCount;
    let percent = ticket * cinemaPercent;
    let studioProfit = ticket - percent;
    console.log(`The profit from the movie ${movieName} is ${studioProfit.toFixed(2)} lv.`);



}
movieProfit(["Python Basics",
"40",
"34785",
"10.45",
"14"]);
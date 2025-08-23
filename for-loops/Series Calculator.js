function series(input){
    let name = input[0];
    let seasonsCount = Number(input[1]);
    let episodeCount = Number(input[2]);
    let timeEpisode = Number(input[3]);
    let withAdvertising = timeEpisode + timeEpisode*0.2;
    let total = ((withAdvertising*episodeCount)*seasonsCount)+seasonsCount*10;
    console.log(`Total time needed to watch the ${name} series is ${total} minutes.`);

}
series(["Game of Thrones",
"7",
"10",
"50"]);
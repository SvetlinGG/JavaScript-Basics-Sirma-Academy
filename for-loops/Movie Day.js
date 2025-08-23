function movieDay(input){
    let timeRecording = Number(input[0]);
    let preparing = timeRecording * 0.15;
    let sceneCount = Number(input[1]);
    let sceneTime = Number(input[2]);
    let time = sceneCount * sceneTime + preparing;
    if ( timeRecording >= time){
        let timeLeft = timeRecording - time;
        console.log(`You managed to finish the movie on time! You have ${Math.ceil(timeLeft)} minutes left!`);
    }else if ( time > timeRecording){
        let timeNeeded = time - timeRecording;
        console.log(`Time is up! To complete the movie you need ${timeNeeded} minutes.`);
    }
    
5

}
movieDay(["120",
"10",
"11"]);
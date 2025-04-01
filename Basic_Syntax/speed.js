function speed(distance, hours, minutes, seconds){

    let hoursInSeconds = hours * 3600;
    let minutesInSeconds = minutes * 60;
    let totalSeconds = hoursInSeconds + minutesInSeconds + seconds;

    let speedInSeconds = distance / totalSeconds;

    console.log(speedInSeconds);
    


}
speed(100, 1, 20, 20);
speed(2500, 5, 56, 25);
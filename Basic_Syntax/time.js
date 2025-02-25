function time(minutes){

    let hour = minutes / 60
    let mins = minutes % 60

    console.log(`${hour.toFixed(0)}:${mins}`);
   
    


}
time(60);
time(90);
time(325);
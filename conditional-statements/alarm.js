function alarm (hour, minutes){
    let minutesPlus = 15;
    let realMinute = minutes + minutesPlus;
    if (realMinute > 59){
        hour +=1
    }
    if (realMinute > 59){
        realMinute = realMinute - 60;
    }
    
    if (realMinute < 10){
        realMinute = `0${realMinute}` 
    }
    if ( hour > 23){
        hour = `${0}`
    }
    console.log(`${hour}:${realMinute}`);
    

}
alarm(1, 47);
alarm(0, 2);
alarm(23, 59);
alarm(11, 07);
alarm(12, 48);
function journey(x, y){

    let distanceAfterTwoHours = (x * 2 ) + ( 3 * x );
    let distanceAfterThreeHours = y * 3;
    let difference = Math.abs( distanceAfterTwoHours - distanceAfterThreeHours)

    console.log(difference);
    


}
journey(81,120)
journey(100, 90)
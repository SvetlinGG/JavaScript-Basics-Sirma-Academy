function totalPrice(office1){

    let office2 = office1 * 0.8;
    let office3 = ( office2 + office1 ) * 1.15;
    let totalSum = office1 + office2 + office3;

    console.log(totalSum.toFixed(3));
    

}
totalPrice(380);
totalPrice(720.50);
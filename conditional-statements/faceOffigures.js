function area(figure, sideA, sideB){

    let areas = 0;

    switch(figure){
        case 'square':
        areas = sideA * sideA;
        break;
        case 'rectangle':
        areas = sideA * sideB;
        break;
        case 'triangle':
        areas = 1/2 * sideA * sideB;
        break;
        case 'circle':
        areas = Math.PI * Math.pow(sideA, 2);
        break;
    }
    console.log(areas.toFixed(2));
    


}
area('square', 5);
area('rectangle', 10, 3.5);
area('triangle', 4.5, 20);
area('circle', 10)
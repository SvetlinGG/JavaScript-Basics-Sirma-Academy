function shop(product, city, count){

    let price = 0;
    let sum = price * count;
    switch(city){
        case 'Sofia':
        if (product == 'tea'){
            price = 0.5;
            sum = price * count;
        }else if ( product == 'water'){
            price = 0.8;
            sum = price * count;
        }else if ( product == 'juice'){
            price = 1.2;
            sum = price * count;
        }else if ( product == 'sweets'){
            price = 1.45;
            sum = price * count;
        }else if ( product == 'chips'){
            price = 1.6;
            sum = price * count;
        }
        break;

        case 'Plovdiv':
        if (product == 'tea'){
            price = 0.4;
            sum = price * count;
        }else if ( product == 'water'){
            price = 0.7;
            sum = price * count;
        }else if ( product == 'juice'){
            price = 1.15;
            sum = price * count;
        }else if ( product == 'sweets'){
            price = 1.30;
            sum = price * count;
        }else if ( product == 'chips'){
            price = 1.5;
            sum = price * count;
        }
        break;

        case 'Varna':
        if (product == 'tea'){
            price = 0.45;
            sum = price * count;
        }else if ( product == 'water'){
            price = 0.7;
            sum = price * count;
        }else if ( product == 'juice'){
            price = 1.1;
            sum = price * count;
        }else if ( product == 'sweets'){
            price = 1.35;
            sum = price * count;
        }else if ( product == 'chips'){
            price = 1.55;
            sum = price * count;
        }
        break;
    }
    console.log(sum);
    

}
shop('tea', 'Varna', 2);
shop('chips', 'Plovdiv', 1);
shop('juice', 'Sofia', 6);
shop('sweets', 'Plovdiv', 1)
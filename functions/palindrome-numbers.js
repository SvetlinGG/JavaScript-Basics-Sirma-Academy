function palindrome(arr){
    let result  = '';


    for( var i = arr.length; i > 0; i-- )
        {
            if( arr[i] = arr.length -1 )
            {
                result = 'true';
            }else{
                result = 'false';
            }
        }
    
    console.log(result);
    
    
    

}
palindrome([123,323,421,121])
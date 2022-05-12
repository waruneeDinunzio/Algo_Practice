/**
 * Calculate the fraction of positive, negative and zero values in an array.
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
 */
function plusMinus(arr) {
    //Write your code here
   
        let positive = 0;
            let zero =0;
            let neg = 0;
            //let result =[positive, zero, neg]
            
        for (let i = 0; i < arr.length; i++){
            
            if ( arr[i] < 0){
                //console.log(i + "negative")
                neg++
            }else if (arr[i]>0) {
                //console.log(i + "positive")
                positive++
            } else {
                zero++
                //console.log(i + "zero")
            }
            //console.log()
        }
        
        
        //console.log(positive,neg,zero)
        let lengthArr = positive+neg+zero
        let resultPos = positive/lengthArr
        let resultNeg = neg/lengthArr
        let resultZero = zero/lengthArr 
        //let result = resultPos,resultNeg,resultZero
        console.log(resultPos.toFixed(6))
        console.log(resultNeg.toFixed(6))
        console.log(resultZero.toFixed(6))
        
    
}


plusMinus([-4, 3 ,-9, 0 ,4, 1])

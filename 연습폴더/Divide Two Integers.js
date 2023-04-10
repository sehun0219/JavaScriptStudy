var divide = function(dividend, divisor) {
    if(dividend === 0){
        return 0;
    }
    if(divisor === 0){
        throw new Error ("divisor cannot be zero")
    }

    const isNegative = (dividend < 0) ^ (divisor < 0); 
    dividend = Math.abs(dividend); //절댓값
    divisor = Math.abs(divisor);

    let quotient = 0;

    while (dividend >= divisor){
        let temp = dividor;
        let multiple = 1;

        while(dividend >= temp << 1){
            temp <<= 1;
            multiple <<= 1;
        }
        dividend -= temp;
        quotient += multiple;
    }
    if(isNegative){
        quotient = -quotient;
    }

    const INT_MAX = Math.pow(2,31) -1;
    const INT_MIN = Math.pow(-2,31);

    if(quotient > INT_MAX) {
        return INT_MAX;
    } else if(quotient < INT_MIN){
        return INT_MIN;
    } else {
        return quotient;
    }
    
};

console.log(divide(10,3));
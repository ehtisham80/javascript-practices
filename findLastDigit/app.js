function findLastDigit ( x, y, z )
{
    if ( ( x > 0 ) && y > 0 & z > 0) {
        return ( x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10 );
    }
    else 
    return false;
}

console.log( findLastDigit( 20, 30, 400 ) );
console.log( findLastDigit( -20, 30, 400 ) );
console.log(findLastDigit(20, -30, 400));
console.log(findLastDigit(20, 30, -400));
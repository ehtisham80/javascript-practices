var GetDateValues = function ( ab )
{
    today = new Date();

    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if ( dd < 10 ) dd = '0' + dd;
    if ( mm < 10 )  mm = '0' + mm;
    return ( mm + ab + dd + ab + yyyy );
};
console.log( GetDateValues( '/' ) );
console.log( GetDateValues( '-' ) );

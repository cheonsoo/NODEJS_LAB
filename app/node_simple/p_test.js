var fn1 = function( i ) {
    console.log(i);
    var p = new Promise(function (resolve, reject) {
        if ( i < 3 ) {
            resolve( fn1( i + 1 ) );
        } else {
            resolve("end");
        }
    });
    return p;
}

fn1(1).
then(function( result ) {
    console.log("### " + result);
});
/*
11:50am - 26/01/24
L9 - Tic Toe Game

*/

if ( typeof document === 'undefined' ) {
    console.log("document doesn't exist");    
}
else {
    console.log("document exist");
}


// let in1 = document.getElementById("input1");
const row = 3;
const col = 3;
const arr = new Array( row ).fill( ).map( () => new Array( col ).fill( '_' ) ) ;

const arrX = new Array( row+2 ).fill( ).map( () => new Array( col+2 ).fill( 0 ) ) ;
const arrO = new Array( row+2 ).fill( ).map( () => new Array( col+2 ).fill( 0 ) ) ;

// console.log( arr );




// console.dir( typeof ( e.target.id ) );
// console.log( typeof( t1.id.charAt( 0 ) ) );
// console.log( typeof( t1.id.charAt( 1 ) ) );
// console.log( typeof( parseInt( t1.id ) ) );
// console.log( e.id );
// console.log( e );



const handler1 = ( e ) => {

    let xy = e.target.id ;
    let x = parseInt( e.target.id.charAt( 0 ) );
    let y = parseInt( e.target.id.charAt( 1 ) );

    if ( arr[ x ][ y ] === '_'  && ( e.key == 'x' || e.key == 'o') ) {
        
        arr[ x ][ y ] = (e.key).toUpperCase() ;
        // console.log( e.key );
        let input1 = document.getElementById( xy );
        // input1.style.visibility = "hidden";
        input1.remove();
        
        let para1 = document.getElementById( xy + xy  );
        para1.style.visibility = "visible"
        para1.innerText = arr[ x ][ y ] ;
        para1.style.fontSize = "50px";
        para1.style.width = "200px";
        para1.style.textAlign = "center";

        if ( e.key == 'x' ) {
            arrX [ x+1 ] [ y+1 ] = 1;
            // console.log( arrX );
            if ( win( arrX ) ) {
                console.log("X is winner");
                // alert("X is winner");
            }
        }
        else {
            arrO [ x+1 ] [ y+1 ] = 1;
            if ( win( arrO ) ) {
                console.log("O is winner");
                // alert("O is winner");
            }
        }

    }


}

for ( let i=0; i<row; i++ ) {
    for ( let j=0; j<col; j++ ) {
        let str = i+""+j ;
        // console.log( str );
        let t1 = document.getElementById( str );
        t1.addEventListener( "keydown", handler1 );
    }
}




function win ( arr ) {
    let cnt1 = 0 ;
    let cnt2 = 0 ;
    let cnt3 = 0 ;
    let cnt4 = 0;
    let cnt5 = 0;
    let cnt6 = 0 ;
    let cnt7 = 0;
    let cnt8 = 0;
    let j1 = 3;
    for ( let i=1; i < arr.length-1;  i++ ) {
        if ( arr[i][1] === 1 ) {
            cnt1++;
        } 
        if ( arr[i][2] === 1 ) {
            cnt2++;
        } 
        if ( arr[i][3] === 1 ) {
            cnt3++;
        } 
        if ( arr[i][i] == 1 ) {
            cnt4++;
        }

        if ( arr[i][j1] == 1 ) {
            cnt5++;
        }
        if ( arr[3][i] == 1 ) {
            cnt6++;
        }
        if ( arr[2][i] == 1 ) {
            cnt7++;
        }
        if ( arr[1][i] == 1 ) {
            cnt8++;
        }
        j1--;

    }

    if ( cnt1 === 3 || cnt2 === 3 || cnt3 === 3 || cnt4 === 3 || cnt5 === 3 || cnt6 === 3 || cnt7 === 3 || cnt8 === 3  ) {
        return true;        
    }

}


// console.log( arrO );
// let pr1 = document.createElement("p");
// pr1.setAttribute( "id", "p1" );

// let tc1 = document.querySelector("#td1");
// tc1.append( pr1 ); 
// let prr1 = document.getElementById("p1");
// prr1.innerText = arr[ parseInt( t1.id.charAt( 0 ) ) ][ parseInt( t1.id.charAt( 1 ) ) ] ;
// console.log( input1.value );





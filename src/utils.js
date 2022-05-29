export const deckFill = ( output, current, index ) => {
    const newArray = new Array( current ).fill( index + 1 )
    return [ ...output, ...newArray ]
}

export function shuffle( array ) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while ( currentIndex !== 0 ) {

        // Pick a remaining element.
        randomIndex = Math.floor( Math.random() * currentIndex );
        currentIndex--;

        // And swap it with the current element.
        [ array[ currentIndex ], array[ randomIndex ] ] = [
            array[ randomIndex ], array[ currentIndex ] ];
    }

    return array;
}

export const getCardIndex = (currentTurn, cardPlace) => {
    if (currentTurn % 27 === 0) {
        return 7 + cardPlace
    }

    return (((currentTurn % 27) - 1) * 3) + cardPlace
}

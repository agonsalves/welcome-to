import { Card, CardAddress, CardEffect } from "./styles";
import { EFFECTS_MAP } from "./App.config";

const CardPair = ( { address, effect } ) => (
    <Card>
        <CardAddress>{ address }</CardAddress>
        <CardEffect effect={ EFFECTS_MAP[ effect - 1 ] }/>
    </Card>
)

export default CardPair

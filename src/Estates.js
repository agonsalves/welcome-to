import { Estate, EstateObjective, EstatesWrapper } from "./styles";
import React from 'react'


const Estates = ({estates}) => (
    <>
        {Object.keys(estates).map((size, index) => (
            <EstateObjective>
                <EstatesWrapper>
                    {[...Array(Number(size))].map((_, idx) => (
                        <Estate key={idx} className={idx}/>
                    ))}
                </EstatesWrapper>
                { ` x${estates[size]}` }
            </EstateObjective>
        ))}
    </>
)

export default Estates

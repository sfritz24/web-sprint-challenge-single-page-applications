import React from 'react';

export default function Pizza ({details}){

    if(!details){
        return (<div>Working to put your pizza together!</div>)
    }

    return(
        <div>
            <h2>Your pizza is being prepared:</h2>
            <div>
                <h3>{details.name}</h3>
                <p>Pizza Size: {details.size}</p>
                {
                    !!details.toppings && !!details.toppings.length &&
                        <div>
                            Toppings:
                            <ul>
                                {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
                            </ul>
                        </div>
                }
                <p>Special Instructions: "{details.instructions}"</p>
            </div>
        </div>
    )
}
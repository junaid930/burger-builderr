import React from 'react';
import Auxilary from '../../../hoc/Auxilary'

import Button from  '../../UI/Button/Button'
const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients).map((ingredientsKey) => {
        return (
            <li key={ingredientsKey}>
                <span style={{ textTransform: 'capitalize' }}> {ingredientsKey} </span>: {props.ingredients[ingredientsKey]}
            </li>

        )
    })

    return (

        <Auxilary>
            <h3>Your Order</h3>
            <p>A delicious burger with the followning ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <Button btnType="Danger" clicked={props.purchasedCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchasedContinued}>CONTINUE</Button>
        </Auxilary>

    )
};

export default orderSummary;
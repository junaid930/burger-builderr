import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
<<<<<<< HEAD
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },

=======
const controls=[
    {label:'Salad', type: 'salad'},
    {label:'Bacon', type: 'bacon'},
    {label:'Cheese', type: 'cheese'},
    {label:'Meat', type: 'meat'},
    
>>>>>>> fe359a69c58d1fb40e0a364fb9b3e13da9e9e207
]
//sdds

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong> {props.price.toFixed(2)} </strong></p>

            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}

                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            ))}

            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}
                >
                Order Now
           </button>

        </div>
    )
}

export default buildControls;
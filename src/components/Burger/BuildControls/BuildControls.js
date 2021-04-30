import React from 'react';
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
const controls=[
    {labe:'Salad', type: 'salad'},
    {labe:'Bacon', type: 'salad'},
    {labe:'Cheese', type: 'cheese'},
    {labe:'Meat', type: 'meat'},
    
]


const buildControls=(props)=>{
return(
    <div className={classes.BuildControls}> 

    {controls.map(ctrl=>(
        <BuildControl key={ctrl.label}  label={ctrl.label} />
    ))}

    </div>
)
}

export default buildControls;
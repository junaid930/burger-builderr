import React from  'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'

const burger=(props)=>{
   
     let transformedIngredients=Object.keys(props.ingredients).map((ingredientKey)=>{
         return [...Array(props.ingredients[ingredientKey])]
        //      .map((_,i)=>{
        //         return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        //  })
     })
    //     .reduce((arr,el)=>{
    // //      return arr.concat(el)
    //  },[]);
     console.log(transformedIngredients)
    //  if (transformedIngredients.length===0){
    //      transformedIngredients=<p>Please start adding ingredient</p>
    //  }
  
// var a={
//     key1:3
// }
//console.log(a["key1"])   // 3
// var s=[...Array(2)] // [undefined,undefined]
// console.log(s)




    return(
        <div className={classes.Burger}>
             <BurgerIngredient type="bread-top"/>
               {/* {transformedIngredients} */}
             <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger;
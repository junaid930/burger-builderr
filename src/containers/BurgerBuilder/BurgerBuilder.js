import React, { Component } from 'react'
import Auxilary from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-order'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler'


const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}


class BurgerBuilder extends Component {

  state = {
    ingredients: null,

    totalPrice: 4,
    purchasable: false,
    purchasing:false,
    loading:false,
    error:false
  }


  componentDidMount(){
    axios.get("https://react-myburger-875c6-default-rtdb.firebaseio.com/ingredients.json")
    .then((response)=>{
      this.setState({ingredients:response.data})
    })
    .catch((error)=>{
      this.setState({error:true})
    })
  }

  purchaseHandler=()=>{
    this.setState({purchasing:true})
  }


  purchaseCancelHandler=()=>{
    this.setState({purchasing:false});
  }


  purchasedContinued=()=>{
    this.setState({loading:true})
  const order={
     ingredients:this.state.ingredients,
     customer:{
       name:"junaid",
       address:"TestStreet1",
       email:"junaidilyas123@gmail.com"
     },
     deliveryType:"fastService"
   }

   axios.post("/orders.json",order)
   .then((response)=>{
     return  this.setState({loading:false,purchasing:false})
   })
   .catch((error)=>{
     return this.setState({loading:false,purchasing:false})
   })

  

  }

  updatePurchaseState = (ingredients) => {

    const sum = Object.keys(ingredients).map((ingredientsKey) => {
      return ingredients[ingredientsKey]

    }).reduce((sum, element) => {
      return sum + element
    }, 0);

    this.setState({ purchasable: sum > 0 });

  }


  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = priceAddition + oldPrice;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients)

  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return
    }

    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });
    this.updatePurchaseState(updatedIngredients)
  }

  render() {

    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0

    }

    let orderSummary=null

     
        
        let burger= this.state.error ?  <p>ingredients cant be loaded</p>: <Spinner/>

        if(this.state.ingredients){

               burger=   ( <Auxilary> 
                      <Burger ingredients={this.state.ingredients} />
                      <BuildControls
                        price={this.state.totalPrice}
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                      />
                      </Auxilary>);

                              orderSummary = <OrderSummary
                                              price={this.state.totalPrice}
                                              ingredients={this.state.ingredients}
                                              purchasedCancelled={this.purchaseCancelHandler}
                                              purchasedContinued={this.purchasedContinued}
                                              />  
                          if (this.state.loading){
                          orderSummary=<Spinner/>
                          }
        }
 
        
    return (
      <Auxilary>
      
       

        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
         
          {orderSummary}

        </Modal>
         {burger}
      </Auxilary>

    );
  }
}

export default withErrorHandler(BurgerBuilder,axios);

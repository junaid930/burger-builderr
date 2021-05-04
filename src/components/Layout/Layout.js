import React, { Component } from 'react'
import Auxilary from "../../hoc/Auxilary";
import styles from './Layout.module.css'
import ToolBar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state={
        showSideDrawer:true
    }

  sideDrawerClosedHandler=()=>{
   this.setState({showSideDrawer:false});
  }


  sideDrawerToggleHandler=()=>{
      this.setState((prevState)=>{
          return {showSideDrawer:!prevState.showSideDrawer}
      })
  }

    render(){

    return(
        <Auxilary>
    
        <ToolBar DrawerToggleClicked={this.sideDrawerToggleHandler}/>

        <SideDrawer 
        open={this.state.showSideDrawer}
        closed={this.sideDrawerClosedHandler}
        />
        
        <main className={styles.Content}>
            {this.props.children}
        </main>
        </Auxilary> 
    );
}
 
}


export default Layout

import React from 'react'
import Auxilary from "../../hoc/Auxilary";
import styles from './Layout.module.css'
import ToolBar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout=(props)=>{

return(
    <Auxilary>

    <ToolBar/>
    <SideDrawer/>
    <main className={styles.Content}>
        {props.children}
    </main>
    </Auxilary> 
); 
}


export default layout
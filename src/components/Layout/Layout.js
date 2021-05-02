import React from 'react'
import Auxilary from "../../hoc/Auxilary";
import styles from './Layout.module.css'

const layout=(props)=>{

return(
    <Auxilary>

    <div>
        ToolBar,SideDrawer,Backdrop
    </div>
    
    <main className={styles.Content}>
        {props.children}
    </main>
    </Auxilary> 
); 
}


export default layout

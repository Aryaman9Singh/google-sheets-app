import React from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
export default function NavBar() {
  return (
    <div style={styles.listContainer}>
       <nav >
        <ul style ={styles.navList}>
            <li>
             <Link to = '/'>Login</Link>
            </li>
            <li>
                <Link to ="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to = "/subscriptions">Subscriptions</Link>
            </li>
        </ul>
        {/* <div>View Subscriptions</div> */}
       </nav>
    </div>
  )
}
const styles = {
listContainer:{
  flex:1,
  justifyContent:'center',
  alignItems:'center'

},
navList:{
    
}
}

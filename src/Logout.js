import {GoogleLogout} from 'react-google-login';
import { CLIENT_ID } from './constants/credentials';

// delete the userid from local storage too while logging out

function Logout() {
    const onSuccess = (res)=>{
        console.log("Logout Successful !",res?.profileObj );
    }
    const onFailure = (res) => {
console.log("Logout failed", res)
    }
    const handleLogout = () => {
        localStorage.removeItem('loginData');
        // setLoginData(null)
    }
    return(
        <div>
            <GoogleLogout
            clientId = {CLIENT_ID}
            buttonText = "Logout"
            onLogoutSuccess = {onSuccess}
            onFailure = {onFailure}
        //   handleLogout = {handleLogout}
            />
        </div>
    )
}
export default Logout;
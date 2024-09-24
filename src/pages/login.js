import { Link } from 'react-router-dom';
import "../style/login.css";

export default function Login(){
    return(
        <div id="body">
            <div className="other">
                <div className="form2">
                    <div id="form">
                        <h1 id="h1">Login</h1>
                        <form>
                        <input type='email' id="email" placeholder="Email"/>
                        <input type="password" id="userName" placeholder="password"/>
                        <input type="checkbox" id="checkBox"/>
                        <label>Remember My</label>
                        <Link to='/' className='nav-link items'><button id="button" href="#home">Login</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
import chatLogo from '../assets/chatLogo.svg'   
import {Link} from 'react-router-dom' 
export function SignUp() : JSX.Element{
    return(
        <>
        <div className='auth'>

            <div>
                <h1>Welcome to ChatX</h1>
                <img src={chatLogo} alt='chat icon it is acting like a logo' className='logo'/>
            </div>
            <form className='form'>
                
                <input name="name" type="text" id='fullNmae' placeholder='Full Name' />

                
                <input name="email" type="email" id='email' placeholder='Email' />

                
                <input name="username" type="text"  placeholder='Uername'/>

                
                <input name="Password" type="text"   placeholder='Password'/>

                
                <input name="ConfirmPass" type="text" id='confirmPass' placeholder='Confirm Password' />

                <button>Sign Up</button>

            </form>

            <Link to='/login'>Already signed up ? Log In</Link>
        </div>
            
        </>
    )
}
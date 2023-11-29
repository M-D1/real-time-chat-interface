import {Form , redirect, useActionData} from 'react-router-dom'

export function LogIn() : JSX.Element{

    const data : any = useActionData()

    return (
        <>
            <div className="auth">
                <h1 className="auth__login">Log In</h1>
                
                <Form className='form' method='post' action='/login' >

                    <input name="username" type="text" id='username' placeholder='Uername'/>
                    <input name="password" type="text" id='password'  placeholder='Password'/>

                    <button>Log In</button>
                    {data && data.error && <p className='auth__error'>{data.error}</p>}
                </Form>
            </div>
        </>
    )
}



export const loginAction = async ({ request } : any) => {
    const data = await request.formData()

    

    const loginData : {username:string,password:string} = {
        username: data.get('username'),
        password: data.get('password')
    }

    if(loginData.username === 'user123' && loginData.password === 'w123'){
        return redirect('/home')
    }else{
        return  {
            error: 'username or password are wrong'
        }
    }
    
    
     

    
}
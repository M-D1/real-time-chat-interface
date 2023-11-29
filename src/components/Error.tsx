import { Link } from "react-router-dom"

export function Error(): JSX.Element{
    return(

        <>
            <h1>There was an error</h1>
            <p>Please return to the <Link to='/login'>Login page</Link> and sign in again</p>
            
        </>
    )
}
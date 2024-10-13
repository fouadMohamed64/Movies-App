import { useState } from "react"

export function Login(){

    let showFlag = false;
    
    const [user, setUser] = useState({email: '', password: ''})
    const [error, setError] = useState({emailError: '', passwordError: ''})

    const valueChanges = (e)=>{
        if(e.target.name == 'email'){
            setUser({...user, email: e.target.value});
            setError({...error, emailError: e.target.value.length ==0 ? "Required Input": e.target.value.includes('@gmail.com')? '': "Invalid Email"})
        }else{
            setUser({...user, password: e.target.value})
            setError({...error, passwordError: e.target.value.length ==0 ? "Required Input": e.target.value.length < 10 ? "Input must have 10 letters..." : ""})
        }
    }

    let submitHandle = (e)=>{
        e.preventDefault(); 
        if(error.emailError == '' && error.passwordError == '' ){
            console.log(user);
            showFlag = true;
        }
    }

    return (
        <form onSubmit={(e)=>{submitHandle(e)}} className="w-50 mx-auto mt-5" >
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control"  placeholder="Enter email" name="email" onChange={ (e)=>{valueChanges(e)} }  />
                <p style={{color: 'red'}}>{error.emailError}</p>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control"placeholder="Password" name="password" onChange={ (e)=>{valueChanges(e)} } />
                <p style={{color: 'red'}}>{error.passwordError}</p>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>

            {(showFlag == true) ? <h1>User Email: {user.email}</h1>: '' }
        </form>
    )
}
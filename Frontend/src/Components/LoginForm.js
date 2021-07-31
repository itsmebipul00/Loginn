import Error from './Error'
import './LoginForm.css'

function LoginForm({handleSubmit,error,Login,Username,Password,SignIn,username,setUsername,password,setPassword,logo}) {
    console.log(error)

    return (
        <div>
            <img src={logo} alt="just-login"/>
            <div className='form'>
            <h1>{`${Login}`}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    {error ? (
                       <Error error={error}/>
                    ) : (
                        <label>{`${Username}`}</label>
                    )}
                    <input
                        type="text"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>{`${Password}`}</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button disabled={!username || !password}><h2><strong>{`${SignIn}`}</strong></h2></button>
            </form>
            </div>
        </div>
    )
}

LoginForm.defaultProps = {
    Login: 'Login',
    Username: 'Login',
    Password:'Password',
    SignIn: 'Sign in',
    logo: '/images/default.jpg'
  };

export default LoginForm

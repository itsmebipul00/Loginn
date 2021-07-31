import './ClientHomeScreen.css'

function ClientHomeScreen({location}){
    const {name, message, email, username, logo} = location.state
    const firstName= (name).split(' ')[1]
    console.log(location)
    return (
        <div>
            <img src={logo} alt="just-login"/>
            <div className='name'>
                <h2>{`Welcome back, ${firstName}`}</h2>
            </div>
            <div className='info'>
                <div className='message'>
                    <h3>{`${message}`}</h3>
                </div>
                <div className="details"> 
                    <p>{`${name}`}</p>
                    <p>{`${email}`}</p>
                    <p>{`${username}`}</p>
                </div>
            </div>
        </div>
    )
}

export default ClientHomeScreen

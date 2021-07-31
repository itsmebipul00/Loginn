import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import LoginForm from '../Components/LoginForm'

function LoginScreen({history}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [userPreference, setUserPreference] = useState([])
    const [error, setError]= useState('')

    const {Login, Password, SignIn, Username, logo} = userPreference

    const {clientID}= useParams()
    // console.log(clientID)

    useEffect(() => {
        async function BeforeLogin(){
            try {
                const {data}= await axios.get(`/api/ClientInfoBeforeLogin/${clientID}`)
                setUserPreference(data)
            } catch (error) {
                console.log(error)
            }
        }BeforeLogin()
    },[clientID])
    // console.log(userPreference)

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const {data}= await axios.post(('/api/login'), {username, password, clientID})
            if(data){
                history.push('/app/home',data)
            }
        } catch (error) {
            console.log(error.response.data)
            setError(error.response.data)
        }    
   }

    return (
        <div>
            <LoginForm
              error={error}
              Login={Login}
              handleSubmit={handleSubmit}
              Username={Username}
              username={username}
              setUsername={setUsername}
              Password={Password}
              password={password}
              SignIn={SignIn}
              setPassword={setPassword}
              logo={logo}
            />
        </div>
    )
}



export default LoginScreen

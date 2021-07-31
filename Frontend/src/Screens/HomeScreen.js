import './HomeScreen.css'
import {useState} from 'react'

function HomeScreen({history}) {
    const [id, setID] = useState('')

    const handleSubmit= () => {
        history.push(`/app/login/client${id}`)
    }

    return (
        <>
        <div className='home'>
            <h2>
                To login, Enter your client ID or just enter your url in the URL bar
            </h2>
        </div>
        <input type="number"
         placeholder='Enter ID'
         value={id}
         onChange={e => setID(e.target.value)}
        />
        <input type="submit"
         value="Submit"
         onClick={handleSubmit}
        />
       </>
    )
}

export default HomeScreen

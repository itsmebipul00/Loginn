import './Error.css'

function Error({error}){
    return (
        <div className='error'>
            <small>
                {error}
            </small>
        </div>
    )
}

export default Error

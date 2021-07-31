import express from 'express'
import clientPreferences from './data/clientPreferences.js'
import userInfos from './data/userInfos.js'

const app= express()
app.use(express.json())

//routes and controllers
app.use('/api/clientInfoBeforeLogin/:clientID', (req,res) => {
    const clientPreference= clientPreferences.find((c) => c.clientID === req.params.clientID)
    res.json(clientPreference)
})

//matching even the clientID so that only the client using their own URL logs in successfully
app.use('/api/login', (req,res) => {
    // console.log(req.body)
    const userInfo= userInfos.find((u) =>
    u.clientID === req.body.clientID && 
    (u.Username).split(' ')[1] === req.body.username && 
    u.password === req.body.password)

    // console.log(userInfo)

    if(userInfo){
        res.json({
            name: userInfo.Name,
            email: userInfo.Email,
            username: userInfo.Username,
            message: userInfo.message,
            logo: userInfo.logo
        })
    }else{
        res.status(404).send('Username or password invalid')
    }

})


app.listen(5000, console.log('Server is running'))
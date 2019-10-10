const mongoose =require('mongoose')
const User = require('.../models/user');
const service = require('.../service');

function signUp (req, res) {
    const user = new User ({
        email: require.body.email,
        displayName: require.body.displayName,
    })

    user.save((err) => {
        if(err)res.status(404).send({message: 'error al crear usuario ${err}'})
        return res.status(200).send({token: service.createToken(user) })
    })
}


function sigIn(req, res) {

}

module.exports = {
    signUp,
    sigIn
}
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')

router.post('/', (req, res) => {
    const {email, password} = req.body;
    
    if( !email || !password ){
        return res.status(400).json({msg: 'Please enter all info'});
    }

    User.findOne({ email })
        .then(user =>  {
            if(!user) return res.status(400).json({msg: 'User not found'});

            bcrypt.compare(password, user.password)
            .then(isMatch => {
                if(!isMatch) return res.status(400).json({msg: "Invalid credentials"});

                jwt.sign(
                    { id: user.id },
                    config.get('jwtSecret'),
                    { expiresIn: 3600},
                    (err, token)=>{
                        if(err)throw err;
                        res.json({
                            token,
                            user: {
                            id: user.id,
                            user: user.name,
                            email: user.email
                            }
                        })
                    }
                )
            })
        
        })
});

router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
})


module.exports = router;

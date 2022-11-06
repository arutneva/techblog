require('dotenv').config()

const express = require('express')
const {join} = require('path')
const passport = require('passport')
const {User} = require('./models')
const { Strategy: JWTStrategy, ExtractJwt} = require('passport-jwt')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())
passport.serializeUser((user, done) =>{done(null, user.id)})


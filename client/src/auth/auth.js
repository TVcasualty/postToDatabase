import auth0 from 'auth0-js'

export class auth extends  {
  auth0 =  new auth0.webAuth({
    domain:"dev-ns1-lcfs.us.auth0.com",
    clientId:"60ZBQ41B330Czp5LfanjHiIJ7iS6LHfn",
    redirectUri:"http://localhost:3000/callback",
    audience:"https://dev-ns1-lcfs.us.auth0.com/userinfo",
    responseType:"token id_token",
    scope:"openid"
  })
}

export default auth

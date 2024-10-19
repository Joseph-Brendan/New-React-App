function AuthenticationCards(props){
    if(props.userType === "new user" && props.tryingToLogin){
        return(
            <h1>You are a new user with the username {props.username}. You need to sign up.</h1>
        )
    }else{
        return(
            <h1>You are an existing user with username {props.username}.</h1>
        )
    }
}

AuthenticationCards.defaultProps = {
    username : "No Username"
}

export default AuthenticationCards
import Button from '../Button.jsx'

function NavBar () {
    // This is an example of html and react being used together
    return (
        <div className="navbarContainer">
            <div className="title">
                <div>FTTrackerPro</div>
            </div>
            <div className="buttons">
                <Button title='Sign In' whichClass='signIn' alt='Sign in button'/>
                <Button title='Sign Up' whichClass='signUp' alt='Sign up button'/>
            </div>
        </div>
    );
}

export default NavBar ;
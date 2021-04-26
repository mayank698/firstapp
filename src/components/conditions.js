

const Conditions = () => {

    const getUserMsg = (loggedin) => {
        if (loggedin)
            return <h1>You have successfully logged in your account!!</h1>
        else
            return <h1>You need to log in your account</h1>
    }

    let loggedin = false;

    return (
        <div>
            <h1>Conditions component</h1>
            {getUserMsg(loggedin)}
            <button className="btn btn-primary">{loggedin ? 'Logout' : 'Login/Register'}</button>
        </div>
    )
}

export default Conditions;
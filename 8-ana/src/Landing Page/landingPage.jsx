import "../Landing Page/landingPage.css"

function LandingPage(){
    const rootElement = document.getElementById("root");

    return(
        <div className = "landing-page">

            <div className="container">
                <div className="hero-image-with-logo-name">
                    <div className = "logo-name">
                        <h1>8 Ana</h1>
                        <h1>Expense tracker</h1>
                    </div>
                    <div className = "hero-image-wrapper">
                        <img className="hero-image" src={"/images/expense-tracker-0-bg.png"} alt="" />
                    </div>
                </div>
                <div className="line"></div>
                <div className="login-form-container">
                    <form className="login-form" action="">
                        <label htmlFor="userName">Username or email</label>
                        <input type="text" id = "userName" name = "userName" /><br/>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" /><br/>
                        <div className="submit-buttons">
                            <input type="submit" value = "Login"/>
                            <input type="submit" value= "Sign Up" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}
export default LandingPage;
import "../Landing Page/landingPage.css"

function LandingPage(){
    const rootElement = document.getElementById("root");

    return(
        <div className = "landing-page">
            <div className = "logo-name">
                <h1>8 Ana</h1>
                <h1>Expense tracker</h1>
            </div>
            <div className = "hero-image-wrapper">
                <img className="hero-image" src={"/images/expense-tracker-0-bg.png"} alt="" />
            </div>
        </div>
    );
}
export default LandingPage;
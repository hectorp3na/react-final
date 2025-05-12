import "../index.css"
import BuildingLogo from "../assets/a56658f2-8d1c-4c50-9134-9d073140ffa1.png";

const Home = () => {
    return (
<section id="landing-page">
        <h1 className="title">America's #1 Movie Database Platform</h1>
        <h2 className="description">LOOKUP YOUR FAVORITE MOVIES WITH <span style={{color: "#02439f"}} >BLINKER</span>
        </h2>
        <div className="input-wrapper">
            <a href="./user.html"><input type="text" placeholder="Search by Name" />
            </a>
            <a href="./user.html">
            <button class="not-loading"><i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </a>
        </div>
        <div class="img-building">
          <img class="building-logo" src={BuildingLogo} alt=""> </img>
        </div>
    </section>
    )
}

export default Home;
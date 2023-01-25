import Footer from "./Footer";
import MainPage from "./MainPage";
import NavBar from "./navbar/Navbar";

function Home () {

    return (  
        <div className="homeContainer">
            <NavBar />
            <MainPage message={'"What gets measured, gets improved"'}/>
            <Footer />
        </div>
        );
}

export default Home ;
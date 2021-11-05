import Logo from "./Logo"
import Aos from "aos";
import OnImage from "./OnImage";

const Home = () => {
    Aos.init({duration: 500})
    return (
      
        <div className = 'containerHome'>
            <Logo />
            <OnImage/>
        </div>
    )
}

export default Home

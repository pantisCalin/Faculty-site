import { Header } from "./Header.js"
import Contents from "./Contents.js"
import Footer from "./Footer.js";
import { useState} from "react";
import "aos/dist/aos.css"
import { Provider } from "react-redux";
import store from "./store"


function App() {


  const [menuPopUp, setMenuPopUp] = useState(false);
  return (

    <div className="container">
          <Provider store = {store}>
         
         <Header 
            onClick = {() => setMenuPopUp(!menuPopUp)} howMenuPopUp = {menuPopUp} />
              <Contents/>
             <div className = 'border'></div>
          <Footer />
         
          </Provider>
     </div>
  );
}

export default App;

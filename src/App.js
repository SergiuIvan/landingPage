import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import GetStarted from "./components/get-started/GetStarted";
import ChoosePlan from "./components/choosePlan/ChoosePlan";
import Network from "./components/network/Network";
import Customer from "./components/customer/Customer";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <GetStarted />
      <ChoosePlan />
      <Network />
      <Customer />
      <Footer/>
    </div>
  );
}

export default App;

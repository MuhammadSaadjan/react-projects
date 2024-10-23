import Banner from "./components/Banner";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileApp from "./components/MobileApp";
import NewArrival from "./components/NewArrival";
import Youngsfav from "./components/Youngsfav";
function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Hero />
        <NewArrival />
        <Banner />
        <Youngsfav />
        <MobileApp />
        <Footer />
      </div>
    </>
  );
}

export default App;

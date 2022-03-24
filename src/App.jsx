import About from "./components/about/About";
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav";
import Contacts from "./components/contacts/Contacts"
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Reviews from "./components/reviews/Reviews";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

import Home from './Home';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import Navbar from './Navbar';


function App() {
  const appStyles = {
    backgroundColor: "#fdfbd4",
    scrollBehavior: "smooth" as const, 
  };

  return (
    <div style={appStyles}>
      <Navbar /> 

      <section id="home">
        <Home />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
  
import logo from './logo.svg';
import './App.css';

import Header from './component/Header.jsx';
import Index from './component/Index.jsx';
import Footer from './component/Footer.jsx';
import About from './component/About.jsx';
import Blog_detail from './component/Blog-details';
import Blog from './component/Blog';
import Contact from './component/Contact.jsx';
import Services_details from './component/Service-details';
import Services from './component/Services.jsx';

function App() {
  console.log(window.location);
  return (
    <>
      <Header />
      <Index />
      <Footer/>
    </>
  );
}

export default App;

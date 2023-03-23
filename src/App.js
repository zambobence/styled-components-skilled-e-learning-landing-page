import './App.css';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/Global';
import Header from './component/Header';
import Hero from './component/Hero';
import Features from './component/Features';
import Footer from './component/Footer';


const theme = {
  fonts: {
    default: 'Plus Jakarta, Sans-Serif',
  }, 
  colors: {
    heading: '#13183F',
    paragaraph: '#83869A',
    link: '#F74780',
    white: '#FFFFFF'
  },
  breakpoints: {
    tablet: '768px',
    desktop: '1024px',
  }
}
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Features />
      <Footer />

      </ThemeProvider>
    </div>
  );
}

export default App;

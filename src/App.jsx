import './App.css';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App" data-theme='dark'>
     <Header />
     <Main />
     <Footer />
    </div>
  );
}

export default App;

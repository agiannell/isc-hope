import './styles/App.css';
import Header from './Components/Header'
import routes from './routes'

const App = () => {
  return (
    <section>
      <Header />
      { routes }
    </section>
  );
}

export default App;

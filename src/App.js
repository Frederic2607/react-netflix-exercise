import "./App.css";
import Logo from "./assets/img/logo-netflix.jpg";
import Section from "./components/Section";
import MoviesList from "./assets/moviesList.json";

function App() {
  return (
    <div className="App">
      <img className="logo" src={Logo} alt="logo netflix" />
      {MoviesList.map((item, index) => {
        return (
          <Section key={index} category={item.category} images={item.images} />
        );
      })}
    </div>
  );
}

export default App;

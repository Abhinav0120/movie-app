import MovieList from "./MovieList";
import Student from "./Student";

function App() {
  return (
    <>
      <h1>Movie App</h1> 
      <MovieList />
      {/* <Student name="Alexa" marks={10} />
      <Student name="Siri" marks={20}/>
      <Student name="Google" marks={30}/>
      <Student /> */}

    </>
  );
}

Student.defaultProps = {
  name : "Student",
  marks : "N.A"
}

export default App;

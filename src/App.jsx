import Header from "./components/Header/Header";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <div className="grid place-items-center h-screen">
      <Header />
      <main>
        <section>
          <Weather />
        </section>
      </main>
    </div>
  );
}

export default App;

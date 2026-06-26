import Hero from "./components/sections/Hero";
import Navbar from "./components/layout/Navbar";
import Aurora from "./components/sections/Aurora";

function App() {
  return (
    <main className="bg-slate-950 text-white">

      <Navbar />

      <Hero />

      <Aurora/>

    </main>
  );
}

export default App;
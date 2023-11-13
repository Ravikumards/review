import "./App.css";
import Review from "./Review";
function App() {
  return (
     <section class="m-auto w-1/3 text-center mt-28">
      <div>
      <h2 class="font-bold text-lg  flex flex-col items-center"><div clas="font-bold text-2xl">Our Reviews</div><div class="w-14 border-b-2 border-cyan-500"></div></h2>
      </div>
      <Review></Review>
     </section>
  );
}

export default App;

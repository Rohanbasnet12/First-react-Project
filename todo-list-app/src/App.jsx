import "./index.css";
import "./index.js"

function App() {
  return (
    <div class="container">
    <form>
      <div className="inbox">
        <input type="text" placeholder="Add New.." required autoComplete="off"/>
        <input type="submit" className="btn" value="ADD" />
      </div>
    </form>

    <div className="listItem">
        <div className="box">
          <button className="checkBtn"> <i class="fa-solid fa-check"></i> </button>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </div>
  );
}

export default App;

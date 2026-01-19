import Board from "./Board";
import Sidebar from "./components/Sidebar";
import { NodeColumn } from "./NodeColumn";

function App() {
  return (
    <div className="flex h-screen">
      <div className="basis-1/5 bg-slate-400 ">
        <Sidebar />
      </div> 

      <div className="basis-4/5 bg-white border-20 border-white rounded-md ">
        <Board>
          <NodeColumn
            title="Equipment Type"
            nodes={["Main Engine", "Aux Engine"]}
          />

          <NodeColumn
            title="Equipment"
            nodes={["Diesel Engine", "Generator"]}
          />

          <NodeColumn
            title="Assembly"
            nodes={["Fuel System"]}
          />
        </Board>

        <div >
           <p className="float-right mr-4 mb-2  ">
             <span className="text-blue-600 font-light text-sm">3</span> <span className="text-green-600 font-light text-sm">S</span> <span className="text-slate-900 font-light text-sm"> Smart Ship Solutions</span> 
        </p>
        </div>
      </div>
    </div>
  );
}

export default App;
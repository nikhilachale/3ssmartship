import Board from "./Board";
import { NodeColumn } from "./NodeColumn";

export default function HierarchyBoard() {
  return (
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
        nodes={["Fuel System", "Cooling System"]}
      />
      <NodeColumn
        title="Component"
        nodes={["Injector", "Valve", "Pump"]}
      />
    </Board>
  );
}

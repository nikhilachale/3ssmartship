import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { Minimize, Search, X } from 'lucide-react';
import "./board.css";
import { treeData } from "./components/Node.data";
import type { TreeNode } from "./components/Node.data";

interface BoardProps {
  children: ReactNode | ((props: { locatedNodeId: string | null }) => ReactNode);
}

// Recursive search by label
function findNodeByLabel(node: TreeNode, label: string): TreeNode | null {
  if (node.label.toLowerCase().includes(label.toLowerCase())) return node;
  if (node.children) {
    for (const child of node.children) {
      const found = findNodeByLabel(child, label);
      if (found) return found;
    }
  }
  return null;
}

export default function Board({ children }: BoardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [panning, setPanning] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [locatedNodeId, setLocatedNodeId] = useState<string | null>(null);
  const start = useRef({ x: 0, y: 0 });

  const onWheel = (e: React.WheelEvent) => {
    if (!e.ctrlKey) return;

    e.preventDefault();
    setScale(prev => {
      const next = prev - e.deltaY * 0.001;
      return Math.min(2, Math.max(0.5, next));
    });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setPanning(true);
    start.current = {
      x: e.clientX - offset.x,
      y: e.clientY - offset.y
    };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!panning) return;
    setOffset({
      x: e.clientX - start.current.x,
      y: e.clientY - start.current.y
    });
  };

  const stopPan = () => setPanning(false);

  const zoomIn = () => {
    setScale(prev => Math.min(2, prev + 0.1));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(0.5, prev - 0.1));
  };

  const resetView = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  // Search handler
  const handleSearch = () => {
    if (!searchValue.trim()) return;
    const found = findNodeByLabel(treeData, searchValue.trim());
    if (found) {
      setLocatedNodeId(found.id);
      setShowSearch(false);
      // Optionally, scroll to the node in your tree component here
    } else {
      setLocatedNodeId(null);
      alert("Node not found");
    }
  };

  return (
    <div
      ref={containerRef}
      className="board"
      style={{ position: "relative" }}
      onWheel={onWheel}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={stopPan}
      onMouseLeave={stopPan}
    >
      {/* Search button and input */}
      <div className="absolute top-4 left-4 z-50">
        {!showSearch ? (
          <button
            className="h-9 w-9 rounded-md bg-white shadow hover:bg-slate-100 flex items-center justify-center"
            title="Search"
            onClick={() => setShowSearch(true)}
          >
            <Search size={20} />
          </button>
        ) : (
          <div className="flex items-center bg-white shadow rounded px-2 py-1 gap-2">
            <input
              autoFocus
              type="text"
              className="border-none outline-none bg-transparent"
              placeholder="Search..."
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Escape") setShowSearch(false);
                if (e.key === "Enter") handleSearch();
              }}
            />
            <button
              className="p-1 hover:bg-slate-100 rounded"
              onClick={() => setShowSearch(false)}
              title="Close"
            >
              <X size={16} />
            </button>
          </div>
        )}
      </div>

      <div
        className="board-inner"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          transformOrigin: "0 0"
        }}
      >
        {/* Pass locatedNodeId as a prop to your tree component if needed */}
        {typeof children === "function"
          ? children({ locatedNodeId })
          : children}
      </div>

      {/* Fixed controls */}
      <div className="fixed bottom-20 right-4 z-50 flex flex-row gap-2">
        <button
          onClick={zoomIn}
          className="h-9 w-9 rounded-md bg-white shadow hover:bg-slate-100"
        >
          +
        </button>
        <button
          onClick={zoomOut}
          className="h-9 w-9 rounded-md bg-white shadow hover:bg-slate-100"
        >
          −
        </button>
        <button
          onClick={resetView}
          className="h-9 w-9 rounded-md bg-white px-2 text-sm shadow hover:bg-slate-100"
        >
          <Minimize size={16} />
        </button>
      </div>
    </div>
  );
}

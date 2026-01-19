import { useRef, useState } from "react";
import type { ReactNode } from "react";
import { Minimize } from 'lucide-react';
import "./board.css";

interface BoardProps {
  children: ReactNode;
}

export default function Board({ children }: BoardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [panning, setPanning] = useState(false);
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
      <div
        className="board-inner"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
          transformOrigin: "0 0"
        }}
      >
        {children}
      </div>

      <div className="absolute bottom-4 right-4 z-10 flex flex-row gap-2">
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

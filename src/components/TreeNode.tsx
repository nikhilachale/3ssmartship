import type { TreeNode as Node } from "./Node.data";

interface Props {
  node: Node;
  level: number;
  isOpen: boolean;
  onToggle: () => void;
}

const levelStyles = [
  "bg-indigo-600 border-indigo-500 text-white", // level 0
  "bg-blue-600 border-blue-500 text-white",     // level 1
  "bg-red-500 border-red-400 text-white",       // level 2
  "bg-slate-800 border-slate-700 text-white",   // level 3
  "bg-emerald-600 border-emerald-500 text-white"
];

export default function TreeNode({
  node,
  level,
  isOpen,
  onToggle
}: Props) {
  return (
    <div
      className={`w-48 h-10 px-4 rounded-xl shadow-lg border-2
        flex items-center justify-between gap-3
        ${levelStyles[level] ?? "bg-slate-600 border-slate-500 text-white"}
      `}
    >
      {/* Label */}
      <span
        className="font-semibold text-sm truncate"
        title={node.label}
      >
        {node.label}
      </span>

      {/* Expand / Collapse */}
      {node.children && (
        <button
          onClick={onToggle}
          className={`w-5 h-5 flex items-center justify-center
            rounded-full border bg-white font-bold text-lg
            ${isOpen ? "text-blue-600" : "text-slate-400"}
          `}
        >
          {isOpen ? "−" : "+"}
        </button>
      )}
    </div>
  );
}
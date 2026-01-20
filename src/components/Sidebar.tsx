import { useState } from "react";
import { sidebarItems } from "./sidebar.data";
import { ChevronDown } from 'lucide-react';

type SidebarProps = {
  onSelect?: (id: string) => void;
  activeId?: string | null;
};

export default function Sidebar({ onSelect, activeId }: SidebarProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <aside className="h-screen flex justify-between flex-col min-w-max overflow-auto bg-white p-4">
      <div className="flex items-center border-b-2 border-gray-200 justify-center ">
        <h2 className="text-2xl font-bold mb-6">SMART SHIP <br /> SOLUTIONS</h2>
      </div>

      {sidebarItems.map(item => {
        const isOpen = openId === item.id;
        const hasChildren = !!item.children?.length;
        const isActive = activeId === item.id;

        return (
          <div key={item.id} className="">
            <button
              onClick={() => {
                if (hasChildren) {
                  toggle(item.id);
                } else {
                  onSelect?.(item.id);
                }
              }}
              className={`w-full flex justify-between text-gray-600 items-center px-3 py-2 hover:bg-slate-100 ${isActive ? "text-blue-600 font-bold" : ""}`}
            >
              <span className="font-medium">{item.label}</span>
              {hasChildren && <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />}
            </button>

            {hasChildren && isOpen && (
              <div className="mt-1 ml-4 space-y-1">
                {item.children!.map(child => (
                  <div
                    key={child.id}
                    className={`text-sm px-2 py-1 rounded cursor-pointer hover:bg-slate-100 ${activeId === child.id ? "bg-slate-200 font-bold" : ""}`}
                    onClick={() => onSelect?.(child.id)}
                  >
                    {child.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

      <div>
        <h1 className="font-bold text-3xl mb-2 mt-10 bg-linear-to-r from-blue-900 via-blue-500 to-blue-400 text-transparent bg-clip-text">
          Stream
        </h1>
        <p className="mb-2">
          <span className="font-extralight text-gray-500">powered by </span>
          <span className="text-blue-600 font-light text-xl">3</span>{" "}
          <span className="text-green-600 font-light text-xl">S</span>
          <span className="text-slate-900 font-light text-xl"> Smart Ship Solutions</span>
        </p>
        <p>version 0.0.1</p>
      </div>
    </aside>
  );
}
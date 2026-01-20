import  { useState } from "react";
import type { JSX } from "react";
import { sidebarItems } from "./sidebar.data";
import { ChevronDown, Grid, Calendar, Box, Clock, CardSim, Book, Users, List, Ship, Settings, CalendarDays } from 'lucide-react';

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
        const hasChildren = !!item.children?.length;
        const isChildActive = item.children?.some(
          child => child.id === activeId
        );
        const isActive = activeId === item.id || isChildActive;
        const isOpen = openId === item.id || isChildActive;
console.log(item.icon);
        // Map icon string to Lucide icon component
        const iconMap: Record<string, JSX.Element> = {
          grid: <Grid className="w-5 h-5 mr-2" />,
          calendar: <Calendar className="w-5 h-5 mr-2" />,
          'calendar-days': <CalendarDays className="w-5 h-5 mr-2" />,
          box: <Box className="w-5 h-5 mr-2" />,
          clock: <Clock className="w-5 h-5 mr-2" />,
          oil: <CardSim className="w-5 h-5 mr-2" />,
          book: <Book className="w-5 h-5 mr-2" />,
          users: <Users className="w-5 h-5 mr-2" />,
          list: <List className="w-5 h-5 mr-2" />,
          ship: <Ship className="w-5 h-5 mr-2" />,
          settings: <Settings className="w-5 h-5 mr-2" />,
        };

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
              className={`w-full flex justify-between items-center px-3 py-2 hover:bg-slate-100
  ${isActive ? "text-blue-600 font-bold" : "text-gray-500"}
`}
            >
              <span className="flex items-center font-medium">
                
                {iconMap[item.icon]}
                {item.label}
              </span>
              {hasChildren && <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />}
            </button>

            {hasChildren && isOpen && (
              <div className="mt-1 ml-4 space-y-1">
                {item.children!.map(child => (
                  <div
                    key={child.id}
                    className={`text-sm px-2 py-1 rounded cursor-pointer hover:bg-slate-100
  ${activeId === child.id
    ? "text-blue-600 font-bold bg-slate-100"
    : "text-gray-500"}
`}
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
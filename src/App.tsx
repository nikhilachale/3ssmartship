import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { sidebarItems } from "./components/sidebar.data";
function buildSidebarBreadcrumbs(
  activeId: string | null,
  items: any[]
) {
  if (!activeId) return [];

  for (const item of items) {
    if (item.id === activeId) {
      return [{ id: item.id, label: item.label }];
    }

    if (item.children) {
      const child = item.children.find((c: any) => c.id === activeId);
      if (child) {
        return [
          { id: item.id, label: item.label },
          { id: child.id, label: child.label }
        ];
      }
    }
  }

  return [];
}
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Treee } from "./components/Treee";

function App() {
  const [activeSidebar, setActiveSidebar] = useState<string | null>(null);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="basis-1/5 bg-slate-400">
        <Sidebar onSelect={setActiveSidebar} activeId={activeSidebar} />
      </div>

      {/* Main Canvas */}
      <div className="basis-4/5 bg-white  max-w-[78%] flex justify-between flex-col py-5 rounded-md">
        <div className="my-2 px-6">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="#"
              onClick={e => {
                e.preventDefault();
                setActiveSidebar(null);
              }}
            >
              Home
            </Link>

            {buildSidebarBreadcrumbs(activeSidebar, sidebarItems).map(
              (crumb, index, arr) =>
                index === arr.length - 1 ? (
                  <Typography key={crumb.id} color="text.primary">
                    {crumb.label}
                  </Typography>
                ) : (
                  <Link
                    key={crumb.id}
                    underline="hover"
                    color="inherit"
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                      setActiveSidebar(crumb.id);
                    }}
                  >
                    {crumb.label}
                  </Link>
                )
            )}
          </Breadcrumbs>
        </div>
        <div className="h-[90%] overflow-auto ">
          {activeSidebar === "fleet-management" ? (
            <Treee />
          ) : (
            <div className="text-center text-gray-400 text-2xl py-10">
              Coming soon
            </div>
          )}
        </div>
        {/* Footer */}
        <div >
          <p className="float-right mr-4 mt-2">
            <span className="text-blue-600 font-light text-sm">3</span>{" "}
            <span className="text-green-600 font-light text-sm">S</span>{" "}
            <span className="text-slate-900 font-light text-sm">
              Smart Ship Solutions © 2025
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
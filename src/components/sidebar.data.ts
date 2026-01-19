export interface SidebarItem {
  id: string;
  label: string;
  icon: string;
  children?: { id: string; label: string }[];
}


export const sidebarItems: SidebarItem[] = [
  { id: "dashboard", label: "Dashboard", icon: "grid" },

  {
    id: "planned-maintenance",
    label: "Planned Maintenance",
    icon: "calendar",
    children: [
      { id: "pms-jobs", label: "PMS Jobs" },
      { id: "maintenance-history", label: "Maintenance History" }
    ]
  },

  {
    id: "spares-inventory",
    label: "Spares Inventory",
    icon: "box",
    children: [
      { id: "spares-list", label: "Spares List" },
      { id: "stock-status", label: "Stock Status" }
    ]
  },

  {
    id: "machinery-hours",
    label: "Machinery Running Hrs",
    icon: "clock",
    children: [
      { id: "hour-logs", label: "Hour Logs" },
      { id: "usage-summary", label: "Usage Summary" }
    ]
  },

  {
    id: "lube-oil",
    label: "Lube Oil Summary",
    icon: "oil",
    children: [
      { id: "consumption", label: "Consumption" },
      { id: "reports", label: "Reports" }
    ]
  },

  {
    id: "library",
    label: "Library",
    icon: "book",
    children: [
      { id: "manuals", label: "Manuals" },
      { id: "documents", label: "Documents" }
    ]
  },

  { id: "pms-calendar", label: "PMS Calender", icon: "calendar-days" },

  {
    id: "user-management",
    label: "User Management Roles",
    icon: "users",
    children: [
      { id: "users", label: "Users" },
      { id: "roles", label: "Roles" }
    ]
  },

  {
    id: "reports",
    label: "Reports",
    icon: "list",
    children: [
      { id: "fleet-reports", label: "Fleet Reports" },
      { id: "maintenance-reports", label: "Maintenance Reports" }
    ]
  },

  { id: "fleet-management", label: "Fleet Management", icon: "ship" },

  {
    id: "settings",
    label: "Settings",
    icon: "settings",
    children: [
      { id: "general-settings", label: "General" },
      { id: "preferences", label: "Preferences" }
    ]
  }
];



# 3ssmartship

## 🚀 Live Demo

[https://3ssmartship-one.vercel.app/](https://3ssmartship-one.vercel.app/)

## How to Run the Project

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to the local server URL (usually [http://localhost:5173](http://localhost:5173)).

## Component Structure

The main components are located in the `src/` directory:

- **App.tsx**: Root component that sets up the main layout and routing.
- **components/**
  - **Board.tsx**: Main board UI, likely for displaying nodes or tasks.
  - **HierarchyBreadcrumbs.tsx**: Breadcrumb navigation for hierarchy.
  - **Sidebar.tsx**: Sidebar navigation or controls.
  - **Render.tsx**: Tree structure visualization.
  - **TreeNode.tsx**: Individual node in the tree.
   - **Node.data.ts**: Contains the TypeScript interface and sample data structure for hierarchical nodes used in the board and tree components.
   - **sidebar.data.ts**: Defines the structure and content of the sidebar menu, including all parent and child navigation items and their metadata (labels, icons, etc).


## Key Assumptions and Trade-offs

- The project uses Vite for fast development and build times.
- TypeScript is used throughout for type safety and maintainability.
- Sidebar items and node data are statically defined in data files for simplicity; dynamic fetching or backend integration is not implemented.
- The component structure assumes a board/tree-based UI for managing hierarchical data.
- Lucide icons are used for sidebar navigation for a modern, consistent look.
- Some UI/UX and data structures are simplified for demonstration and may need further refinement for production use.
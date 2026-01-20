
# 3ssmartship

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
- **Board.tsx**: Main board UI, likely for displaying nodes or tasks.
- **HierarchyBoard.tsx**: Handles hierarchical board views.
- **NodeColumn.tsx**: Represents columns of nodes in the board.
- **components/**
  - **HierarchyBreadcrumbs.tsx**: Breadcrumb navigation for hierarchy.
  - **Sidebar.tsx**: Sidebar navigation or controls.
  - **Treee.tsx**: Tree structure visualization.
  - **TreeNode.tsx**: Individual node in the tree.
  - **Node.data.ts**: Data definitions for nodes.
  - **sidebar.data.ts**: Data for sidebar items.

## Trade-offs or Assumptions

- The project uses Vite for fast development and build times.
- TypeScript is used for type safety and maintainability.
- The component structure assumes a board/tree-based UI for managing hierarchical data.
- Some files (e.g., `Treee.tsx`) may be typos or experimental; review and rename as needed.
- Unused template files and comments have been removed for clarity.

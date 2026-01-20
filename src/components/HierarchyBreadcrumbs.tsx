
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import type { TreeNode } from "../components/Node.data";

/* -------- helper: find node by id -------- */
function findNodeById(root: TreeNode, id: string): TreeNode | null {
  if (root.id === id) return root;
  if (!root.children) return null;

  for (const child of root.children) {
    const found = findNodeById(child, id);
    if (found) return found;
  }
  return null;
}

/* -------- build breadcrumb path from openMap -------- */
function buildBreadcrumbPath(
  root: TreeNode,
  openMap: Record<number, string | null>
) {
  const path: TreeNode[] = [];

  Object.keys(openMap)
    .map(Number)
    .sort((a, b) => a - b)
    .forEach(level => {
      const id = openMap[level];
      if (!id) return;

      const node = findNodeById(root, id);
      if (node) path.push(node);
    });

  return path;
}

/* -------- component -------- */
type Props = {
  root: TreeNode;
  openMap: Record<number, string | null>;
  onCrumbClick?: (level: number, nodeId: string) => void;
};

export default function HierarchyBreadcrumbs({
  root,
  openMap,
  onCrumbClick
}: Props) {
  const crumbs = buildBreadcrumbPath(root, openMap);

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
      {crumbs.map((node, index) =>
        index === crumbs.length - 1 ? (
          <Typography key={node.id} sx={{ color: "text.primary" }}>
            {node.label}
          </Typography>
        ) : (
          <Link
            key={node.id}
            underline="hover"
            color="inherit"
            href="#"
            onClick={e => {
              e.preventDefault();
              onCrumbClick?.(index, node.id);
            }}
          >
            {node.label}
          </Link>
        )
      )}
    </Breadcrumbs>
  );
}
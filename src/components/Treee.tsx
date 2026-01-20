import { useState, useRef } from "react";
import Board from "../Board";

import TreeNode from "./TreeNode";
import { treeData, type TreeNode as Node } from "./Node.data";
type OpenMap = Record<number, string | null>;

function buildColumns(root: Node, openMap: OpenMap): Node[][] {
  const columns: Node[][] = [];
  let currentNodes: Node[] = [root];
  let level = 0;

  while (currentNodes.length) {
    columns.push(currentNodes);

    const activeId = openMap[level];
    const activeNode = currentNodes.find(n => n.id === activeId);

    if (!activeNode || !activeNode.children) break;

    currentNodes = activeNode.children;
    level++;
  }

  return columns;
}

export function Treee(){

     const [openMap, setOpenMap] = useState<OpenMap>({
        0: treeData.id
      });
    
      const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});
      const boardRef = useRef<HTMLDivElement | null>(null);
    
      const columns = buildColumns(treeData, openMap);
    
      const connections: { fromId: string; toId: string }[] = [];
    
      for (let lvl = 0; lvl < columns.length - 1; lvl++) {
        const parentId = openMap[lvl];
        if (!parentId) continue;
    
        const parentNode = columns[lvl].find(n => n.id === parentId);
        if (!parentNode?.children) continue;
    
        for (const child of parentNode.children) {
          connections.push({
            fromId: parentNode.id,
            toId: child.id
          });
        }
      }
return(
    < >
     <Board>
          <div
            ref={boardRef}
            className="relative w-full   h-full min-h-full"
          >
            <svg
              className="absolute inset-0 pointer-events-none z-10"
              width={boardRef.current?.scrollWidth || "100%"}
              height={boardRef.current?.scrollHeight || "100%"}
            >
              {connections.map(({ fromId, toId }) => {
                const fromEl = nodeRefs.current[fromId];
                const toEl = nodeRefs.current[toId];
                if (!fromEl || !toEl) return null;

                const fromRect = fromEl.getBoundingClientRect();
                const toRect = toEl.getBoundingClientRect();

                const boardRect = boardRef.current!.getBoundingClientRect();

                const startX = fromRect.right - boardRect.left;
                const startY =
                  fromRect.top - boardRect.top + fromRect.height / 2;

                const endX = toRect.left - boardRect.left;
                const endY =
                  toRect.top - boardRect.top + toRect.height / 2;

                return (
                  <path
                    key={`${fromId}-${toId}`}
                    d={`M ${startX} ${startY}
                        C ${startX + 80} ${startY},
                          ${endX - 80} ${endY},
                          ${endX} ${endY}`}
                    stroke="#CBD5E1"
                    strokeWidth="2"
                    fill="none"
                  />
                );
              })}
            </svg>
            <div className="relative z-20 flex gap-28 items-start px-10">
              {columns.map((nodes, level) => (
                <div key={level} className="relative flex flex-col gap-6">
                  {nodes.map(node => (
                    <div
                      key={node.id}
                      ref={el => {
                        nodeRefs.current[node.id] = el;
                      }}
                    >
                      <TreeNode
                        node={node}
                        level={level}
                        isOpen={openMap[level] === node.id}
                        onToggle={() =>
                          setOpenMap(prev => ({
                            ...prev,
                            [level]:
                              prev[level] === node.id ? null : node.id,
                            [level + 1]: null
                          }))
                        }
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Board>
        </>
)
}
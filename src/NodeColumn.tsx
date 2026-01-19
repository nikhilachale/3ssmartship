interface Props {
  title: string;
  nodes: string[];
}

export function NodeColumn({ title, nodes }: Props) {
  return (
    <div className="w-64">
      <h3 className="mb-4 font-semibold text-slate-700">{title}</h3>
      <div className="space-y-3">
        {nodes.map(n => (
          <div
            key={n}
            className="rounded-lg border bg-white px-4 py-2 shadow-sm"
          >
            {n}
          </div>
        ))}
      </div>
    </div>
  );
}

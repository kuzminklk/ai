const nodes = [
  { id: "n1", x: 64, y: 92, r: 5, lit: false },
  { id: "n2", x: 190, y: 46, r: 6, lit: true },
  { id: "n3", x: 330, y: 78, r: 5, lit: false },
  { id: "n4", x: 430, y: 150, r: 5, lit: false },
  { id: "n5", x: 158, y: 168, r: 7, lit: true },
  { id: "n6", x: 290, y: 190, r: 5, lit: false },
  { id: "n7", x: 404, y: 268, r: 6, lit: true },
  { id: "n8", x: 92, y: 246, r: 5, lit: false },
  { id: "n9", x: 226, y: 312, r: 6, lit: false },
  { id: "n10", x: 348, y: 348, r: 5, lit: false },
  { id: "n11", x: 128, y: 392, r: 5, lit: true },
  { id: "n12", x: 264, y: 432, r: 5, lit: false },
];

const edges: [string, string][] = [
  ["n1", "n2"],
  ["n2", "n3"],
  ["n3", "n4"],
  ["n2", "n5"],
  ["n5", "n6"],
  ["n6", "n3"],
  ["n6", "n4"],
  ["n6", "n7"],
  ["n5", "n8"],
  ["n8", "n9"],
  ["n9", "n6"],
  ["n9", "n10"],
  ["n7", "n10"],
  ["n9", "n11"],
  ["n11", "n12"],
  ["n12", "n10"],
];

const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

export default function NetworkGraphic() {
  return (
    <div className="relative w-full max-w-[480px]">
      <svg
        viewBox="0 0 500 500"
        className="dc-network h-auto w-full"
        role="img"
        aria-label="Illustration of a connected network of systems"
      >
        <g stroke="#10131A" strokeOpacity="0.22" strokeWidth="1.4">
          {edges.map(([a, b], i) => {
            const from = byId[a];
            const to = byId[b];
            return (
              <line
                key={`${a}-${b}`}
                className="dc-edge"
                style={{ animationDelay: `${140 + i * 70}ms` }}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
              />
            );
          })}
        </g>

        {nodes.map((n, i) => (
          <circle
            key={n.id}
            className="dc-node"
            style={{ animationDelay: `${600 + i * 60}ms` }}
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.lit ? "#F4C10F" : "#FFFFFF"}
            stroke={n.lit ? "#D9A404" : "#10131A"}
            strokeOpacity={n.lit ? 1 : 0.35}
            strokeWidth={n.lit ? 0 : 1.4}
          />
        ))}
      </svg>

      <style>{`
        .dc-edge {
          stroke-dasharray: 220;
          stroke-dashoffset: 220;
          animation: dc-draw 900ms ease-out forwards;
        }
        .dc-node {
          opacity: 0;
          transform-origin: center;
          transform: scale(0.4);
          animation: dc-pop 500ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        @keyframes dc-draw {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes dc-pop {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .dc-edge,
          .dc-node {
            animation: none;
            stroke-dashoffset: 0;
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}

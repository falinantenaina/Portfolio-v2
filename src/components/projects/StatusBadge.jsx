const statusStyle = {
  "En ligne": { text: "#4ade80" },
  Livré: { text: "#94a3b8" },
  Archivé: { text: "#444" },
};

export const StatusBadge = ({ status }) => {
  const s = statusStyle[status] || statusStyle["Archivé"];
  return (
    <span
      className="inline-flex items-center gap-1.5 font-mono text-[10px] px-2 py-0.5 rounded border"
      style={{
        color: s.text,
        borderColor: s.text + "30",
        background: s.text + "0a",
      }}
    >
      {status === "En ligne" && (
        <span
          className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
          style={{ background: s.text }}
        />
      )}
      {status}
    </span>
  );
};

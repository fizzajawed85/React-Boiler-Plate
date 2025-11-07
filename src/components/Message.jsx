export default function Message({ text, type = "info" }) {
  const color =
    type === "success"
      ? "bg-green-100 text-green-700 border-green-300"
      : type === "error"
      ? "bg-red-100 text-red-700 border-red-300"
      : "bg-blue-100 text-blue-700 border-blue-300";

  return (
    <div className={`p-3 border rounded-md ${color}`}>
      <p className="font-medium">{text}</p>
    </div>
  );
}

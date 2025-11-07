export default function Radio({ label, name }) {
  return (
    <label className="inline-flex items-center space-x-2 cursor-pointer">
      <input
        type="radio"
        name={name}
        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
}

export default function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-gray-700 mb-1">{label}</label>
      <input
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
        {...props}
      />
    </div>
  );
}

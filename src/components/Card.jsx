export default function Card({ title, description, icon, children }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-blue-600">{title}</h3>
        {icon && <div className="text-2xl text-blue-500">{icon}</div>}
      </div>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      {children && <div>{children}</div>}
    </div>
  );
}

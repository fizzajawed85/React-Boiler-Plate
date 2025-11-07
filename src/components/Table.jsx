export default function Table() {
  const data = [
    { id: 1, name: "John Doe", email: "john@gmail.com", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@gmail.com", status: "Inactive" },
    { id: 3, name: "Ali Khan", email: "ali@gmail.com", status: "Active" },
  ];

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-md">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="border-t hover:bg-blue-50">
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td
                className={`px-4 py-2 font-medium ${
                  user.status === "Active" ? "text-green-600" : "text-red-500"
                }`}
              >
                {user.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

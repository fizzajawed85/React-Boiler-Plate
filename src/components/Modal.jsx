import Button from "./Button";

export default function Modal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-96">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">Modal Title</h3>
        <p className="text-gray-700 mb-6">This is a modal message box with smooth Tailwind styling.</p>
        <div className="text-right">
          <Button text="Close" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

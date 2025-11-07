import Input from "./Input";
import Button from "./Button";

export default function FormGrid() {
  return (
    <form className="bg-white rounded-xl shadow-md p-6 grid md:grid-cols-2 gap-4">
      <Input label="First Name" placeholder="John" />
      <Input label="Last Name" placeholder="Doe" />
      <Input label="Email" type="email" placeholder="john@example.com" />
      <Input label="Phone" placeholder="+92 300 1234567" />
      <div className="col-span-2">
        <Button text="Submit" />
      </div>
    </form>
  );
}

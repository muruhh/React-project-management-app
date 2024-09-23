import Button from "./Button";

export default function Sidebar({ onAddProject }) {
  return (
    <aside className="h-screen bg-gray-800 w-1/4 p-10 rounded-r-xl rounded-br-none">
      <h2 className="font-bold text-slate-300 text-3xl">Projects</h2>
      <Button clickHandler={onAddProject}>+Add Project</Button>
    </aside>
  );
}

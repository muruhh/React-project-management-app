import Button from "./Button";

export default function Sidebar() {
  return (
    <aside className="h-screen bg-gray-800 w-1/4 p-10 rounded-r-xl rounded-br-none">
      <h2 className="font-bold text-slate-300 text-3xl">Projects</h2>
      <Button
        classes={
          "font-bold p-3 rounded-lg mt-6 bg-blue-700 text-white cursor-pointer drop-shadow hover:bg-blue-500 transition-all"
        }
      >
        +Add Project
      </Button>
    </aside>
  );
}

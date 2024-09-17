import NoProjectsLogo from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjects() {
  return (
    <div className="h-screen w-screen place-content-center text-center">
      <img
        className="w-auto h-20 object-contain mx-auto"
        src={NoProjectsLogo}
      />
      <h2 className="mt-3">No Projects to be displayed yet</h2>
      <p className="mt-3">Add your first project</p>
      <Button
        classes={
          "font-bold p-3 rounded-lg mt-6 bg-blue-700 text-white cursor-pointer drop-shadow hover:bg-blue-500 transition-all"
        }
      >
        +Add Project
      </Button>
    </div>
  );
}

import NoProjectsLogo from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjects() {
  return (
    <div className="h-screen w-screen place-content-center text-center">
      <img
        className="w-auto h-20 object-contain mx-auto"
        src={NoProjectsLogo}
      />
      <h2 className="mt-3 font-bold text-gray-700 text-2xl">
        No Project Selected
      </h2>
      <p className="mt-3 text-gray-600 text-md">
        Select a project or Add a new one
      </p>
      <Button>+Add Project</Button>
    </div>
  );
}

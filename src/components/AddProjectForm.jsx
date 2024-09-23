import Button from "./Button";

export default function AddProjectForm({ onSaveProject, onCancelProject }) {
  return (
    <div className="h-screen w-screen place-content-center">
      <div className="w-3/4 flex flex-col mx-auto backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        <label className="text-sm font-bold uppercase text-stone-500 mb-2">
          Name
        </label>
        <input
          className="w-full p-2 rounded-lg shadow-sm mb-8 text-sm"
          type="text"
          name="project-name"
          placeholder="Project Name"
        />

        <label className="text-sm font-bold uppercase text-stone-500 mb-2">
          Description
        </label>

        <textarea
          rows="8"
          className="w-full p-2 rounded-lg shadow-sm mb-8 text-sm"
          name="description"
          placeholder="Project Description"
        ></textarea>

        <div className="flex place-content-center">
          <Button
            clickHandler={onSaveProject}
            extraClasses="w-1/3 mx-2 text-sm"
          >
            Save
          </Button>
          <Button
            clickHandler={onCancelProject}
            extraClasses="mx-2 bg-red-500 text-sm hover:bg-red-400"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

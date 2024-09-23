import { useRef, useState } from "react";
import Button from "./Button";

export default function AddProjectForm({ onSaveProject, onCancelProject }) {
  const title = useRef();
  const desc = useRef();
  const [formErrors, setFormErrors] = useState({});

  function handleSave(title, desc) {
    if (title.length < 3 || desc.length < 3) {
      if (title.length < 3) {
        var titleError = "`Name` field length must be more than 3 letters";
      }

      if (desc.length < 3) {
        var descError =
          "`Description` field length must be more than 3 letters";
      }

      setFormErrors(() => {
        return {
          titleError: titleError,
          descError: descError,
        };
      });
    } else {
      setFormErrors({});
      onSaveProject(title, desc);
    }
  }

  return (
    <div className="h-screen w-screen place-content-center">
      <div className="w-3/4 flex flex-col mx-auto backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        <label className="text-sm font-bold uppercase text-stone-500 mb-2">
          Name
        </label>
        <input
          ref={title}
          className="w-full p-2 rounded-lg shadow-sm mb-8 text-sm"
          type="text"
          name="project-name"
          placeholder="Project Name"
        />

        {formErrors.titleError ? (
          <p className="mb-8 text-red-600 text-xs font-semibold">
            {formErrors.titleError}
          </p>
        ) : undefined}

        <label className="text-sm font-bold uppercase text-stone-500 mb-2">
          Description
        </label>

        <textarea
          ref={desc}
          rows="8"
          className="w-full p-2 rounded-lg shadow-sm mb-2 text-sm"
          name="description"
          placeholder="Project Description"
        ></textarea>

        {formErrors.descError ? (
          <p className="mb-8 text-red-600 text-xs font-semibold">
            {formErrors.descError}
          </p>
        ) : undefined}

        <div className="flex place-content-center">
          <Button
            clickHandler={() => {
              handleSave(title.current.value, desc.current.value);
            }}
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

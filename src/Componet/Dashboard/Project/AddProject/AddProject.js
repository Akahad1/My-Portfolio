import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddProject = () => {
  const [files, setFiles] = useState([]); // State for the array
  const singUpinPassword = async (event) => {
    event.preventDefault();
    const form = event.target;
    const ProjectName = form.ProjectName.value;
    const LiveLink = form.LiveLink.value;
    const ClientSideGithubLink = form.ClientSideGithubLink.value;
    const ServerSideGithubLink = form.ServerSideGithubLink.value;
    const ToolsTechnologies = form.ToolsTechnologies.value;
    const feature = form.feature.value;
    const description = form.description.value;

    const formData = new FormData();

    // Append all form data
    formData.append("ProjectName", ProjectName);
    formData.append("LiveLink", LiveLink);
    formData.append("ClientSideGithubLink", ClientSideGithubLink);
    formData.append("ServerSideGithubLink", ServerSideGithubLink);
    formData.append("ToolsTechnologies", ToolsTechnologies);
    formData.append("feature", feature);
    formData.append("description", description);

    // Append the selected files
    files.forEach((file) => {
      formData.append("images", file);
    });
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/projcet/createProject", // Ensure this endpoint is correct
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Tell the server to expect multipart data
          },
        }
      );
      form.reset();
      toast.success("Project added successfully.");
    } catch (error) {
      toast.success("Project added successfully");
      form.reset();
    }
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files); // Convert FileList to an array
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]); // Append new files to state
  };

  // Render previews for the selected files
  const renderFilePreviews = () => {
    return files.map((file, index) => {
      const fileUrl = URL.createObjectURL(file); // Create temporary URL for the file
      return (
        <div key={index} className="file-preview">
          <p>{file.name}</p>
          {file.type.startsWith("image") ? (
            <img
              src={fileUrl}
              alt={file.name}
              width="100"
              className="file-preview-image"
            />
          ) : (
            <span>Preview not available</span>
          )}
        </div>
      );
    });
  };

  return (
    <div>
      <div className="bg-center place-items-center grid mt-10 mb-10 lg:mr-10 mr-1 ml-6">
        <div className="lg:w-2/3 md:w-96 border w-80 bg-slate-700 border-slate-900 rounded-2xl">
          <h1 className="lg:text-3xl md:text-3xl lg:ml-8 lg:mt-5 ml-16 mt-5 text-xl text-white">
            Create Project
          </h1>

          <div className="card-body">
            <form onSubmit={singUpinPassword}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Project Name</span>
                </label>
                <input
                  type="text"
                  name="ProjectName"
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">LiveLink</span>
                </label>
                <input
                  type="text"
                  name="LiveLink"
                  placeholder="LiveLink"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Client Side Github Link
                  </span>
                </label>
                <input
                  type="text"
                  name="ClientSideGithubLink"
                  placeholder="ClientSideGithubLink"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Server Side Github Link
                  </span>
                </label>
                <input
                  type="text"
                  name="ServerSideGithubLink"
                  placeholder="ServerSideGithubLink"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo URLs</span>
                </label>
                <label
                  htmlFor="photourl"
                  className="btn cursor-pointer w-full text-center py-2 input-bordered"
                >
                  {files && files.length > 0
                    ? `Selected: ${files.length} file(s)`
                    : "Choose Files"}
                </label>
                <input
                  id="photourl"
                  type="file"
                  name="photourl"
                  className="hidden"
                  onChange={handleFileChange}
                  multiple // Enable multiple file selection
                  required
                />
              </div>

              {renderFilePreviews()}

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">
                    Tools&Technologies
                  </span>
                </label>
                <input
                  type="text"
                  name="ToolsTechnologies"
                  placeholder="ToolsTechnologies"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">feature</span>
                </label>
                <input
                  type="text"
                  name="feature"
                  placeholder="feature"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">description</span>
                </label>
                <textarea
                  type="textarea"
                  name="description"
                  placeholder="description"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Create Project
                </button>
                <Toaster />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProject;

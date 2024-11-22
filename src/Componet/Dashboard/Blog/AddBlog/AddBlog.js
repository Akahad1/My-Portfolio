import axios from "axios";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const AddBlog = () => {
  // State for the array
  const singUpinPassword = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;

    const description = form.description.value;

    const formData = new FormData();

    // Append all form data
    formData.append("title", title);

    formData.append("description", description);

    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/blog/createblog", // Ensure this endpoint is correct
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Tell the server to expect multipart data
          },
        }
      );
      form.reset();
      toast.success("skils added successfully.");
    } catch (error) {
      toast.success("skils added successfully");
      form.reset();
    }
  };

  // Render previews for the selected files

  return (
    <div>
      <div className="bg-center  place-items-center grid mt-10 mb-10 lg:mr-10 mr-1 ml-6">
        <div className="lg:w-2/3 md:w-96 border w-80 bg-slate-700 border-slate-900 rounded-2xl">
          <h1 className="lg:text-3xl md:text-3xl lg:ml-8 lg:mt-5 ml-16 mt-5 text-xl text-white">
            Create Blog
          </h1>

          <div className="card-body">
            <form onSubmit={singUpinPassword}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
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
                  Create Blog
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

export default AddBlog;

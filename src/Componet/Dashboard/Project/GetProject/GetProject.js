import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const GetProject = () => {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/projcet");
      const data = await response.json();
      setItems(data?.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  //   const ProjectData = useLoaderData();
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/projcet/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Remove item locally
        toast.error("Failed to delete item");
      } else {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        toast.success("Item deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);
  return (
    <div>
      <div className="overflow-x-auto rounded-lg shadow-lg p-4 mt-5 mx-3">
        <div className="flex items-center justify-center h-screen">
          <table className="table-auto w-full text-left border-collapse">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Live Link</th>
                <th className="px-4 py-3 text-center">Delete</th>
              </tr>
            </thead>
            <tbody className="bg-gray-100">
              {items.map((porject, i) => (
                <tr
                  key={i}
                  className=" text-white hover:bg-slate-800 bg-slate-900 border border-slate-600 transition duration-200 ease-in-out"
                >
                  <td className="px-4 py-3 text-white ">{i + 1}</td>
                  <td className="px-4 py-3 text-white">
                    {porject?.ProjectName}
                  </td>
                  <td className="px-4 py-3 text-white">{porject?.LiveLink}</td>
                  <td className="px-4 py-3 text-center">
                    <button
                      onClick={() => deleteItem(porject._id)}
                      className="btn btn-secondary bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                      Delete
                    </button>
                    <Toaster />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GetProject;

import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const GetSkills = () => {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/skill");
      const data = await response.json();
      setItems(data?.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  //   const ProjectData = useLoaderData();
  const deleteItem = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/skill/${id}`, {
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
      <div className="overflow-x-auto flex items-center justify-center h-screen mt-5 bg-gradient-to-b from-black to-gray-800 mr-3">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th> Name</th>
              <th>Description</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((skill, i) => (
              <tr key={i}>
                <th>{i + 1}</th>

                <td>{skill?.name}</td>
                <td>{skill?.description?.slice(0, 20)}</td>
                <td>
                  <button
                    onClick={() => deleteItem(skill._id)}
                    className="btn btn-secondary"
                  >
                    Delete
                  </button>
                  <Toaster></Toaster>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GetSkills;

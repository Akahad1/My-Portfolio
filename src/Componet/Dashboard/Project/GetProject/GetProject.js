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
      <div className="overflow-x-auto mt-5 flex items-center justify-center h-screen bg-gradient-to-b from-black to-gray-800 mr-3">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Project Name</th>
              <th>Live Link</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((order, i) => (
              <tr key={i}>
                <th>{i + 1}</th>

                <td>{order.ProjectName}</td>
                <td>{order.LiveLink}</td>
                <td>
                  <button
                    onClick={() => deleteItem(order._id)}
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

export default GetProject;

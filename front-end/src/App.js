import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    id: "",
    name: "",
    created_at: "",
    status: "",
    description: "",
    price: "",
    qty: "",
  });

  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    created_at: "",
    status: "",
    description: "",
    price: "",
    qty: "",
  });

  const [editDataId, setEditDataId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    // Fetch data from your API endpoint
    fetch("http://127.0.0.1:5000/product")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newData = {
      name: addFormData.name,
      created_at: addFormData.created_at,
      status: addFormData.status,
      description: addFormData.description,
      price: addFormData.price,
      qty: addFormData.qty,
    };

    // Sending POST request to API
    fetch("http://127.0.0.1:5000/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        setContacts([...contacts, responseData]);
        setShowAddForm(false);
      })
      .catch((error) => console.error("Error adding data:", error));

    // Clear the form data
    setAddFormData({
      name: "",
      created_at: "",
      status: "",
      description: "",
      price: "",
      qty: "",
    });
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      name: editFormData.name,
      created_at: editFormData.created_at,
      status: editFormData.status,
      description: editFormData.description,
      price: editFormData.price,
      qty: editFormData.qty,
    };

    // Sending PATCH request to API
    fetch(`http://127.0.0.1:5000/product/${editDataId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedContact),
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Update the contacts state with the edited data
        const updatedContacts = contacts.map((data) =>
          data.id === editDataId ? responseData : data
        );
        setContacts(updatedContacts);
        setEditDataId(null);
      })
      .catch((error) => console.error("Error editing data:", error));

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editDataId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditDataId(null);
  };

  const handleEditClick = (event, data) => {
    event.preventDefault();
    setEditDataId(data.id);

    const formValues = {
      name: data.name,
      created_at: data.data,
      status: data.status,
      description: data.description,
      price: data.price,
      qty: data.qty,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditDataId(null);
  };

  //DELETING DATA
  const handleDeleteClick = (dataId) => {
    // Sending DELETE request to API
    fetch(`http://127.0.0.1:5000/product/${dataId}`, {
      method: "DELETE",
    })
      .then(() => {
        // Remove the deleted data from the contacts state
        const updatedContacts = contacts.filter((data) => data.id !== dataId);
        setContacts(updatedContacts);
      })
      .catch((error) => console.error("Error deleting data:", error));
  };

  return (
    <div className="app-container">
      <div className="add-data-button">
        <button
          style={{ fontSize: "16px", padding: "10px 20px" }}
          onClick={() => setShowAddForm(!showAddForm)}
        >
          Add Data
        </button>
      </div>

      {/* ADD DATA */}
      {showAddForm && (
        <form onSubmit={handleAddFormSubmit}>
          <input
            type="text"
            name="name"
            required="required"
            placeholder="name..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="created_at"
            required="required"
            placeholder="created at..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="status"
            required="required"
            placeholder="status..."
            onChange={handleAddFormChange}
          />
          <input
            type="text"
            name="description"
            required="required"
            placeholder="description..."
            onChange={handleAddFormChange}
          />
          <input
            type="float"
            name="price"
            required="required"
            placeholder="price..."
            onChange={handleAddFormChange}
          />
          <input
            type="number"
            name="qty"
            required="required"
            placeholder="quantity..."
            onChange={handleAddFormChange}
          />
          <button type="submit">Add</button>
        </form>
      )}

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Created at</th>
              <th>Status</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((data) => (
              <Fragment>
                {editDataId === data.id ? (
                  <EditableRow
                    contact={data}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={data}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default App;

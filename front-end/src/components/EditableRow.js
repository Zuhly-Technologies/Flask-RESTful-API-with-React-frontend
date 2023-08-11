import React from "react";

const EditableRow = ({
  contact,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a naame..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="created at..."
          name="created_at"
          value={editFormData.created_at}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="status..."
          name="status"
          value={editFormData.status}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="description..."
          name="description"
          value={editFormData.description}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="float"
          required="required"
          placeholder="price..."
          name="price"
          value={editFormData.price}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="quantity..."
          name="qty"
          value={editFormData.qty}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;

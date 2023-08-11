import React from "react";

const ReadOnlyRow = ({ product, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.created_at}</td>
      <td>{product.status}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>{product.qty}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, product)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(product.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;

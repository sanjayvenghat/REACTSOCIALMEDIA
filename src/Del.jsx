import { useParams } from "react-router-dom";
const Del = ({ arr, handleDelete,handleEdit }) => {
  let { ids } = useParams();
  let filter = arr.filter((val) => {
    console.log(typeof val.id);
    return Number(val.id) === Number(ids);
  });

  return (
    <div className="delete">
      {filter.map((val) => (
        <div>
          <h2>{val.title}</h2>
          <p>{val.date}</p>
          <p>{val.content}</p>
          <button className="DELS" onClick={() => handleDelete(val.id)} 
          style={{
            marginRight:"10px"
          }}>
            Delete
          </button> 
          <button className="DELS" onClick={()=>handleEdit(val.id)}>EDIT</button>
        </div>
      ))}
    </div>
  );
};

export default Del;

import { Axios } from "./axios/api";
import { useEffect, useState } from "react";
import ListState from "./component/ListState";
import Form from "./component/Form";
function App() {
  const [title, setTitle] = useState([]);
  useEffect(() => {
    const Fetching = async () => {
      try {
        const request = await Axios.get("/task");
        setTitle(request.data.tasks);
      } catch (err) {
        console.log(err.message);
      }
    };
    Fetching();
  }, []);
  const childValue = async (fromChild) => {
    try {
      const postrequest = await Axios.post("/task", fromChild);

      setTitle([...title, postrequest.data.tasks]);
    } catch (err) {
      console.log(err.message);
    }
  };
  const deleteHandler = async (id) => {
    // console.log(id)
    try {
      await Axios.delete(`/task/${id}`);
      const response = title.filter((book) => {
        return book._id !== id;
      });
      setTitle(response);
    } catch (err) {
      console.log(err.message);
    }
  };
  const editHandler = async (fromChild) => {
    try {
      const response = await Axios.put(`/task/${fromChild.id}`, {
        title: fromChild.title,
        // compelete: fromChild.compelete,
      });
      
      const update = title.map((title) => {
        if (title._id === response.data.task._id) {
          return {
            ...title,
            title: response.data.task.title,
            // complete: response.data.task.compelete,
          };
        }
        return title;
      });
      setTitle(update);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div >
        <p className="bg-white p-2 text-gray-500  font-default text-[30px]">MERN Todo</p>
      <Form Value={childValue} />
      <ListState value={title} onDelete={deleteHandler} onEdit={editHandler} />
    </div>
  );
}

export default App;

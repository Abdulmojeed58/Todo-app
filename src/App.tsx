import { useEffect } from "react";
import "./App.css";
import Main from "./MainApp";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getData, sendData } from "./store/task-action";


let isInitial = true

function App() {
  const taskItem = useAppSelector(state => state.tasks)
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getData())
      
  }, [dispatch]);

  useEffect(()=>{
    if(isInitial) {
      isInitial = false;
      return;
    }

    ///
    dispatch(sendData(taskItem.items[0]))

  }, [dispatch])

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;

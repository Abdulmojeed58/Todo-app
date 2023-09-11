import { useEffect } from "react";
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

    if(taskItem.items.length === 0) {
      return
    }

    ///
    dispatch(sendData(taskItem.items[0]))

  }, [taskItem.items, dispatch])

  return (
    <div className="px-[2rem] sm:px-[2.5rem] md:px-[80px] min-h-screen pt-[1rem]">
      <Main />
    </div>
  );
}

export default App;

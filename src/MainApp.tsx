import { LazyLoadImage } from "react-lazy-load-image-component";


import Button from "./components/Button";
import Nav from "./components/Nav";
import Add from "./assets/icons/Icon (3).svg";
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";
import TaskDetails from "./components/TaskDetails";
import { useAppDispatch, useAppSelector } from "./hooks";
import { taskActions } from "./store/taskSlice";
import CalendarCom from "./components/Calendar";

const Main = () => {
  // const [isNewTask] = useState<boolean>(false);
  const isNewTask = useAppSelector((state) => state.tasks.isNewTask);
  const isEditTask = useAppSelector((state) => state.tasks.isEditTask);
  const isViewTask = useAppSelector((state) => state.taskView.isViewTask);
  const taskItem = useAppSelector((state) => state.taskView.taskItem);
  const dispatch = useAppDispatch();

  return (
    <div className="pb-[50px]">
      <header>
        <Nav />
        <div className="flex justify-between items-center my-5 px-[32px]">
          <div>
            <h1 className="font-semibold text-[30px]">Good Morning!</h1>
            <p className="font-normal text-[16px]">You got some task to do.</p>
          </div>
          <Button
            label={
              <>
                <LazyLoadImage src={Add} alt="add" />
                <p>Create New Task</p>
              </>
            }
            onClick={() => dispatch(taskActions.changeTaskStatus(true))}
            variant="contained"
            type="button"
            customClassName="hidden sm:block"
          />
        </div>
      </header>

      <main className="px-[32px] md:grid grid-cols-3 md:gap-[24px]">
        <div className="col-span-2">
          <h3 className="mb-3 text-skin-text-primary font-semibold text-[16px]">
            My Tasks
          </h3>
          <Tasks />
        </div>
        <div className="md:border-l-[1px] border-skin-border-gray md:pl-[24px]">
          {/* {isViewTask ? (
            <TaskDetails {...taskItem} />
          ) : isNewTask || isEditTask ? (
            <TaskForm />
          ) : (
            <Calendar />
          )} */}
          {isViewTask && <TaskDetails {...taskItem} />}
          {!isViewTask ? isNewTask || isEditTask ? <TaskForm /> : <></> : <></>}
          {!isNewTask && !isEditTask ? <CalendarCom /> : <></>}
        </div>
      </main>
    </div>
  );
};

export default Main;

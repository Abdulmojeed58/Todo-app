import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaMicrophone } from "react-icons/fa";

import Button from "./components/Button";
import Nav from "./components/Nav";
import Add from "./assets/icons/Icon (3).svg";
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";
import TaskDetails from "./components/TaskDetails";
import { useAppDispatch, useAppSelector } from "./hooks";
import { taskActions } from "./store/taskSlice";
import Calendar from "./components/Calendar";
import Modal from "./UI/Modal";

const Main = () => {
  const isNewTask = useAppSelector((state) => state.tasks.isNewTask);
  const isEditTask = useAppSelector((state) => state.tasks.isEditTask);
  const isViewTask = useAppSelector((state) => state.taskView.isViewTask);
  const taskItem = useAppSelector((state) => state.taskView.taskItem);
  const isModal = useAppSelector(state => state.tasks.isModal)
  const dispatch = useAppDispatch();

  return (
    <div className="pb-[50px]">
      <header>
        <Nav />
        <div className="flex justify-between items-center mt-[48px]">
          <div>
            <h1 className="font-semibold text-[30px] leading-[38px]">Good Morning!</h1>
            <p className="font-normal text-[16px] mt-[4px] leading-6">You got some task to do.</p>
          </div>
          <Button
            label={
              <>
                <LazyLoadImage src={Add} alt="add" />
                <p>Create New Task</p>
              </>
            }
            onClick={() => {
              dispatch(taskActions.changeTaskStatus(true));
              dispatch(taskActions.changeModalStatus(true));
            }}
            variant="contained"
            type="button"
            customClassName="hidden md:block"
          />
        </div>
      </header>

      <main className="md:grid grid-cols-3 gap-[5px] md:gap-[24px] mt-[32px]">
        <div className="col-span-2">          
          <Tasks />
        </div>

        {/* DESKTOP */}
        <div className="md:border-l-[1px] border-skin-border-gray md:pl-[24px] hidden md:block">
          {isViewTask && <TaskDetails {...taskItem} />}
          {!isViewTask ? isNewTask || isEditTask ? <TaskForm /> : <></> : <></>}
          {!isNewTask && !isEditTask && !isViewTask ? <Calendar /> : <></>}
        </div>



        {/* // MOBILE */}
        <div className="md:hidden">
          <Modal>
            {isViewTask && <TaskDetails {...taskItem} />}
            {!isViewTask ? (
              isNewTask || isEditTask ? (
                <TaskForm />
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </Modal>
          <div className="fixed bg-white left-0 right-0 bottom-0 md:hidden w-full py-[1rem] px-[2rem] sm:px-[2.5rem] md:px-[3rem]">
            <Button
              label={
                <>
                  <span className="text-skin-text-gray text-[16px] font-normal">
                    Input task
                  </span>
                  <FaMicrophone className="text-[#3F5BF6]" />
                </>
              }
              variant="outlined"
              type="button"
              onClick={() => {
                dispatch(taskActions.changeTaskStatus(true));
                dispatch(taskActions.changeModalStatus(true));
              }}
              customClassName={`${isModal ? 'hidden' : 'block'} bg-skin-bg-gray w-full h-[48px] hover:bg-white`}
              spanClassName="justify-between"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;

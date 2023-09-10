import { useAppDispatch, useAppSelector } from "../hooks";
import { ITaskDetails } from "../interfaces/taskInterface";
import { taskActions } from "../store/taskSlice";
import { taskViewActions } from "../store/taskViewSlice";
import DateCom from "./Date";

import TaskItem from "./TaskItem";
import Button from "./Button";
import usePagination from "../hooks/usePagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Tasks = () => {
  const tasksState = useAppSelector((state) => state.tasks.items);
  const dispatch = useAppDispatch();
  const {
    paginatedList,
    setCurrentPageAndUpdate,
    currentPage,
    totalPages,
    listNumber,
  } = usePagination(tasksState);

  // console.log(paginatedList);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPageAndUpdate(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPageAndUpdate(+currentPage + 1);
    }
  };

  const handleClick = (
    title: string,
    startTime: string,
    endTime: string,
    id: string
  ) => {
    dispatch(taskViewActions.handleViewTaskStatus(true));
    dispatch(
      taskViewActions.viewTask({
        title,
        startTime,
        endTime,
        id,
      })
    );
    dispatch(taskActions.changeModalStatus(true));
  };

  const handleChange = (task: ITaskDetails) => {
    dispatch(taskActions.changeCompletedStatus(task));
  };

  const allTask = paginatedList.map((task: any, index: any) => (
    <TaskItem
      key={index}
      {...task}
      onClick={() =>
        handleClick(task.title, task.startTime, task.endTime, task.id)
      }
      inputProps={{
        onChange: () => handleChange(task),
        onClick: (e) => e.stopPropagation(),
        checked: task.completed,
      }}
    />
  ));

  let startPagination: string[] = [];
  let endPagination: string[] = [];
  if (listNumber.length > 3) {
    startPagination = listNumber.slice(currentPage, currentPage + 3);
    endPagination = listNumber.slice(-3);
  }

  const startPaginationNumber = startPagination.map((list: any) => {

//     console.log("listNumber:", list-1);
// console.log("currentPage:", currentPage);
    return (
      <button
        key={list}
        onClick={() => setCurrentPageAndUpdate(list - 1)}
        className={`${currentPage === parseInt(list) ? 'bg-skin-bg-gray' : ''} p-[12px] flex justify-center items-center w-[40px] h-[40px] mx-2 cursor-pointer rounded-full`}
      >
        {list}
      </button>
    );
  });

  const endPaginationNumber = endPagination.map((list: any) => {
    return (
      <button
        key={list}
        onClick={() => setCurrentPageAndUpdate(list - 1)}
        className={`${currentPage === parseInt(list) ? 'bg-skin-bg-gray' : ''} p-[12px] flex justify-center items-center w-[40px] h-[40px] mx-2 cursor-pointer rounded-full`}
      >
        {list}
      </button>
    );
  });

  return (
    <div className="pb-5">
      <DateCom />
      <h3 className="mb-3 text-skin-text-primary font-semibold text-[16px]">
        My Tasks
      </h3>
      <div>
        <div className="flex flex-col gap-[16px] h-[60vh] md:h-[60vh] overflow-y-scroll">
          {allTask}
        </div>

        {/* /////// PAGINATION */}
        <div className="flex items-center justify-between mt-[20px]">
          <Button
            label={
              <>
                <FaArrowLeft />
                <span  className="text-[14px] font-semibold">Previous</span>
              </>
            }
            variant="outlined"
            onClick={handlePrevPage}
            customClassName="border-none"
            spanClassName='gap-[8px]'
          />
          <div className="flex">
            {startPaginationNumber}
            <div className="flex w-[40px] h-[40px] text-center justify-center items-center">
              <p className="p-8 text-center text-[14px] font-medium">...</p>
            </div>
            {endPaginationNumber}
          </div>
          <Button
            label={
              <>
                <span className="text-[14px] font-semibold">Next</span>
                <FaArrowRight />
              </>
            }
            variant="outlined"
            onClick={handleNextPage}
            customClassName="border-none"
            spanClassName='gap-[8px]'
          />
        </div>
      </div>
    </div>
  );
};

export default Tasks;

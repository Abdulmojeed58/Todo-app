import React, { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { taskActions } from "../store/taskSlice";

interface BackdropProps {
  children: ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ children }) => {
    const dispatch = useAppDispatch()
    const isModal = useAppSelector(state => state.tasks.isModal)


  return <div className={`${isModal ? 'block' : 'hidden'} fixed inset-0 bg-[rgba(0,0,0,.4)] z-10`} onClick={()=>dispatch(taskActions.changeModalStatus(false))}>{children}</div>;
};

const Modal: React.FC<BackdropProps> = ({ children }) => {
  return (
    <Backdrop>
      <div className="fixed left-0 right-0 bottom-0 animate z-10" onClick={(e)=> e.stopPropagation()}>{children}</div>
    </Backdrop>
  );
};

export default Modal;

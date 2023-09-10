import { useEffect, useState } from "react";
import { ITaskDetails } from "../interfaces/taskInterface";

const usePagination = (allList: ITaskDetails[]) => {
  // const [allList] = useState<ITaskDetails[]>(DUMMY_TASK);
  const [paginatedList, setPaginatedList] = useState<ITaskDetails[]>(allList);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [noPerPage] = useState<number>(20);
  const [totalPages, setTotalPages] = useState<number>(Math.ceil(allList.length / noPerPage));

  useEffect(() => {
    const totalPages = Math.ceil(allList.length / noPerPage);
    setTotalPages(totalPages);
    handleChange();
  }, [currentPage, noPerPage, allList]);

  const handleChange = () => {
    const startIndex = currentPage * noPerPage;
    const endIndex = Math.min(startIndex + noPerPage, allList.length);
    const paginatedItems = allList.slice(startIndex, endIndex);
    setPaginatedList(paginatedItems);
  };

  const setCurrentPageAndUpdate = (newPage: number) => {
    setCurrentPage(newPage);
  };


  const handlePrevPage = () => {
      if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1);
    }
  };

  let listNumber: string[] = [];

  for(let i = 1; i <= totalPages; i++) {
    listNumber.push(`${i}`)
  }

    return {paginatedList, setCurrentPageAndUpdate, currentPage, totalPages, listNumber, handlePrevPage, handleNextPage}

};

export default usePagination;

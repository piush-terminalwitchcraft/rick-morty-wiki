import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import '../../Assets/Styles/pagination.css'

interface PaginationProps{
    pagelength: number
    updatePageNumber: (pageNumber: number) => void;
}

function Pagination(props: PaginationProps) {
    const {pagelength, updatePageNumber} = props;

    const handlePageChange = (selectedPage: { selected: number }) => {
        console.log("Selected Page:", selectedPage.selected + 1);
        updatePageNumber(selectedPage.selected + 1);
      };

    useEffect(()=>{
        console.log(pagelength)
    },[pagelength]);
  return (
    <div>
        <ReactPaginate
            pageCount={pagelength}
            nextLabel=">"
            previousLabel="<"
            onPageChange={handlePageChange}
            containerClassName="pagination-container"
            activeClassName="pagination-active"
            nextClassName="next"
            previousClassName="previous"
            renderOnZeroPageCount={null}
        />
    </div>
  )
}

export default Pagination
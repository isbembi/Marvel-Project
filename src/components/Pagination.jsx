function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <button  onClick={handlePrev} disabled={currentPage === 1} style={{ marginRight: "10px", backgroundColor:"red", color:"white" }} >
        Prev
      </button>
      <span style={{color: "white"}}>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages} style={{ marginLeft: "10px", backgroundColor:"red", color:"white" }}>
        Next
      </button>
    </div>
  );
}

export default Pagination;

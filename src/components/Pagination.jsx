function Pagination({ currentPage, totalPages, onPageChange }) {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <button  onClick={handlePrev} disabled={currentPage === 1} style={{ marginRight: "10px",backgroundColor:"#c40000",color:"white", fontSize: "18px", padding: "12px 25px", borderRadius: "8px",cursor: "pointer", position: "relative",overflow: "hidden",
  boxShadow:"0 4px 10px rgba(0, 0, 0, 0.3)"}} >
        Prev
      </button>
      <span style={{color: "white"}}>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages} style={{ marginRight: "10px",backgroundColor:"#c40000",color:"white", fontSize: "18px", padding: "12px 25px", borderRadius: "8px",cursor: "pointer", position: "relative",overflow: "hidden",
  boxShadow:"0 4px 10px rgba(0, 0, 0, 0.3)"}}>
        Next
      </button>
    </div>
  );
}

export default Pagination;

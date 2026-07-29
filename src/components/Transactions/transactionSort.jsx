
function TransactionSort() {
    return (
        <div className="absolute z-2 bg-gray-300 flex flex-col rounded-lg mt-1" ref={sortRef}>
              <button className="block px-2 py-2 hover:bg-gray-400 transition cursor-pointer" onClick={() => {
                setSortOrder("recent");
                setShow(false)
                setShowSort(false)
                setCurrentPage(1)
                }}>Most Recent
              </button>
              <button className="block px-2 py-2 hover:bg-gray-400 transition cursor-pointer" onClick={() => {
                setSortOrder("oldest");
                setShow(false)
                setShowSort(false)
                setCurrentPage(1)
                }}>Oldest
              </button>
            </div>
    )
}

export default TransactionSort
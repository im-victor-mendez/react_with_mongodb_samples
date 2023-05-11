import { useEffect, useState } from "react"

function useDataPage(getDataFunction) {
    const [list, setList] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        getDataFunction(page)
        .then(
            data => {
                setList(data)
            }
        )
    }, [page])

    function reducer() {
        if (page > 1) setPage(previous => previous - 1)
    }
  
    function adder() {
        setPage(previous => previous + 1)
    }
    
  return [list, page, reducer, adder]
}
export default useDataPage
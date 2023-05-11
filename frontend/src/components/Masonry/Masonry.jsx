import './Masonry.scss'
import Masonry from "react-masonry-css"
import breakpointColumns from './responsiveBreakpoints'

function MasonryComponent({ children }) {
  return (
    <Masonry
        breakpointCols={breakpointColumns}
        className='masonry-grid'
        columnClassName='masonry-grid_column'
    >
      {children}
    </Masonry>
  )
}
export default MasonryComponent
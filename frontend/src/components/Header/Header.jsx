import './Header.scss'

function Header({ id, name, reducer, page, adder}) {
  return (
    <header id={`${id}-header`}>
        <h1>{name} List</h1>
        <div id="page-selector">
            <button onClick={reducer}>-</button>
            {`Page ${page}`}
            <button onClick={adder}>+</button>
        </div>
    </header>
  )
}
export default Header
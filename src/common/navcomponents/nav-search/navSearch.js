






const NavSearch=(props)=>{
    console.log(props);
    return (
        
        <div className="nav-search">
        <select className="search-select">
            <option>All</option>
        </select>
        <input className="search-input" type="text" placeholder="Search Amazon.in" value={props.searchText} onChange={(e)=>props.setSearchText(e.target.value)} />
        <div className="search-icon"></div>
        </div>
    )
}

export default NavSearch;
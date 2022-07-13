const Menu = (props) => {
    // Menu has access to setSelected page in app.js via PageHeader.js
    // use () => so method not called all the time and only called when clicked
    return <ul className="nav">
        <li style={{cursor: "pointer"}} onClick={ () => props.setSelectedPage("find")}>Find a Transaction</li>
        <li style={{cursor: "pointer"}} onClick={ () => props.setSelectedPage("new")}>New Transaction</li>
    </ul>

};

export default Menu;
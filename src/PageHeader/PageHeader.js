import Menu from './Menu';
import './PageHeader.css'

const PageHeader = (props) => {

    // Pageheader has access to setSelectedPage in app.js
    // and is providing setSelectedPage to Menu
    return <div className="pageHeader">
            <h1>Payents Application</h1>
            <Menu setSelectedPage={props.setSelectedPage}/>
        </div>

};

export default PageHeader;
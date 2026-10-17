import "./styles.css"
import MenuList from './menu-list';
import MenuItem from './menu-item';



export default function TreeView({ menus = [] }) {
    return (
        <div className="tree-view-container">
            {/* <h1>Tree View Component</h1> */}
            
            <MenuList list={menus} />
        </div>
    );
}

import { useState } from "react";
import MenuList from './menu-list';

export default function MenuItem({ item }) {

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrentChildren((currentChildren) => ({
        ...currentChildren,
        [getCurrentLabel]: !currentChildren[getCurrentLabel]
    }));
}

    return (
        <li>
            <div style={{display:"flex",justifyContent:"left",alignContent:"center", gap: "20px" }}>
                <p>{item.label}</p>
                {item && item.children && item.children.length ? <span onClick={() => handleToggleChildren(item.label)}>
                    
              {displayCurrentChildren[item.label] ? "-" : "+"}

              </span> : null}
            </div>



            {item.children && item.children.length > 0 &&  displayCurrentChildren[item.label] && (
          <MenuList list={item.children} />
            )}
        </li>
    );
}
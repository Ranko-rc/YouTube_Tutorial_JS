
export default function MenuItem({ item }) {
    return (
        <li>
            <p>{item.label}</p>
            {item.children && item.children.length > 0 ? (
                <ul>
                    {item.children.map((child) => (
                        <MenuItem key={child.to || child.label} item={child} />
                    ))}
                </ul>
            ) : null}
        </li>
    );
}
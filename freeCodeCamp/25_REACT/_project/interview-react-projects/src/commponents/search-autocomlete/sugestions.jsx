


export default function Suggestions({ filteredUser }) {
    return (
        <ul>
            {filteredUser.length === 0 && <li>Žádné výsledky.</li>}
            {filteredUser.map((item, index) => (
                <li key={`${item}-${index}`}>{item}</li>
            ))}
        </ul>
    );
}

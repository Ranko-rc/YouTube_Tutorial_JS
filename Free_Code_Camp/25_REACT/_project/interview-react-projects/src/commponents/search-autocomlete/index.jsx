import "./styles.css";
import { useEffect, useState } from "react";
import Suggestions from "./sugestions";

export default function SearchAutocomplete() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("");
    const [filteredUser, setFilteredUser] = useState([]);

    function handleChange(e) {
        const query = e.target.value;
        setSearchParam(query);

        if (query.trim().length < 2) {
            setFilteredUser([]);
            return;
        }

        const filteredData = user.filter((userItem) =>
            userItem.toLowerCase().includes(query.trim().toLowerCase())
        );
        setFilteredUser(filteredData);
    }

    async function fetchListOfUsers(signal) {
        try {
            const response = await fetch("https://dummyjson.com/users?limit=0", { signal });
            if (!response.ok) {
                throw new Error(`Načtení uživatelů selhalo (${response.status}).`);
            }

            const data = await response.json();
            if (!Array.isArray(data.users)) {
                throw new Error("Server vrátil neočekávaná data.");
            }

            setUser(
                data.users.map(
                    (userItem) => `${userItem.firstName} ${userItem.lastName}`
                )
            );
        } catch (error) {
            if (error.name !== "AbortError") {
                setError(error.message || "Při načítání uživatelů nastala chyba.");
            }
        } finally {
            if (!signal.aborted) {
                setLoading(false);
            }
        }
    }

    useEffect(() => {
        const controller = new AbortController();
        fetchListOfUsers(controller.signal);

        return () => controller.abort();
    }, []);

    return (
    
        <div className="search-autocomplete">
            <h1>Uživatelé</h1>
            {loading ? (
                <p>Načítám uživatele...</p>
            ) : (
                <input
                    value={searchParam}
                    onChange={handleChange}
                    type="text"
                    placeholder="Hledat uživatele..."
                    name="search"
                    aria-label="Hledat uživatele"
                />
            )}
            {error && <p role="alert">{error}</p>}
            {!loading && !error && searchParam.trim().length >= 1 && (
                <Suggestions filteredUser={filteredUser} />
            )}
        </div>
    );
}
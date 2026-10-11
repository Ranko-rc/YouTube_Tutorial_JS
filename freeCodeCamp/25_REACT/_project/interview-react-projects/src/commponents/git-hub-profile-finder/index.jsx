import "./styles.css"
import { useEffect, useState } from "react";
import User from "./user";



export default function GitHubProfileFinder() {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setQuery(username.trim());
  };

  useEffect(() => {
    if (!query) return;

    async function fetchGitHubProfile() {
      setLoading(true);
      try {
        const response = await fetch(`https://api.github.com/users/${query}`);
        setProfile(await response.json());
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubProfile();
  }, [query]);




  // if (profile) {
  //   return (
  //     <div className="github-profile-finder">
  //       <div className="input-wrapper">
  //         <input 
  //         name="search-by-username" 
  //         type="text" 
  //         placeholder="Enter GitHub username" 
  //         value={username}
  //         onChange={(e) => setUsername(e.target.value)} />
  //         <button onClick={() => {handleSubmit()}} type="submit">Search</button>
  //       </div>
  //       <div className="profile">
  //         <img src={profile.avatar_url} alt={profile.login} />
  //         <h2>{profile.name}</h2>
  //         <p>{profile.bio}</p>
  //       </div>
  //     </div>
  //   );
  // }




  return (
    <div className="github-profile-finder">
      <div className="input-wrapper">
        <input 
        name="search-by-username" 
        type="text" 
        placeholder="Enter GitHub username" 
        value={username}

        onChange={(e) => setUsername(e.target.value)} />

        <button onClick={handleSubmit}>Search</button>
      </div>
      {loading && <div>Loading...</div>}
      {!loading && profile !== null && <User profile={profile} />}
    </div>
  );
}
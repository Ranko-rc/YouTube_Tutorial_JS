

export default function User({ profile }) {
  const { avatar_url, login, name, bio, created_at } = profile;

    const createdDate = new Date(profile.created_at);



  return (
    <div className="profile">
      <img className="avatar" src={avatar_url} alt={login} />
      <p>Joined on: {createdDate.getDate()}-{createdDate.toLocaleString("default", { month: "short" })}-{createdDate.getFullYear()}</p>

      <div>
        <a href={`https://github.com/${login}`} target="_blank" rel="noopener noreferrer">{name || login}</a>
        <p>{bio}</p>
      </div>
        <div>
            <p>Public Repos: {profile.public_repos}</p>
        </div>
        <div>
            <p>Followers: {profile.followers}</p>
        </div>
        <div>
            <p>Following: {profile.following}</p>
        </div>  
    </div>
  );
}
import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext({ theme: 'light', undefined });

export const ThemeProvider = ({ children }) => {
  async function getGitHubProfile(user) {
    if (!user) return;
    try {
      const gitHubApiCall = await fetch(`https://api.github.com/users/${user}`);
      const data = await gitHubApiCall.json();
      const joinDate = new Date(data.created_at).toDateString().split(' ');
      joinDate.shift();
      setUserData((userData) => ({
        ...userData,
        joinDate: joinDate.join(' '),
        location: data.location,
        name: data.name,
        company: data.company,
        email: data.email,
        bio: data.bio,
        avatar: data.avatar_url,
        followers: data.followers,
        following: data.following,
        repos: data.public_repos,
        blog: data.blog,
        twitter: data.twitter_username,
      }));
    } catch (err) {}
  }
  useEffect(() => {
    getGitHubProfile('donnemartin');
    return () => {};
  }, []);

  const [theme, setTheme] = useState('light');
  const [userData, setUserData] = useState({
    joinDate: '',
    name: '',
    location: '',
    company: '',
    email: '',
    bio: '',
    avatar: '',
    repos: 0,
    followers: 0,
    following: 0,
    blog: '',
    twitter: '',
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme, userData, setUserData, getGitHubProfile }}>
      {children}
    </ThemeContext.Provider>
  );
};

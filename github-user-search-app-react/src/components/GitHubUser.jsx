import React from 'react';

const GitHubUser = () => {
  return (
    <section id="git-hub-user" className="background">
      <div className="user-details">
        <div
          style={{ backgroundImage: 'url(https://avatars.githubusercontent.com/u/55031343?v=4' }}
        >
          {' '}
        </div>
        <div className="user-info">
          <h3 className="text-secondary">The Octocat</h3>
          <a href="#">@octocat</a>
          <p className="text-primary">joined at fafafaf</p>
        </div>
      </div>
    </section>
  );
};

export default GitHubUser;

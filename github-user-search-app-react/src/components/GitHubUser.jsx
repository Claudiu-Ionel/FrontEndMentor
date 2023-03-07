import React, { useContext } from 'react';
import { ReactComponent as CompanyIcon } from '../assets/icon-company.svg';
import { ReactComponent as WebsiteIcon } from '../assets/icon-website.svg';
import { ReactComponent as TwitterIcon } from '../assets/icon-twitter.svg';
import { ReactComponent as LocationIcon } from '../assets/icon-location.svg';

import { ThemeContext } from '../context/ThemeContext';

const GitHubUser = () => {
  const { userData } = useContext(ThemeContext);
  const {
    joinDate,
    name,
    location,
    company,
    email,
    bio,
    avatar,
    followers,
    following,
    repos,
    blog,
    twitter,
  } = userData;
  return (
    <section id="git-hub-user" className="background">
      <div className="user-image-desktop" style={{ backgroundImage: `url(${avatar})` }}>
        {' '}
      </div>
      <section id="test">
        <div className="user-account-details">
          <div className="user-image" style={{ backgroundImage: `url(${avatar})` }}>
            {' '}
          </div>
          <div className="user-info-top">
            <section>
              <h3 className="text-secondary">{name}</h3>
              <p className="color-blue" href="#">
                @octocat
              </p>
            </section>
            <section>
              <p id="joined" className="text-primary">
                Joined {joinDate}
              </p>
            </section>
          </div>
        </div>
        <h4 className="user-description text-primary">
          {`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat
        mattis eros.` || bio}
        </h4>
        <section className="git-hub-data">
          <article className="repos ">
            <h4 className="text-primary">Repos</h4>
            <h3 className="text-secondary">{repos}</h3>
          </article>
          <article className="followers">
            <h4 className="text-primary">Followers</h4>
            <h3 className="text-secondary">{followers}</h3>
          </article>
          <article className="following text-secondary">
            <h4 className="text-primary">Following</h4>
            <h3 className="text-secondary">{following}</h3>
          </article>
        </section>
        <section className="git-hub-contact-details">
          <article className="contact-detail">
            <LocationIcon
              style={{ marginRight: 10, minWidth: '20px' }}
              className={location ? 'text-primary' : 'not-available'}
            />
            <h4 className={location ? 'text-primary' : 'not-available'}>
              {location || 'Not available'}
            </h4>
          </article>
          <article className="contact-detail">
            <WebsiteIcon
              style={{ marginRight: 10 }}
              className={blog ? 'text-primary' : 'not-available'}
            />
            <h4 className={blog ? 'text-primary' : 'not-available'}>{blog || 'Not available'}</h4>
          </article>
          <article className="contact-detail">
            <TwitterIcon
              style={{ marginRight: 10 }}
              className={twitter ? 'text-primary' : 'not-available'}
            />
            <h4 className={twitter ? 'text-primary' : 'not-available'}>
              {twitter || 'Not available'}
            </h4>
          </article>
          <article className="contact-detail">
            <CompanyIcon
              style={{ marginRight: 10 }}
              className={company ? 'text-primary' : 'not-available'}
            />
            <h4 className={company ? 'text-primary' : 'not-available'}>
              {company || 'Not available'}
            </h4>
          </article>
        </section>
      </section>
    </section>
  );
};

export default GitHubUser;

import React from 'react';
import {Link} from 'react-router-dom';
import {useSubscription} from 'react-meteor-hooks';

import ReminderBar from './ReminderBar';

export default function Home() {
  const loading = useSubscription('plants.forCurrentUser');
  const plants = Plants.find().fetch();

  function water(event) {
    console.log('water');
    event.preventDefault();
  }

  function snooze(event) {
    console.log('snooze');
    event.preventDefault();
  }

  const plantUI = plants.map(plant => (
    <Link to={'/plant/' + plant._id} className="box" key={plant._id}>
      <div className="columns level">
        <div className="column is-10">
          <h1 className="title level">
            <div className="level-left">
              <span className="level-item">
                <figure className="image is-32x32">
                  <img className="is-rounded" src="https://bulma.io/images/placeholders/64x64.png" />
                </figure>
              </span>
              <span className="level-item">
                {plant.name}
              </span>
            </div>
          </h1>
          <ReminderBar
            progress={30}
          />
        </div>
        <div className="column">
          <div className="field has-addons">
            <button className="button is-primary is-large is-fullwidth" onClick={water}>
              <span className="icon is-small">
                <i className="mdi mdi-water"></i>
              </span>
              <span>
                Water
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  ));

  return (
    <section className="section">

      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            Plant Journal
          </Link>

          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            ...
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">
              Home
            </a>
          </div>
        </div>

      </nav>



      <h1 className="title">
        My Plants
      </h1>

      <div className="container">
        {plantUI}
      </div>
    </section>
  );
};

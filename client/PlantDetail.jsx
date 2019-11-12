import React, {useRef, useState, useEffect, useLayoutEffect} from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import {useAutorun, useReactive} from 'use-autorun';

function useRenderCounter() {
  const counter = useRef(0);
  counter.current += 1;
  return counter.current;
}

export default function test(props) {
  const [plantID, setPlantID] = useState(props.match.params.plantID);
  window.setPlantID = setPlantID;
  const match = {
    params: {
      plantID,
    },
  };
  return (
    <PlantDetail
      match={match}
    />
  )
};

function PlantDetail(props) {
  const renderCount = useRenderCounter();
  console.log('plant detail render ' + renderCount);

  const reactiveProps = useReactive(props);
  const [plant, reminders] = useAutorun(comp => {
    const plantID = reactiveProps().match.params.plantID;
    console.log('subscription and fetch autorun for ' + plantID);

    const plantSub = Meteor.subscribe('plants.byID', plantID);
    const reminderSub = Meteor.subscribe('reminders.byPlantID', plantID);

    return [
      Plants.findOne(plantID),
      Reminders.find({plant_id: plantID}).fetch() || [],
    ];
  });

  if (!plant) {
    return null;
  }

  const now = moment();

  const reminderHTML = reminders.map(reminder => {
    const start = moment(reminder.previous_reminder_date);
    const end = moment(reminder.next_reminder_date);
    const duration = end.valueOf() - start.valueOf();
    const elapsed = now.valueOf() - start.valueOf();
    const percentage = Math.max(0, Math.min(100, 100 * elapsed / duration));

    return (
      <div className="box" key={reminder._id}>
        <h2 className="title">{reminder.name}</h2>
        <progress className="progress is-large" value={percentage} max="100">{percentage}%</progress>
        <div className="level">
          <div className="level-left">
            Completed {start.fromNow()}
          </div>
          <div className="level-right">
            Next {end.fromNow()}
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="section">

      <div className="container">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><Link to="/">My Plants</Link></li>
            <li className="is-active"><a href="#" aria-current="page">{plant.name}</a></li>
          </ul>
        </nav>

        <div className="level">
          <div className="level-left">
            <figure className="image is-128x128">
              <img className="is-rounded" src="http://bulma.io/images/placeholders/128x128.png" />
            </figure>
          </div>
          <h2 className="title">
            {plant.name}
          </h2>
        </div>

        <h2 className="title">
          Reminders
        </h2>
        {reminderHTML}
      </div>
    </section>
  );
};

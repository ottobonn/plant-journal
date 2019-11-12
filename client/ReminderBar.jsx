import React from 'react';

export default function ReminderBar(props) {
  return (
    <reminder-bar>
      {props.title &&
        <h4 className="subtitle">
          {props.title}
        </h4>
      }
      <progress className="progress is-large" value={props.progress} max="100">{props.progress}%</progress>
    </reminder-bar>
  );
}

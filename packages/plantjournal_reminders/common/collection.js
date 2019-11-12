import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const ReminderSchema = new SimpleSchema({

  user_id: {
    type: String,
  },

  plant_id: {
    type: String,
  },

  name: {
    type: String,
  },

  type: {
    type: String,
    allowedValues: ['watering'],
  },

  created_date: {
    type: Date,
  },

  interval_ms: {
    type: String,
  },

  previous_reminder_date: {
    type: Date,
  },

  next_reminder_date: {
    type: Date,
  },

});

const Reminders = new Mongo.Collection('reminders');
Reminders.attachSchema(ReminderSchema);

export {Reminders, ReminderSchema};

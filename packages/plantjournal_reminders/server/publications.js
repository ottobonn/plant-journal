import {Reminders} from '../common';

Meteor.publish('reminders.byPlantID', function(plantID) {
  return Reminders.find({
    plant_id: plantID,
  });
});

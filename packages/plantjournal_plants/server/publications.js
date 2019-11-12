import {Plants} from '../common';

Meteor.publish('plants.forCurrentUser', function() {
  return Plants.find({}); // FIXME
});

Meteor.publish('plants.byID', function(plantID) {
  return Plants.find({
    _id: plantID,
    // user_id: Meteor.userId(),
  });
});

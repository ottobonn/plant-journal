import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const PlantSchema = new SimpleSchema({

  user_id: {
    type: String,
  },

  name: {
    type: String,
  },

  color: {
    type: String,
  },

});

const Plants = new Mongo.Collection('plants');
Plants.attachSchema(PlantSchema);

export {Plants, PlantSchema};

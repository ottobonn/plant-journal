import 'bulma/css/bulma.css';

import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import {renderRoutes} from './routes';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});

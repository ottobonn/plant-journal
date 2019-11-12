Package.describe({
  name: 'plantjournal:reminders',
  version: '0.0.1',
  summary: 'Reminders collection',
  git: '',
  documentation: 'README.md',
});

var dependencies = [
  'ecmascript',
  'underscore',
];

Package.onUse(function(api) {
  api.use(dependencies, ['client', 'server']);
  api.mainModule('client/index.js', 'client');
  api.mainModule('server/index.js', 'server');
  api.export(['Reminders']);
});

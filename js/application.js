window.Todos = Ember.Application.create();
// attached to window as a property rather than a variable
//Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
Todos.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'todos-emberjs'
});
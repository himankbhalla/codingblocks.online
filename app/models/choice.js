import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr(),
  question: DS.belongsTo('question', {
    inverse: 'choices'
  })
});

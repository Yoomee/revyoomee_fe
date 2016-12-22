import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  reviewees: DS.hasMany('user', { inverse: 'reviewer' }),
  reviewer: DS.belongsTo('user', { inverse: 'reviewee'})
});

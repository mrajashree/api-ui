import Ember from 'ember';
import JsonMap from 'api-ui/components/json-map/component';

export default JsonMap.extend({
  actions: {
    follow(url) {
      this.get('history').follow(url);
    },
  }
});

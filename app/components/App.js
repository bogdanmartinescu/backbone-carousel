import Marionette from 'backbone.marionette';
import ItemView from './ItemView';
import collection from './CarouselCollection';
import CollectionView from './CollectionView';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new CollectionView({ collection }));
  }
});

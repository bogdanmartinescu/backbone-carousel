import Marionette from 'backbone.marionette';
import Bb from 'backbone';
import ItemView from './ItemView';

export default Marionette.CollectionView.extend({
  tagName: 'div',
  className: 'carousels',
  childView: ItemView
});

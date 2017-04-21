import Marionette from 'backbone.marionette';
import template from '../templates/item.jst';

export default Marionette.View.extend({
  template: template,

  ui: {
    prev: '#prev',
    next: '#next'
  },

  events: {
    'click @ui.prev': 'prev',
    'click @ui.next': 'next'
  },

  initialize() {
    const options = this.model.attributes;
    this.title = options.title || "";
    this.images = options.images || [];
    this.toShow = 4;
    this.first = 0;
    this.last = this.toShow;
    this.display = [];
  },

  build() {
    if(this.images.length) {
      this.images = this.images.map(function(image) {
        return "<li><img src=" + image + " class='carousel-item'></li>";
      }.bind(this));
    }
  },

  onRender() {
    this.build();
    this.displayItems();
  },

  prev(e) {
    e.preventDefault();
    if(this.first === 0) {
        return;
    }

    this.first -= 1;
    this.last -= 1;
    this.displayItems();
  },

  next(e) {
    e.preventDefault();
    if(this.last === this.images.length) {
        return;
    }

    this.first += 1;
    this.last += 1;
    this.displayItems();
  },
  
  displayItems() {
    this.$el.find('.bb-carousel-list').html(this.images.slice(this.first, this.last).join(''));
  }
});

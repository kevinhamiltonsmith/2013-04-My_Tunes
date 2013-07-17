var Song = Backbone.Model.extend({
  defaults:{
    "playcount": 0,
    "url": "",
    "title": "",
    "artist": ""
  },

  play: function(){
    this.set('playcount', this.get('playcount')+1);
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  }

});

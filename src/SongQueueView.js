var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    this.collection.on('add', function(model){
      this.render();
    }, this);

    this.collection.on('remove', function(model){
      this.render();
    }, this);
  },

  render: function() {
    this.$el.children().detach();

    return this.$el.html('<th>Playlist</th>').addClass('queue').prepend('<tr><td colspan="3">click a song to remove it</td></tr>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});

var LibraryView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on('play', function(model){
      this.render();
    }, this);
  },

  render: function(){
    this.$el.children().detach();
    return this.$el.html('<th>Library</th>').addClass('library').prepend('<tr><td colspan="2">click a song to add it to the playlist</td><td>plays</td></tr>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});

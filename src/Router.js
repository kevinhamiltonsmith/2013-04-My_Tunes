var MyTunes = new (Backbone.Router.extend({
  routes: {
    "": "index",
    "songs/:title": "songs"
  },

  initialize: function(){
    this.library = new Songs(songData);
    this.app = new App({library: this.library});
    this.appView = new AppView({model: this.app});

    this.library.on('play', function(song){
      this.navigate("songs/" + song.get('title'));
    }, this);

    // if(Modernizr.localstorage){
    //   localStorage.setItem("storedApp",JSON.stringify(this.app));
    // }
    $('body').append(this.appView.render());
  },

  start: function(){
    Backbone.history.start();
  },

  index: function(){
  },

  songs:  function(title) {
    this.library.where({'title':title})[0].play();
  }
}));
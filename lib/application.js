window.NewRelicChallenge = window.NewRelicChallenge || {};

window.NewRelicChallenge.Application = function(json) {
  this.name = json.name;
  this.contributors = json.contributors;
  this.version = json.version;
  this.apdex = json.apdex;
  this.host = json.host;

  this.viewCreateAppTag = function(){
    return '<li class="app-info"><span class="app-apdex">'+ this.apdex +'</span><span class="app-name">'+ this.name +'</span></li>';
  };
}

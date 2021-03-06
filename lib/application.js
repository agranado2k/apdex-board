'use strict';

window.NewRelicChallenge = window.NewRelicChallenge || {};

window.NewRelicChallenge.Application = function(json) {
  this.name = json.name;
  this.contributors = json.contributors;
  this.version = json.version;
  this.apdex = json.apdex;
  this.host = json.host;
  this.viewCreateAppTag = function() {
    return '<li class="app-info">\
<div class="app-apdex">'+ this.apdex +'</div>\
<div class="app-name" data-version="'+ this.version +'">'+ this.name +'</div>\
</li>';
  };
}

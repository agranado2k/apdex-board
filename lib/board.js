function Host(name) {
  this.name = name;
}

function Application(json) {
  this.name = json.name;
  this.contributors = json.contributors;
  this.version = json.version;
  this.apdex = json.apdex;
}

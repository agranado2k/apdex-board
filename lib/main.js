'use strict';

window.NewRelicChallenge = window.NewRelicChallenge || {};

window.NewRelicChallenge.init = function() {
  var board = new window.NewRelicChallenge.Board();
  board.initData();
  board.element('viewMode').addEventListener('click', window.NewRelicChallenge.changeModeView)
};


window.NewRelicChallenge.changeModeView = function() {
  window.NewRelicChallenge.applyGridClassOnCards();
  window.NewRelicChallenge.applyAppInfoGridClassOnAppInfo();
  window.NewRelicChallenge.applyAppInfoGridClassOnAppInfoName();
  window.NewRelicChallenge.applyClassOnHeader();
};

window.NewRelicChallenge.applyGridClassOnCards = function() {
  var cards = document.getElementsByClassName("card");

  for(var i = 0; i < cards.length; i += 1)
    cards[i].classList.toggle("grid")
};

window.NewRelicChallenge.applyAppInfoGridClassOnAppInfo = function() {
  var appsInfo = document.getElementsByClassName("app-info");

  for(var i = 0; i < appsInfo.length; i += 1)
    appsInfo[i].classList.toggle("app-info-grid")
};

window.NewRelicChallenge.applyAppInfoGridClassOnAppInfoName = function() {
  var appsInfo = document.getElementsByClassName("app-name");

  for(var i = 0; i < appsInfo.length; i += 1)
    appsInfo[i].classList.toggle("app-name-grid")
};

window.NewRelicChallenge.applyClassOnHeader = function(){
  var cards = document.getElementsByClassName("card");
  var checkboxLabel = document.getElementById('checkboxLabel');

  checkboxColumn = document.getElementById('checkboxColumn');
  userEmailColumn = document.getElementById('userEmailColumn');
  userEmailColumn.classList.toggle("user-email-grid");
  checkboxColumn.classList.toggle("checkbox-grid");

  if (cards[0].classList.contains("grid"))
    checkboxLabel.innerHTML = "Show as list";
  else
    checkboxLabel.innerHTML = "Show as an awesome grid";
};


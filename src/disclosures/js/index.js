'use strict';

var $ = require( 'jquery' ),
    FinancialModel = require( './lib/financial-data.js' ),
    financials = new FinancialModel(),
    View = require( './lib/school-view.js' ),
    schoolView = new View();    

function randomFinancials() {
  $( '[data-financial]' ).each( function() {
    var val = Math.floor( Math.random() * 10000 );

    $( this ).val( val );
  });
}

function updateModelFromView() {
  var newValues = schoolView.getValues();
  $.extend( financials.values, newValues );
  financials.calc();
}

function updateViewFromModel() {
  schoolView.updateView( financials.values );
}

$( document ).ready( function() {
  $( '#calculate-debt' ).click( function() {
    updateModelFromView();
    updateViewFromModel();
  });

  $( '#add-random' ).click( function() {
    randomFinancials();
  });

});

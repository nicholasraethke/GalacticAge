import { SolarCalc } from './../js/solar.js';

$(document).ready(function() {
  $('#ageForm').submit(function(event) {
    event.preventDefault();
    $('.output').show();
    const birthDate = $('#birthDate').val();
    let calculate = new SolarCalc();

    const ageSeconds = calculate.ageSeconds(birthDate);
    const standardAge = calculate.getStandardAge(birthDate);
    const mercuryAge = calculate.mercury(birthDate);
    const venusAge = calculate.venus(birthDate);
    const marsAge = calculate.mars(birthDate);
    const jupiterAge = calculate.jupiter(birthDate);

    $('#earth-output').html(standardAge);
    $('#seconds-output').html("Your age in seconds: " + ageSeconds);
    $('#mercury-output').html(mercuryAge);
    $('#venus-output').html(venusAge);
    $('#mars-output').html(marsAge);
    $('#jupiter-output').html(jupiterAge);

  });

  $('#difference').submit(function(event) {
    event.preventDefault();
    $('.diff-output').show();
    const dateX = $('#start-date').val();
    const dateY = $('#end-date').val();
    let calculate2 = new SolarCalc();
    const diffSecond = calculate2.secondDiff(dateX, dateY);
    $('#diff').text("There are " + diffSecond + " seconds between the two dates.");
  });
});

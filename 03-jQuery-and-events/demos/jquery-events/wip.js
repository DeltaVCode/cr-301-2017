//event logger
function logTarget() {
  console.log(this);
  console.log($(this));

  var target = $(this).text();
  var newFeedback = $('#feedback p:first-child').clone();

  newFeedback.text('You clicked on ' + target);
  $('#feedback').append(newFeedback);
}

//not delegated - event bound to all the 'li's
//no selector specified in .on() method
$('#menu1 li').on('click', logTarget)

//delegated - event is bound to parent
//'li' is specified in .on()
$('#menu2').on('click', 'li', logTarget)

$('button[name=clear]').on('click', function() {
  $('.log-item:first').siblings().remove();
});

$('button[name=adder1]').on('click', function() {
  var newLi1 = $('#menu1 li:first').clone();
  newLi1.text('newLi1');
  $('#menu1').append(newLi1);
});

// nav handler
// we want delegation!!!!!

$('nav a').on('click', function() {
  var setActiveTab = $(this).data('tab');
  var makeIdForSection = '#' + setActiveTab;
  $('.tab-content').hide();
  $(makeIdForSection).slideDown();
});

$('button[name=adder2]').on('click', function() {
  var newLi1 = $('#menu2 li:first').clone();
  newLi1.text('newLi1');
  $('#menu2').append(newLi1);
});

// select box filtering
$('select[name="icecream"]').on('change', function() {
  var iceCreamSelection = $(this).val();
  var getICpic = '"'+ iceCreamSelection +'"';
  $('img').hide();
  $('img[data-flavor='+ getICpic +']').show();
});

// CHECK BOX HANDLER - Change event
// Show difference between attribute (attr) and prop
$('input[type="checkbox"]').on('change', function() {
  var checkbox = $(this);
  $('#checked-state').html(
    '.attr("checked"): '
    + checkbox.attr('checked')
    + '<br>.prop("checked"): '
    + checkbox.prop('checked')
  );
});


$(document).ready(function() {
  $('.tab-content').hide();
});

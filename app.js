$('btnSubmit').click(function () {
    $('Button!');
};

$(function () {
    $('#text-field').keyup(function () {
      if ($('#text-field').val().length > 0) {
        $('#btnSubmit').removeAttr('disabled');

$('p').mouseover(function () {
    $('p').css('color', 'red');
  });

let list = '<ul class="list"></ul>';
$('body').append(list);

$('#btnSubmit').click(function () {
  let listText = $('#text-field').val();
  $('.list').append('<li class="item">' + listText + '</li>');

  function rand() {
    return Math.floor(Math.random() * 255);
  }

  $('.item').click(function() {
    $(this).css({'color': 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')'});
  });

  $('.item').dblclick(function() {
    $(this).remove();
  })
});
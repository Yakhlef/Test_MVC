$(document).ready(function(){ 
  $('#characterLeft').text('140 characters left');
  $('#message').keydown(function () {
      var max = 140;
      var len = $(this).val().length;
      if (len >= max) {
          $('#characterLeft').text('You have reached the limit');
          $('#characterLeft').addClass('red');
          $('#btnSubmit').addClass('disabled');            
      } 
      else {
          var ch = max - len;
          $('#characterLeft').text(ch + ' characters left');
          $('#btnSubmit').removeClass('disabled');
          $('#characterLeft').removeClass('red');            
      }
  }); 

  // $('body').on('click', '#view', function(){
  //   $('#save').val($(this).val());
  //   var id = $(this).val();
  //   $.get('/editPreson/'+id,function(person){
  //     $('#id_person').val(id);
  //     $('#a').val(person[0].name);
  //     $('#b').val(person[0].age);
  //     $('#c').val(person[0].phone);
  //     $('#d').val(person[0].DOB);
  //   });
  // });
  $('.edit_person').on('click',function(){
    var myDataAttr = $(this).data('noname');
    console.log(myDataAttr);
    $('#id_person').val(myDataAttr);
    $('#a').val($("#person-"+myDataAttr).data('name'));
    $('#b').val($("#person-"+myDataAttr).data('age'));
    $('#c').val($("#person-"+myDataAttr).data('phone'));
    $('#d').val($("#person-"+myDataAttr).data('dob'));
   //console.log($("#person-"+myDataAttr).data('name')+"-"+$("#person-"+myDataAttr).data('age'));
  });

  $('.delete_person').on('click',function(){
    var myDataAttr = $(this).data('delete');
    console.log(myDataAttr);
    $('#id_person2').val(myDataAttr);
    $('#delete_name').val($("#person-"+myDataAttr).data('name'));
  });
});

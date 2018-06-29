
// Select color input
// Select size input
var height,width,color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
    event.preventDefault();
    height= $('#inputHeight').val();
    width= $('#inputWeight').val();
    makeGrid(height,width);

  })

function makeGrid(x,y) {
    $('tr').remove();
    // Your code goes here!
    for(var i=1; i<=x; i++){
      $('#pixelCanvas').append('<tr id=table'+ i +'></tr>');
      for(var k=1; k<=y; k++){
        $('#table'+ i).append('<td></td>');
      }
    }

  //add color to cell
  $('td').click(function()
    {
      color = $('#colorPicker').val();

      /*toggle between removing a color from a cell if it exists
      and adding a color to the cell if none exists*/

      if ($(this).attr('style')){
        $(this).removeAttr('style');
      }else {
        $(this).attr('style', 'background-color:'+ color);
      }
  })
}

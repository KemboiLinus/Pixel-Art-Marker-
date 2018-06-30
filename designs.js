
// Select size input

var color, width, height;
// When size is submitted by the user, call makeGrid()
$("#sizePicker").submit(function(event){
    event.preventDefault();
    makeGrid();
});

function makeGrid() {
    $('tr').remove();
    // Your code goes here!
    let height = $('#inputHeight').val();
    let width = $('#inputWeight').val();
    for(let i = 1; i <= height; i++){
        $("#pixelCanvas").append('<tr id=table' + i + '></tr>');
        for(let j = 1; j <= width; j++){
            $("tr:last").append("<td></td>");
        }
    }
    //adding of color to the cell.
    
    $('td').click(function addColor(){
      color = $('#colorPicker').val();
    
        if($(this).attr('style')){
            $(this).removeAttr('style')
        }else {
            $(this).attr('style', 'background-color:' + color);
        }
    });
}

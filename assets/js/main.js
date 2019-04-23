$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    let todoText = $(this).val();
    console.log("u entered");
    $("ul").append(`<li><span><i class="far fa-trash-alt"></i>

    </span> ${todoText}</li>`);
    $(this).val("");
  }
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});
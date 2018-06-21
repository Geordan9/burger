$(function() {
  $(".change-devoure").on("click", function(event) {
    var id = $(this).data("id");
    var isDevoured = $(this).data("available");

    var devoureState = {
      devoured: isDevoured
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoureState
    }).then(
      function() {
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bn").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });
});

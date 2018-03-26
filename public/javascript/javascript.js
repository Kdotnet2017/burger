$(document).ready(function () {
    $("#txtInput").focus();
    $("#btnSubmit").on("click", function (event) {
        event.preventDefault();
        var burgersName = $("#txtInput").val().trim();
        var newRecord = { name: burgersName }
        $.ajax({
            url: "/api/burgers",
            type: "POST",
            data: newRecord
        }).then(function () {
            location.reload();
        })
    });
    $(document).on("click", ".devouredClass", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var newData = { devoured: true };
        $.ajax({
            url: "/api/burgers/" + id,
            type: "PUT",
            data: newData
        }).then(function () {
        });
        location.reload();
    })
});

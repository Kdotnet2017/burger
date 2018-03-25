$(document).ready(function () {
    $("#btnSubmit").on("click", function (event) {
        console.log("iam in jquery");
        event.preventDefault();
        var burgersName = $("#txtInput").val().trim();
        var newRecord={name:burgersName}
        $.ajax("/api/burgers",{
            type: "POST",
            data: newRecord
        }).then(function(){
            console.log("sent to /api/burgers routes.")
            console.log(newRecord);
            location.reload();
        })
        console.log(newRecord);
    });
});
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
    $(document).on("click",".devouredClass",function(event){
        event.preventDefault();
        var id=$(this).data("id");
        var newData={devoured:true};
        $.ajax({
            url:"/api/burgers/"+id,
            type:"PUT",
            data:newData
        }).then(function(){
            location.reload();
        });
        console.log(id);    
    
    })
});

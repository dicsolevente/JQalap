
$(function () {
    $("#kezd").on("click", init);
});

function init() {
$("#jatekter").empty();
//    $("div").eq(0).text("Ez a div szövege ");
//    $("div").eq(0).html("Ez a <b>div</> szövege");
//    $("div").eq(0).append("Ez egy másik <b>div</> szövege");
    for (var i = 0; i < 5; i++) {
        
        $("#jatekter").append("<div>");
        $("#jatekter div").eq(i).append("<img>");
//        $("#jatekter div img").eq(i).attr("src", "kep.jpg");
//        $("#jatekter div img").eq(i).attr("alt", "nuyl");
        $("#jatekter div img").eq(i).attr({"src": "kep.jpg", "alt": "kartya"});
        $("#jatekter div").addClass("kartya");
        
//        $("#jatekter div").mouseenter(function(){
//            $(this).css({"background-color":"red", "padding":"2%"});
//        });
//        $("#jatekter div").mouseleave(function(){
//            $(this).css({"background-color":"pink", "padding":"2%"});
//        });
    }
    $("#jatekter div").css({"background-color": "pink", "padding": "2%"});
    $("#jatekter div").hover(
                function () {
                    $(this).css({"background-color": "red", "padding": "2%"});
                },
                function () {
                    $(this).css({"background-color": "pink", "padding": "2%"});
                }
        );
        $("#jatekter div").click(
                function () {
                    $(this).hide(1000);
                    $(this).show(1000);
                    
                },
                
        );
}
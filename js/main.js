//open the sideBar
let innerrWidth = $(".sideBar").innerWidth();
$(".open").click(function(){
    $("aside").css("left", "0")

//close the sideBar
})
$(".close").click(function(){
    $("aside").css("left", -innerrWidth)
})


//block or display the paraghraph when clicking the h3

$(".singerone").click(function(){
    $(this).next().slideToggle()
    $(".singer").not($(this).next()).slideUp();

})


//text area counting the remaining letters

$("textarea").keyup(function(){
    let myLength = $(this).val().length;
    $(".chars").text(
100 - myLength <= 0 ? "your availble characters finished " : 100 - myLength

        
    )
})

// an oreo cookie weighs 14.5 grams
let oreo = 14.5;

// one pound is equal to 454 grams
let gramsPerPound = 454;

let studentWeight;
$("h3").text("请以斤为单位输入体重，我们将为你算出等重的奥利奥饼干数。")
$("button").click(function() {
    studentWeight = $("input").val();
    let oreos = ( studentWeight * 500 ) / oreo;    
    $("img").attr("src", "giphy.gif");
    $("#oreoWeight").text("你的奥利奥体重是 " + oreos + " 个奥利奥!");
    if(oreos > 100){
        alert("看来你最近没有打篮球，你必须打篮球了")
        $("#oreoWeight").text("你的奥利奥体重是 " + oreos + " 个奥利奥!"+"，也就是说，你等于三个王太贵；四个艾克；1个某炳南。");
    }
});




var plus = document.getElementById("plus");
var title = document.getElementById("title");
var msg = document.getElementById("msg");
var change = "";
var counter = 0;

plus.onclick = function newkeep() {
    let t = title.value;
    let m = msg.value;
    if(t !="" ||     m != "")
    {
    counter = counter+1;    
    change = change + '<div class="keeps" id="'+counter+'"><div class="keep-title" id="'+counter+'t">'+t+'</div><div class="keep-msg" id="'+counter+'m">'+m+'</div><button class="delete" id="'+counter+'d" onclick="del(this.id)"><img src="icons8-delete-48.png" alt="" class="del"></button></div>' ;

    document.getElementById("keepsd").innerHTML = change;

    document.getElementById("title").value = "";
    document.getElementById("msg").value = "";
    }

}

function del(id){
    idd = id.substring(0,id.length -1);
    document.getElementById(idd).style.display = "none";
    change = document.getElementById("keepsd").innerHTML;
}




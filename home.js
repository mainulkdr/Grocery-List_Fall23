function submit(){
    let item = document.getElementById("item").value
    if(item){
        let newNode = document.createElement("li")
        newNode.setAttribute("onclick", "checkItem(this)")
        newNode.innerHTML = item
        let ul = document.getElementById("list")
        ul.appendChild(newNode)
        document.getElementById("item").value = ""
    }
}

function checkItem(item){
    if(item.style.textDecoration === "line-through"){
        item.style.textDecoration = ""
    }
    else
        item.style.textDecoration = "line-through"
}

function changeView(x){
    let li = document.getElementsByTagName("li")
    if(x.value === "1"){
        for(let i=0; i<li.length; i++){
            if (li[i].style.textDecoration !== "line-through") {
                li[i].style.display = "none"
            }
            else {
                li[i].style.display = ""
            }
        }
    }
    else if(x.value === "2"){
        for(let i=0; i<li.length; i++){
            if (li[i].style.textDecoration === "line-through") {
                li[i].style.display = "none"
            }
            else {
                li[i].style.display = ""
            }
        }
    }
    else {
        for(let i=0; i<li.length; i++){
            li[i].style.display = ""
        }
    }

}
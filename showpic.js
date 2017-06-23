function showpic(whichpic)
{   if(!document.getElementById("placeholder")) {return false;}
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    if(placeholder.nodeName!="IMG") {return false;}
    placeholder.setAttribute("src",source);
    if(document.getElementById("description")){
    var text=whichpic.getAttribute("title");
    var description=document.getElementById("description");
    if(description.firstChild.nodeType==3){
    description.firstChild.nodeValue=text;}
    }
    return true;
}

function prepareGallery(){
    if(!document.getElementById) {return false;}
    if(!document.getElementsByTagName) {return false;}
    if(!document.getElementById("imagegallery")) {return false;}
    var gallery=document.getElementById("imagegallery");
    var links=gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
    links[i].onclick=function(){
       showpic(this);
       return false;
    }
    }
}

function preparePlaceholder(){
    if(!document.createElement) return false;
    if(!document.createTextNode) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imagegallery")) return false;
    var placeholder=document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","");
    placeholder.setAttribute("alt","my image gallery");
    var description=document.createElement("p");
    description.setAttribute("id","description");
    var desctext=document.createTextNode("Choose an image");
    description.appendChild(desctext);
    var gallery=document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
}



function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }
    else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}

addLoadEvent(prepareGallery);
addLoadEvent(preparePlaceholder);


function countbodychildren(){
    var body_element=document.getElementsByTagName("body")[0];
    alert(body_element.childNodes.length);
}

function insertAfter(newElement,targetElement){
    var parent=targetElement.parentNode;
    if(parent.lastChild==targetElement){
        parent.appendChild(newElement);
    }
    else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

var count = 0;

function addBlog(){

    var _title = document.getElementById("title").value;
    var _article = document.getElementById("article").value;
    var _imageLink = document.getElementById("imageLink").value;

    document.getElementById("title").value = "";
    document.getElementById("article").value = "";
    document.getElementById("imageLink").value = "";

    var _blogs = document.getElementById("blogs");

    if(count % 3 == 0){
        var row = document.createElement("div");
        row.setAttribute("class","row");

        var blog = document.createElement("div");
        blog.setAttribute("class", "blog");
        blog.innerHTML = "<div>"  + _title + "</div><br><div>"  + _article + "</div><br>";

        if(_imageLink != ""){
            blog.innerHTML += "<img src='" + _imageLink + "'>"
        }

        //if(_imageLink != "" && checkImageLink(_imageLink)){
       //    blog.innerHTML += "<img src='" + _imageLink + "'>"
       //}
        row.appendChild(blog);
        _blogs.appendChild(row);
    }
    else{
       var lastRow = _blogs.lastChild;

       var blog = document.createElement("div");
       //blog.setAttribute("class", "col-sm-3 col-md-4 col-lg-6");
       blog.setAttribute("class", "blog");
       blog.innerHTML = "<div>"  + _title + "</div><br><div>"  + _article + "</div><br>";

       if(_imageLink != ""){
            blog.innerHTML += "<img src='" + _imageLink + "'>"
        }
    
       //if(_imageLink != "" && checkImageLink(_imageLink)){
       //    blog.innerHTML += "<img src='" + _imageLink + "'>"
       //}
       lastRow.appendChild(blog);
       _blogs.appendChild(lastRow);
    }

    count++;
}

/*function checkImageLink(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}*/
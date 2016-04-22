// Your code here!
(function () {
    "use strict"

    window.URL = window.URL || window.webkitURL;

    var fileSelect = document.getElementById("fileSelect"),
        fileElem = document.getElementById("fileElem"),
        fileList = document.getElementById("fileList");

    fileSelect.addEventListener("click", function (e) {
        if (fileElem) {
            fileElem.click();
        }
        e.preventDefault(); // prevent navigation to "#"
    }, false);

    fileElem.onchange=function(){
        handleFiles(this.files);
    }

    function handleFiles(files) {
        if (!files.length) {
            fileList.innerHTML = "<p>No files selected!</p>";
        } else {
            fileList.innerHTML = "";
            var list = document.createElement("ul");
            fileList.appendChild(list);
            for (var i = 0; i < files.length; i++) {
                var li = document.createElement("li");
                list.appendChild(li);

                var audio = document.createElement("audio");
                audio.src = window.URL.createObjectURL(files[i]);//here to create the object url. It is in format of blob:E2B122AA-5FD4-41F5-9C87-944A68AF7456
                audio.height = 60;
                audio.onload = function () {
                    window.URL.revokeObjectURL(this.src);
                }
                audio.play();
                li.appendChild(audio);
                var info = document.createElement("span");
                info.innerHTML = files[i].name + ": " + files[i].size + " bytes";
                li.appendChild(info);
            }
        }
    }
})();

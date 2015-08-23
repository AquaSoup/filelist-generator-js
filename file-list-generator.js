/**
 * File List Generator
 *
 * Author: AquaSoup (bartholomej)
 * Website: https://github.com/AquaSoup/filelist-generator-js
 * Docs: https://github.com/AquaSoup/filelist-generator-js
 * Repo: https://github.com/AquaSoup/filelist-generator-js
 * Issues: https://github.com/AquaSoup/filelist-generator-js/issues
 */

(function() {

const JSONfilename = 'definition.json'

var JSONstring;
var JSONarray = [];

var filedrag = document.getElementById('js-fsg-filedrag'),
    input = document.getElementsByClassName("js-fsg-input")[0],
    summary = document.getElementsByClassName("js-fsg-summary")[0];

// Drag and drop init and fallback
if (window.File && window.FileList && window.FileReader) {
    input.addEventListener("change", handleUpload, false);

    var xhr = new XMLHttpRequest();
    if (xhr.upload) {
        filedrag.addEventListener("click", showDialog, false);
        filedrag.addEventListener("dragover", handleDragHover, false);
        filedrag.addEventListener("dragleave", handleDragHover, false);
        filedrag.addEventListener("drop", handleUpload, false);
        filedrag.style.display = "inline-block";
        input.style.display = "none";

        // Create plus sign
        var sign = document.createElement("span");
        sign.innerHTML = '+';
        filedrag.appendChild(sign);
    }
}

function handleUpload(e) {
    var files = e.target.files || e.dataTransfer.files;
    var filesArray = [];
    JSONarray = [];

    handleDragHover(e);

    for (var i = 0, f; f = files[i]; i++) {
        filesArray.push(f.name);
        createJSON(f.name);
    }

    createSummaryList(filesArray);

    downloadFile(JSONarray);
}

// Parse files
function createJSON(filename) {
    JSONarray.push({
        "name": filename.charAt(0).toUpperCase() + filename.replace(/-/g, " ").replace(/.mp3/g, "").slice(1),
        "filename": filename
    });
}

function handleDragHover(e) {
    e.stopPropagation();
    e.preventDefault();
    filedrag.className = (e.type == "dragover" ? "dragover" : "");
}

// Prepare file to download
function downloadFile(JSONarray) {
    JSONstring = JSON.stringify(JSONarray, null, 4);

    var link = document.createElement('a');
    link.download = JSONfilename;
    var blob = new Blob([JSONstring], {
        type: 'application/json'
    });
    link.href = window.URL.createObjectURL(blob);
    link.click();
}

function showDialog() {
    input.click();
}

function createSummaryList(filesArray) {
    // Clear old list
    while (summary.firstChild) {
        summary.removeChild(summary.firstChild);
    }

    // Create summary list
    var list = document.createElement("ul");
    list.innerHTML = '<li>' + filesArray.join('</li><li>') + '</li>';
    summary.appendChild(list);
}

})();

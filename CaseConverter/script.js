let textArea = document.querySelector('#text');
let upperCase = document.querySelector('#upper-case');
let lowerCase = document.querySelector('#lower-case');
let properCase = document.querySelector('#proper-case');
let sentenceCase = document.querySelector('#sentence-case');
let saveFile = document.querySelector('#save-text-file');


upperCase.addEventListener("click", function () {
    let txt = textArea.value;
    textArea.value = txt.toUpperCase();
});

lowerCase.addEventListener("click", function () {
    let txt = textArea.value;
    textArea.value = txt.toLowerCase();
});

properCase.addEventListener("click", function () {
    let txt = textArea.value;
    let txtPieces = txt.split("");
    let i = 1;
    let newTxt = txtPieces[0].toUpperCase();
    txtPieces.slice(1).forEach(function (item) {
        if (newTxt[i - 1] === " ") {
            newTxt += item.toUpperCase();
        } else {
            newTxt += item.toLowerCase();
        }
        i++;
    })
    textArea.value = newTxt;
});

sentenceCase.addEventListener("click", function () {
    let txt = textArea.value;
    let txtPieces = txt.split("");
    let i = 1;
    let newTxt = txtPieces[0].toUpperCase();
    txtPieces.slice(1).forEach(function (item) {
        if (i > 0 && newTxt[i - 2] === "." && newTxt[i - 1] === " ") {
            newTxt += item.toUpperCase();
        } else {
            newTxt += item.toLowerCase();
        }
        i++;
    })
    textArea.value = newTxt;
});

saveFile.addEventListener("click", function () {
    let txt = textArea.value;
    download("text.txt",txt);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

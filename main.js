document.addEventListener('DOMContentLoaded', function () {
    var
        btnFont = document.querySelector(".font"),
        btnSize = document.querySelector(".size"),
        btnBold = document.querySelector(".bold"),
        btnItalic = document.querySelector(".italic"),
        btnUnderline = document.querySelector(".underline"),
        btnColor = document.querySelector(".color"),
        btnSave = document.querySelector(".save"),
        workSpace = document.querySelector(".workSpace");

    var fontName = document.querySelector(".font-name"),
        sizeName = document.querySelector(".size-name"),
        fontList = document.querySelector(".list-font"),
        sizeList = document.querySelector(".list-size");

    var textEditor = {
        text: "Введите текст...",
        font: "Roboto",
        size: "12pt",
        weight: "normal",
        style: "normal",
        decoration: "none",
        color: "black"
    };

    function openLS() {
        if (localStorage.getItem("textEditor") !== null) {
            textEditor = JSON.parse(localStorage.getItem("textEditor"));
        } else {
            return;
        }
        workSpace.innerHTML = textEditor.text;
        workSpace.style.fontFamily = textEditor.font;
        fontName.innerHTML = textEditor.font;
        workSpace.style.fontSize = textEditor.size;
        sizeName.innerHTML = textEditor.size;
        workSpace.style.fontWeight = textEditor.weight;
        workSpace.style.fontStyle = textEditor.style;
        workSpace.style.textDecoration = textEditor.decoration;
        workSpace.style.color = textEditor.color;
    };
    openLS();

    function toggleList(list, className) {
        return list.classList.toggle(className);
    };

    function selectFont(font) {
        workSpace.style.fontFamily = font;
        fontName.innerHTML = font;
        textEditor.font = font;
    };

    function selectSize(size) {
        workSpace.style.fontSize = size;
        sizeName.innerHTML = size;
        textEditor.size = size;
    };

    btnFont.onclick = function () {
        //openList(fontList);
        toggleList(fontList, "active");
    };

    var arial = document.querySelector("#Arial"),
        comic = document.querySelector("#Comic_Sans"),
        courier = document.querySelector("#Courier"),
        georgia = document.querySelector("#Georgia");

    arial.onclick = function () {
        selectFont("Arial");
    };
    comic.onclick = function () {
        selectFont("Comic Sans");
    };
    courier.onclick = function () {
        selectFont("Courier");
    };
    georgia.onclick = function () {
        selectFont("Georgia");
    };

    btnSize.onclick = function () {
        toggleList(sizeList, "active");
    };

    var pt9 = document.querySelector("#pt9"),
        pt10 = document.querySelector("#pt10"),
        pt11 = document.querySelector("#pt11"),
        pt12 = document.querySelector("#pt12");

    pt9.onclick = function () {
        selectSize("9pt");
    };
    pt10.onclick = function () {
        selectSize("10pt");
    };
    pt11.onclick = function () {
        selectSize("11pt");
    };
    pt12.onclick = function () {
        selectSize("12pt");
    };

    btnBold.onclick = function () {
        //workSpace.style.fontWeight = "bold";
        //textEditor.weight = "bold";
        toggleList(workSpace, "bold");
        /*if((workSpace.className == "bold") !== null) {
            textEditor.weight = "bold";
        } else {
            textEditor.weight = "normal";
        }*/
    }

    btnItalic.onclick = function () {
        //        workSpace.style.fontStyle = "italic";
        //        textEditor.style = "italic";
        toggleList(workSpace, "italic");
    }

    btnUnderline.onclick = function () {
        //        workSpace.style.textDecoration = "underline";
        //        textEditor.decoration = "underline";
        toggleList(workSpace, "underline");
    }

    btnSave.onclick = function () {
        try {
            textEditor.text = workSpace.innerHTML;
            localStorage.setItem('textEditor', JSON.stringify(textEditor));
        } catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                alert('Превышен лимит');
            }
        }
    };
});

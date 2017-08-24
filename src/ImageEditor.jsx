const React = novi.react.React;
const Icon = novi.ui.icon;
const Icons = novi.ui.icons;

const EditorItem = {
    trigger: <Icon>{Icons.ICON_PICTURE}</Icon>,
    tooltip: "Replace Image",
    closeIcon: "submit",
    title: "Replace image",
    onTriggerClick: onClick
};

export default EditorItem;

function onClick(element) {
    let projectDir, src, imgSrc;
    projectDir = element.ownerDocument.querySelector("base").getAttribute("href");
    src = novi.element.getAttribute(element, "src");
    imgSrc = projectDir + src;
    _loadImage(imgSrc).then(ratio => {
        novi.media.choose({onSubmit: onSubmitCrop.bind(this,element), ratio})
    })
}

function onSubmitCrop(element, path){
    novi.element.setAttribute(element, "src", path);
}

function _loadImage(src) {
    return new Promise((resolve, reject) => {
            let img = new Image();
            img.src = src;
            img.onload = function(e){
                let img = e.target;
                let width = img.naturalWidth,
                    height = img.naturalHeight;
                let ratio = width / height;
                resolve(ratio);
            };
        }
    )
}
const React = novi.react.React;
const Icon = novi.ui.icon;
const Icons = novi.ui.icons;
const Types = novi.types;
const Messages = novi.language.getDataByKey("novi-plugin-image");
const EditorItem = {
    trigger: <Icon>{Icons.ICON_PICTURE}</Icon>,
    tooltip: Messages.editor.tooltip,
    closeIcon: "submit",
    title: Messages.editor.title,
    onTriggerClick: onClick
};

export default EditorItem;

function onClick(element) {
    let projectDir, src, imgSrc;
    projectDir = element.ownerDocument.querySelector("base").getAttribute("href");
    src = novi.element.getAttribute(element, "src");
    imgSrc = projectDir + src;
    _loadImage(imgSrc).then((width, height) => {
        novi.media.choose({onSubmit: onSubmitCrop.bind(this,element), width, height, type: Types.mediaImage})
    })
}

function onSubmitCrop(element, path){
    novi.element.setAttribute(element, "src", path);
    novi.element.removeAttribute(element, "srcset");
}

function _loadImage(src) {
    return new Promise((resolve, reject) => {
            let img = new Image();
            img.src = src;
            img.onload = function(e){
                let img = e.target;
                let width = img.naturalWidth,
                    height = img.naturalHeight;

                resolve(width, height);
            };
        }
    )
}
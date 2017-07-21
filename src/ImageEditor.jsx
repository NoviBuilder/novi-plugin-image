const React = novi.react.React;
const Icon = novi.ui.icon;
const Icons = novi.ui.icons;
const modal = novi.modal;
const acceptImages = novi.types.images;

const EditorItem = {
    trigger: <Icon>{Icons.ICON_PICTURE}</Icon>,
    tooltip: "Replace Image",
    closeIcon: "submit",
    title: "Replace image",
    onTriggerClick: onClick
};

export default EditorItem;

function onClick(element) {
    modal.fileUpload({
        path: novi.media.directory,
        accept: acceptImages,
        messages: {
            submit: "Upload Image",
            title: "Upload an image",
            body: 'Click on "Choose File" to upload your image.'
        },
        onSubmitClick: onSubmitClick.bind(this, element)
    })

}

function onSubmitClick(element, path) {
    novi.element.setAttribute(element, "src", path);
}
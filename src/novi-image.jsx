const React = novi.react.React;
import ImageEditor from "./ImageEditor";
import ImageSettings from "./ImageSettings";
import * as ExcerptFunction from "./ExcerptFunction";
const Language = novi.language;
const Plugin = {
    name: "novi-plugin-image",
    title: "Novi Image",
    description: "Novi Image description",
    version: "1.0.7",
    dependencies: {
        novi: "0.9.0"
    },
    defaults: {
        querySelector: "img[src]"
    },
    ui: {
        editor: [ImageEditor],
        settings: <ImageSettings />,
    },
    excerpt : ExcerptFunction.isImageReplaceble,
    onLanguageChange: onLanguageChange
};
function onLanguageChange(plugin){
    let messages = Language.getDataByKey("novi-plugin-image");
    plugin.ui.editor[0].title = messages.editor.title;
    plugin.ui.editor[0].tooltip = messages.editor.tooltip;
    return plugin;
}
novi.plugins.register(Plugin);
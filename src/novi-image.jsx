const React = novi.react.React;
import ImageEditor from "./ImageEditor";
import ImageSettings from "./ImageSettings";
import * as ExcerptFunction from "./ExcerptFunction";

const Plugin = {
    name: "novi-plugin-image",
    title: "Novi Image",
    description: "Novi Image description",
    version: "1.0.4",
    dependencies: {
    },
    defaults: {
        querySelector: "img[src]"
    },
    ui: {
        editor: [ImageEditor],
        settings: <ImageSettings />,
    },
    excerpt : ExcerptFunction.isImageReplaceble
};

novi.plugins.register(Plugin);
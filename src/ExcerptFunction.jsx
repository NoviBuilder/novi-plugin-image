export function isImageReplaceble(element){
    if (!element || !element.hasAttribute("src") || !novi.element.hasAttribute(element, "src")) return false;

    return element.getAttribute("src") === novi.element.getAttribute(element, "src");
}
export function changeCss(oldCssClass, newCssClass){
    webix.html.removeCss(this.$view, oldCssClass);
    webix.html.addCss(this.$view, newCssClass);
}
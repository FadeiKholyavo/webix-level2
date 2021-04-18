export const button = webix.protoUI({
    name:"sortButton",
    $init: function(config){
        const states = config.states;
        const state = config.state;
        if(!state || !states|| Object.keys(states).length == 0 || !Number.isInteger(state)){
            webix.message({
                text:"State or states are undefined",
                type:"error", 
                expire: 1000,
            });
        }else{

            config.value = config.states[config.state].label || "Button";
            webix.html.addCss(this.getNode() ,`${config.states[config.state].css || "green-button"} custom-button`);
            this.attachEvent("onItemClick", function(){

                const statesLength = Object.keys(this.config.states).length;
                const css = Object.values(this.config.states).map(item => {
                    return item.css ? item.css: "green-button";
                });
    
                if(this.config.state == statesLength){
                    this._changeCss(css[this.config.state - 1], css[0]);
                }else{
                    this._changeCss(css[this.config.state - 1] ,css[this.config.state]);
                }
                    
                this.config.state = this.config.state == statesLength ? 1 : ++this.config.state;
                this.config.value = this.config.states[this.config.state].label || "Button";
                    
                this.refresh();
                this.callEvent("onStateChange", [this.config.state]);
        })
        }
    },
    _changeCss(oldCssClass, newCssClass){
        webix.html.removeCss(this.getNode(), oldCssClass);
        webix.html.addCss(this.getNode(), newCssClass);
    }


}, webix.ui.button);
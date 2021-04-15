export const button = webix.protoUI({
    name:"sortButton",
    $init: function(config){
        config.value = config.states[config.state].label;
        webix.html.addCss(this.$view ,`${config.states[config.state].css} custom-button`);

        this.attachEvent("onItemClick", function(){

            const statesLength = Object.keys(this.config.states).length;
            const css = Object.values(this.config.states).map(item => {
                return item.css;
            });

            if(this.config.state == statesLength){
                this._changeCss(css[this.config.state - 1], css[0]);
            }else{
                this._changeCss(css[this.config.state - 1] ,css[this.config.state]);
            }
            
            this.config.state = this.config.state == statesLength ? 1 : ++this.config.state;
            this.config.value = this.config.states[this.config.state].label;
            
            this.refresh();
            this.callEvent("onStateChange", [this.config.state]);


        })
    },
    _changeCss(oldCssClass, newCssClass){
        webix.html.removeCss(this.$view, oldCssClass);
        webix.html.addCss(this.$view, newCssClass);
    }


}, webix.ui.button);
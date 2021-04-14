import {changeCss} from "../extra-functions.js";

export const button = webix.protoUI({
    name:"mybutton",
    states: {
        1: "Off",
        2: "Sort Asc",
        3: "Sort Desc"
    },
    state: 1,
    defaults:{
        on:{
            "onStateChange": function(state){  
                const filmList = $$("filmsList");
                switch(state){
                    case 1:
                        filmList.sort("#id#", "asc");
                        changeCss.call(this, "yellow-button", "green-button");
                        break;
                    case 2:
                        filmList.sort("#title#", "asc");
                        changeCss.call(this, "green-button", "red-button");
                        break;
                    case 3:
                        filmList.sort("#title#", "desc");
                        changeCss.call(this, "red-button", "yellow-button");
                        break;
                }
            }
        }
    },
    $init: function(config){

        config.value = this.states[this.state];
        changeCss.call(this, "webix_secondary", "green-button");

        this.attachEvent("onItemClick", function(){

            this.state = this.state == 3 ? 1 : ++this.state;
            this.config.value = this.states[this.state];

            this.refresh();
            this.callEvent("onStateChange", [this.state]);
        })
    }

}, webix.ui.button);
export const form = webix.protoUI({
    name:"myform",
    $init: function (config) {
        config.elements = this.setFields(config);
    },
    setFields: function(config) {
        const elements = [];
        config.fields.forEach(function(item) {
            elements.push({ view: "text", label: `${item}`, name: `${item}`});
        });
        elements.push({cols: [
            { 
                view: "button", 
                value: "Cancel",
                inputWidth: 200,
                click: config.clearAction || this.defaults.clearAction
            }, 
            { 
                view: "button", 
                value: "Save",
                inputWidth: 200,
                css: "webix_primary",
                align: "right",
                click: config.saveAction || this.defaults.saveAction
            }
        ]});
        return elements;
    },
    defaults:{
       saveAction: function() {
                    webix.message({
                        text:"Form is saved",
                        type:"info", 
                        expire: 1000,
                    })},
       clearAction: function() {
                    webix.message({
                        text:"Form is cleared",
                        type:"info", 
                        expire: 1000,
                    })},
    },
    saveAction_setter: function(value) {
        return value;
    },
    clearAction_setter: function(value) {
        return value;
    }

}, webix.ui.form);
export const list = {
    rows:[
        {
            margin: 20,
            padding: {
                left: 10,
                right: 20
            },
            cols: [
                {
                    view: "label",
                    label: "Sort list:",
                    inputWidth: 100,
                    align: "right"
                },
                {                    
                    view: "sortButton",
                    inputWidth: 100,
                    align: "left",
                    states: {
                        1: {label: "Off", css:"green-button"},
                        2: {label: "Sort Asc", css:"red-button"},
                        3: {label: "Sort Desc", css:"yellow-button"}
                    },
                    state: 1,
                    on:{
                        "onStateChange": function(state){           
                            const list = $$("filmsList");
                            switch(state){
                                case 1:
                                    list.sort("#id#", "asc");
                                    break;
                                case 2:
                                    list.sort("#title#", "asc");
                                    break;
                                case 3:
                                    list.sort("#title#", "desc");
                                    break;
                            }
                        }
                    }
                } 
            ]
        },
        {
            view: "list",
            id: "filmsList",
            url: ("../data/testdata.js"),
            template: "<span class=\"bold\">#id#. #title#</span><br>Year: #year#, rank:#rank#",
            type:{
                height: "auto"
            }
        }
    ]
}
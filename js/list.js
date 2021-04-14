export const list = {
    rows:[
        {
            margin: 40,
            padding: {
                left: 10
            },
            cols: [
                {
                    view: "label",
                    label: "Sort list:",
                    width: 60,
                },
                {                    
                    view: "button",
                    value: "off",
                    width: 100
                }  
            ]

        },
        {
            view: "list",
            url: ("../data/testdata.js"),
            template: "<span class=\"bold\">#id#. #title#</span><br>Year: #year#, rank:#rank#",
            type:{
                height: "auto"
            }
        }
    ]
}
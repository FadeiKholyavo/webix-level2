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
                    align: "left"
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
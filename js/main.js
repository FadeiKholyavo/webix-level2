import {button} from "./mixins/button-mixin.js";
import {form} from "./mixins/form-mixin.js";
import {list} from "./list.js";

webix.ui({
    cols:[
        list,
        {
           view: "autoGeneratedForm",
           fields: ["Fname", "Lname", "Address" ]
        }
    ]
});
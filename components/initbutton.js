import { GCbutton } from "./button"

export let createButton = (name, type, descriptor) => {
    if (type == "button" || type == "dpad" || type == "jstick"){
        console.log("descriptor recognized");
        return(
            <GCbutton/>
          )
    }
    else{
        console.log("The descriptor was not defined correctly");
    }
}

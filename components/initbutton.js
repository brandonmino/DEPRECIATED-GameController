import React from 'react';
import { GCbutton } from "./button"

export let createButton = (name, type, descriptor) => {
    if (type == "Button" || type == "dpad" || type == "jstick"){
        console.log("descriptor recognized");
        return(
            <GCbutton/>
          )
    }
    else{
        console.log("The descriptor was not defined correctly");
    }
}

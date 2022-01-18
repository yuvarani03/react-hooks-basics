//useContext

import React, { createContext, useContext, useState} from "react";
const themes={
    light:{
        foreground:'#000000',
        background:'#eeeeee'
    },
    dark:{
        foreground:'#ffffff',
        background:'#20d489'
    }
}
const ThemeContext = createContext(themes.light)
function Pro6(){
const[themesStyle,setThemeStyle] = useState(themes.dark);
var handleThemeStyle=()=>{
    setThemeStyle(themesStyle === themes.dark?themes.light:themes.dark)
}

var ThemeButton=()=>{
    const theme=useContext(ThemeContext);
    return(
    <div style={{background:theme.background, color:theme.foreground}}>
        <h2>Hello Guys!</h2>
    </div>
    )
}
return(
    <ThemeContext.Provider value={themesStyle}>
        <ThemeButton></ThemeButton>
        <button onClick={handleThemeStyle}> Change Themes</button>
    </ThemeContext.Provider>
)
}

export default Pro6
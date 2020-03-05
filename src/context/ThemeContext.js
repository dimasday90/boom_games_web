import React from "react";

const ThemeContext = React.createContext({
    phantom: false,
    toggle: () => {}
})

export default ThemeContext
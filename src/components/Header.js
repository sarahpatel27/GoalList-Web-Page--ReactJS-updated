import React from "react";

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className="header">
            <button 
            onClick={() => 
                handleToggleDarkMode(
                    (previousDarkMode) => !previousDarkMode)
                    }
                     className="save">Toggle Mode</button>
        </div>
    );
};

export default Header;
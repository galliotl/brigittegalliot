import React from 'react';

import {NavbarContainer, NavbarIcon} from './styled';

const Navbar: React.FC<{}> = ({children}) => {
    return (
        <NavbarContainer>
            <NavbarIcon />
            {children}
        </NavbarContainer>
    );
};

export default Navbar;
import React from 'react';

// TODO: What will be in our LoginInterface?
interface NavbarInterface {
    selected: string;
}

const Navbar : React.FC<NavbarInterface> = ({ selected }) => {
    return (
        <div>
            <p> navbar: {selected} </p>
        </div>
    )
}

export default Navbar;
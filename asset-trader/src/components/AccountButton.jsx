import { useState } from "react";
import { Dropdown, Image, DropdownItem, DropdownMenu, DropdownToggle, DropdownDivider } from "react-bootstrap";
import { Link } from "react-router-dom";

function AccountButton({ isLoggedIn, toggleLogin }) {
    let accountMenu;

    if (isLoggedIn) {
        accountMenu = (
            <DropdownMenu>
                <DropdownItem>
                    My Account
                </DropdownItem>
                <DropdownDivider></DropdownDivider>
                <DropdownItem onClick={toggleLogin}>
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        );
    } else {
        accountMenu = (
            <DropdownMenu >
                <DropdownItem onClick={toggleLogin}>
                    Sign In
                </DropdownItem>
                <DropdownDivider></DropdownDivider>
                <DropdownItem className="no-underline">
                    <Link to='/create-account'>Create an Account</Link>
                </DropdownItem>

            </DropdownMenu>
        );
    }

    return (
        <Dropdown drop="start" id="account-dropdown-menu">
            <DropdownToggle variant="">
                <Image src="/account icon.png" style={{ width: '60px', height: '60px' }} />
            </DropdownToggle>
            {accountMenu}
        </Dropdown>
    );
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const toggleLogin = () => {
        setIsLoggedIn(prevState => !prevState);
    };

    return (
        <div>
            <AccountButton isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
        </div>
    );
}

export default App;

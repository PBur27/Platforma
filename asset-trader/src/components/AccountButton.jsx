import { Dropdown, Image, DropdownItem, DropdownMenu, DropdownToggle, DropdownDivider } from "react-bootstrap";
import { Link } from "react-router-dom";

function AccountButton({ isLoggedIn, toggleLogin }) {
    let accountMenu;

    if (isLoggedIn) {
        accountMenu = (
            <DropdownMenu>
                <DropdownItem href="/my-account">
                    My Account
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem onClick={() => toggleLogin(false)}>
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        );
    } else {
        accountMenu = (
            <DropdownMenu>
                <DropdownItem href="/login">
                    Sign In
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem className="no-underline" href="/create-account">
                    Create an Account
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

export default AccountButton;

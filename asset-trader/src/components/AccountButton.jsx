import { Dropdown, Image, DropdownItem, DropdownMenu, DropdownToggle, DropdownDivider } from "react-bootstrap";


function AccountButton({isLoggedIn}) {

    let accountMenu;

    if (isLoggedIn) {
        accountMenu = (
        <DropdownMenu>
                <DropdownItem>
                    My Account
                </DropdownItem>
                <DropdownDivider></DropdownDivider>
                <DropdownItem>
                    Log Out
                </DropdownItem>
            </DropdownMenu>);
    }
    else{
        accountMenu = (
            <DropdownMenu>
                <DropdownItem>
                    Sign In
                </DropdownItem>
                <DropdownItem>
                    Sign Up
                </DropdownItem>
                <DropdownDivider></DropdownDivider>
                <DropdownItem>
                    Create an Account
                </DropdownItem>
            </DropdownMenu>);
        
    }

    return (
        <Dropdown drop="start">
            <DropdownToggle variant="">
                <Image src="/account icon.png" style={{ width: '60px', height: '60px' }}></Image>
            </DropdownToggle>
            {accountMenu}
        </Dropdown>
    );

}

export default AccountButton;
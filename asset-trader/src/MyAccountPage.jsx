import { useEffect, useState } from "react";
import { Container, Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MyAccountPage() {
    const [username, setUsername] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Get the username from localStorage
        const storedUsername = localStorage.getItem("username");
        
        if (storedUsername) {
            setUsername(storedUsername);
        } else {
            // Redirect to login page if no username is found in localStorage
            navigate("/login");
        }
    }, [navigate]);

    const handleLogout = () => {
        // Clear login data from localStorage
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        navigate("/login"); // Redirect to login page after logout
    };

    return (
        <Container style={{ maxWidth: "400px", marginTop: "50px" }}>
            <h2 className="text-center mb-4">My Account</h2>
            {username ? (
                <>
                    <Alert variant="info" className="mb-4">
                        Welcome, {username}!
                    </Alert>
                    <Button variant="danger" onClick={handleLogout} className="w-100">
                        Logout
                    </Button>
                </>
            ) : (
                <Alert variant="danger">You are not logged in!</Alert>
            )}
        </Container>
    );
}

export default MyAccountPage;

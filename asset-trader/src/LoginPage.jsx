import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

const LoginPage = ({ toggleLogin }) => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
    
        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Login failed");
    
            // Store the username in localStorage upon successful login
            localStorage.setItem("username", formData.email);  // Assuming email is the username
            localStorage.setItem("isLoggedIn", true);
    
            setSuccess("Login successful!");
            toggleLogin(true); // Set isLoggedIn to true after successful login
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <Container style={{ maxWidth: "400px", marginTop: "50px" }}>
            <h2 className="text-center mb-4">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default LoginPage;

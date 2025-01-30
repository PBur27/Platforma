import { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";

const CreateAccountForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [serverError, setServerError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset previous messages
        setSuccessMessage("");
        setServerError("");
        setErrors({});

        // Basic validation
        const newErrors = {};
        if (!formData.username) newErrors.username = "Username is required.";
        if (!formData.email) newErrors.email = "Email is required.";
        if (!/\S+@\S+\.\S+/.test(formData.email))
            newErrors.email = "Enter a valid email.";
        if (!formData.password) newErrors.password = "Password is required.";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "Passwords do not match.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            // Send data to backend
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            // Show success message
            setSuccessMessage("Account created successfully!");

            // Reset form fields
            setFormData({
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
            });
        } catch (error) {
            setServerError(error.message);
        }
    };

    return (
        <Container style={{ maxWidth: "500px", marginTop: "50px" }}>
            <h2 className="text-center mb-4">Create an Account</h2>
            {successMessage && <Alert variant="success" className="text-center">{successMessage}</Alert>}
            {serverError && <Alert variant="danger" className="text-center">{serverError}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername" className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        value={formData.username}
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                    />
                    <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formData.password}
                        onChange={handleChange}
                        isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="formConfirmPassword" className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                    Create Account
                </Button>
            </Form>
        </Container>
    );
};

export default CreateAccountForm;

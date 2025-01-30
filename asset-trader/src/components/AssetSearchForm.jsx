import React, { useState } from "react";
import { Button, Card, Form, Row, Col, Accordion, AccordionBody } from "react-bootstrap";

function AssetSearchForm({ onSearch }) {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [tags, setTags] = useState([]);

  // Handle tag selection
  const handleTagChange = (tag) => {
    setTags((prevTags) => {
      if (prevTags.includes(tag)) {
        // If tag is already selected, remove it
        return prevTags.filter((t) => t !== tag);
      } else {
        // If tag is not selected, add it
        return [...prevTags, tag];
      }
    });
  };

  // Handle form submission
  const processAssetData = (event) => {
    event.preventDefault();

    // Pass the form values to the parent component (onSearch callback)
    onSearch({
      name,
      author,
      tags
    });

    // Reset the form after submission (optional)
    setName('');
    setAuthor('');
    setTags([]);
  };

  return (
    <Form onSubmit={processAssetData} id="asset-search-form">
      {/* Name Field */}
      <Form.Group controlId="name" className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      {/* Author Field */}
      <Form.Group controlId="author" className="mb-3">
        <Form.Label>Author</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search by author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Group>

      {/* Tags Checklist */}
      <Form.Group controlId="tags" className="mb-3">
        <Accordion defaultActiveKey={0}>
          <Accordion.Header>Tags</Accordion.Header>
          <Accordion.Body>
          <Row className="mb-2">
            {['2D', '3D'].map((tag) => (
              <Col key={tag}>
                <Form.Check
                  type="checkbox"
                  label={tag}
                  checked={tags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                />
              </Col>
            ))}
          </Row>
          </Accordion.Body>
        </Accordion>
      </Form.Group>

      <Button type="submit" variant="primary">Search</Button>
    </Form>
  );
}

export default AssetSearchForm;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'


function AssetSearchForm({ onSearch }) {
  // State to manage input values
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [top, setTop] = useState(false);
  const [tags, setTags] = useState('');

  // Handle form submission
  const processAssetData = (event) => {
    event.preventDefault();

    // Pass the form values to the parent component (onSearch callback)
    onSearch({
      name,
      author,
      top,
      tags
    });

    // Reset the form after submission (optional)
    setName('');
    setAuthor('');
    setTop(false);
    setTags('');
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

    {/* Top Checkbox */}
    <Form.Group controlId="top" className="mb-3">
      <Form.Check
        type="checkbox"
        label="Top"
        checked={top}
        onChange={(e) => setTop(e.target.checked)}
      />
    </Form.Group>

    {/* Tags Dropdown */}
    <Form.Group controlId="tags" className="mb-3">
      <Form.Label>Tags</Form.Label>
      <Form.Select value={tags} onChange={(e) => setTags(e.target.value)}>
        <option value="">Select Tag</option>
        <option value="2D">2D</option>
        <option value="3D">3D</option>
      </Form.Select>
    </Form.Group>

    {/* Submit Button */}
    <Button type="submit" variant="primary">
      Search
    </Button>
  </Form>
  );
}

export default AssetSearchForm;
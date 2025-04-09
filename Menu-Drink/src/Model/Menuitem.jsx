import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Menuitem({ show, handleClose, onItemAdded }) {
    const [menuName, setMenuName] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [menuOptions, setMenuOptions] = useState([]);

    useEffect(() => {
        const fetchMenus = async () => {
            try {
                const res = await fetch('https://menu-drinks-backed.onrender.com/api/menu');
                const data = await res.json();
                setMenuOptions(data);
            } catch (err) {
                console.error("Failed to load menu list:", err);
            }
        };

        if (show) fetchMenus();
    }, [show]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newItem = {
            menuName,
            name,
            description,
            price: parseFloat(price),
        };

        try {
            const res = await fetch('https://menu-drinks-backed.onrender.com/api/MenuItem', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newItem),
            });

            if (res.ok) {
                console.log("Item saved successfully");
                setMenuName('');
                setName('');
                setDescription('');
                setPrice('');
                handleClose(); // close modal
                onItemAdded?.(); // notify parent to refresh data
            } else {
                console.error("Failed to save item");
            }
        } catch (error) {
            console.error("Error submitting item:", error);
        }
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="menuSelect">
                        <Form.Label>Menu Name</Form.Label>
                        <Form.Select
                            value={menuName}
                            onChange={(e) => setMenuName(e.target.value)}
                            required
                        >
                            <option value="">Select a menu</option>
                            {menuOptions.map((menu) => (
                                <option key={menu._id} value={menu.menuName}>
                                    {menu.menuName}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="itemName">
                        <Form.Label>Item Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter item name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="itemDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter item description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="itemPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" type="submit">Submit</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default Menuitem;

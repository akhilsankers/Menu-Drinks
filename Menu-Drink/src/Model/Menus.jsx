import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MenuItem from './Menuitem';

function Menu({ show, handleClose, onMenuAdded }) {
    const [menuName, setMenuName] = useState('');
    const [description, setDescription] = useState('');
    const [showMenuItemModal, setShowMenuItemModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newMenu = {
            menuName,
            description,
        };

        try {
            const res = await fetch('https://menu-drinks-backed.onrender.com/api/menu', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newMenu),
            });

            if (res.ok) {
                setMenuName('');
                setDescription('');
                handleClose();
                setShowMenuItemModal(true);
                onMenuAdded?.(); // 🔥 refresh parent
            } else {
                console.error("Failed to save menu");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    const handleCloseMenuItemModal = () => {
        setShowMenuItemModal(false);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Menu</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Menu Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter menu name"
                                value={menuName}
                                onChange={(e) => setMenuName(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            {showMenuItemModal && (
                <MenuItem show={showMenuItemModal} handleClose={handleCloseMenuItemModal} />
            )}
        </>
    );
}

export default Menu;

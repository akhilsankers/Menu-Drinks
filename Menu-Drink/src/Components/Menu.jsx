import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../Style/Menu.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';

function Menu({ refresh }) {
    const [menuOptions, setMenuOptions] = useState([]);
    const [menuItems, setMenuItems] = useState([]);
    const [selectedMenuName, setSelectedMenuName] = useState(null);
    const [filteredItems, setFilteredItems] = useState([]);

    const fetchMenus = async () => {
        try {
            const res = await fetch('https://menu-drinks-backed.onrender.com/api/menu');
            const data = await res.json();
            setMenuOptions(data);
        } catch (err) {
            console.error("Failed to load menu list:", err);
        }
    };

    const fetchMenuItems = async () => {
        try {
            const res = await fetch('https://menu-drinks-backed.onrender.com/api/MenuItem');
            const data = await res.json();
            setMenuItems(data);
        } catch (err) {
            console.error("Failed to load menu items:", err);
        }
    };

    useEffect(() => {
        fetchMenus();
        fetchMenuItems();
    }, [refresh]);

    // Automatically filter items when menuItems or selectedMenuName changes
    useEffect(() => {
        if (selectedMenuName && menuItems.length) {
            const items = menuItems.filter(item => item.menuName === selectedMenuName);
            setFilteredItems(items);
        }
    }, [menuItems, selectedMenuName]);

    const handleMenuClick = (menuName) => {
        setSelectedMenuName(menuName);
    };

    return (
        <div>
            <div className="menu text-center p-3">
                {menuOptions.length > 0 ? (
                    menuOptions.map((menu, index) => (
                        <Button
                            key={index}
                            className={`custom-button m-2 ${selectedMenuName === menu.menuName ? 'active' : ''}`}
                            onClick={() => handleMenuClick(menu.menuName)}
                        >
                            {menu.menuName.toUpperCase()}
                        </Button>
                    ))
                ) : (
                    <Button className="custom-button m-2">
                        No Menus Available
                    </Button>
                )}
            </div>

            <div className="content">
                <div className="menu-content text-center position-relative">
                    <img src={img1} alt="Top Left" className="img-top-left" />

                    <div className="discription">
                        <div className="d-flex align-items-center justify-content-center lin">
                            <div className="flex-grow-1 border-top me-3"></div>
                            <h2 className="mb-0">
                                {selectedMenuName ? selectedMenuName.toUpperCase() + " MENU" : "MENU"}
                            </h2>
                            <div className="flex-grow-1 border-top ms-3"></div>
                        </div>

                        <div className="mt-5 px-3 px-md-5 text-start">
                            {filteredItems.length > 0 ? (
                                <div className="row">
                                    {filteredItems.map((item, idx) => (
                                        <div key={idx} className="col-md-6 mb-4">
                                            <div className="p-3 h-100 rounded">
                                                <div className="d-flex justify-content-between fw-bold">
                                                    <span>{item.name}</span>
                                                    <span>${item.price.toFixed(2)}</span>
                                                </div>
                                                <div className="mt-2"style={{ color: '#606060' }}>
                                                    {item.description}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                selectedMenuName && (
                                    <p className="text-center">No items available for this menu.</p>
                                )
                            )}
                        </div>
                    </div>

                    <img src={img2} alt="Bottom Right" className="img-bottom-right" />
                </div>
            </div>
        </div>
    );
}

export default Menu;

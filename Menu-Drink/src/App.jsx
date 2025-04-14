import React, { useState } from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Footer from './Components/Footer'

function App() {
    const [refresh, setRefresh] = useState(false);

    const handleDataChanged = () => {
        setRefresh(prev => !prev);
    };

    return (
        <div>
            <Header onMenuAdded={handleDataChanged} onItemAdded={handleDataChanged} />
            <Menu refresh={refresh} />
            <Footer/>
        </div>
    );
}

export default App;

import React, { useState } from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';

function App() {
    const [refresh, setRefresh] = useState(false);

    const handleDataChanged = () => {
        setRefresh(prev => !prev);
    };

    return (
        <div>
            <Header onMenuAdded={handleDataChanged} onItemAdded={handleDataChanged} />
            <Menu refresh={refresh} />
        </div>
    );
}

export default App;

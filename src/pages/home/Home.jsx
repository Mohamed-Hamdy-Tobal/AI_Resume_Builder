import React, { useState } from 'react';
import { ColorPicker } from '@/components/ui/color-picker';

const Home = () => {
    const [color, setColor] = useState('#FFFFFF'); // Default color state

    return (
        <div>
            <div className="container">
                <ColorPicker
                    value={color}
                    onChange={setColor} // Update state when color changes
                />
                <p>Selected Color: {color}</p>
            </div>
        </div>
    );
};

export default Home;

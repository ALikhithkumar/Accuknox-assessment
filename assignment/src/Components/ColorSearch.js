// components/ColorSearch.js

import React, { useState } from 'react';
import colorsData from './colors.json';

function ColorSearch() {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredColors = colorsData.filter(color =>
        color.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2>Color Search</h2>
            <input
                type="text"
                placeholder="Search colors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="color-list">
                {filteredColors.map((color, index) => (
                    <div key={index} className="color-card" style={{ backgroundColor: color.hex }}>
                        <p>{color.name}</p>
                        <p>{color.hex}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ColorSearch;

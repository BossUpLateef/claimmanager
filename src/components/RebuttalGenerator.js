// src/components/RebuttalGenerator.js
import React, { useState } from 'react';

function RebuttalGenerator() {
  const [state, setState] = useState('');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Roofing Rebuttal Generator</h1>
      
      <div>
        <label className="block mb-2">State</label>
        <select 
          value={state} 
          onChange={(e) => setState(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select a State</option>
          <option value="Florida">Florida</option>
          <option value="California">California</option>
        </select>
      </div>
    </div>
  );
}

export default RebuttalGenerator;
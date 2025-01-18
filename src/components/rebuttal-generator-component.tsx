// src/components/RebuttalGenerator.tsx
import React, { useState, useMemo } from 'react';
import { generateRebuttal, trackSuccessfulRebuttal } from '../utils/rebuttalHelpers';

const RebuttalGenerator: React.FC = () => {
  // State for form inputs
  const [state, setState] = useState('');
  const [carrier, setCarrier] = useState('');
  const [deniedItem, setDeniedItem] = useState('');
  const [carrierReason, setCarrierReason] = useState('');

  // State for rebuttal results
  const [rebuttalResults, setRebuttalResults] = useState<any>(null);

  // Generate rebuttal when conditions are met
  const handleGenerateRebuttal = () => {
    const rebuttal = generateRebuttal({
      state,
      carrier,
      deniedItem,
      carrierReason
    });

    if (rebuttal) {
      setRebuttalResults(rebuttal);
    }
  };

  // Mark rebuttal as successful
  const handleMarkSuccessful = () => {
    if (rebuttalResults) {
      trackSuccessfulRebuttal(rebuttalResults);
      alert('Rebuttal marked as successful!');
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Roofing Rebuttal Generator</h1>

      {/* State Selection */}
      <div className="mb-4">
        <label className="block mb-2">State</label>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select State</option>
          <option value="Florida">Florida</option>
          <option value="California">California</option>
          <option value="Texas">Texas</option>
        </select>
      </div>

      {/* Carrier Selection */}
      <div className="mb-4">
        <label className="block mb-2">Insurance Carrier</label>
        <select
          value={carrier}
          onChange={(e) => setCarrier(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Carrier</option>
          <option value="State Farm">State Farm</option>
          <option value="Allstate">Allstate</option>
        </select>
      </div>

      {/* Denied Item Selection */}
      <div className="mb-4">
        <label className="block mb-2">Denied Item</label>
        <select
          value={deniedItem}
          onChange={(e) => setDeniedItem(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Denied Item</option>
          <option value="deck_repair">Deck Repair</option>
        </select>
      </div>

      {/* Carrier Reason Selection */}
      <div className="mb-4">
        <label className="block mb-2">Carrier's Reason</label>
        <select
          value={carrierReason}
          onChange={(e) => setCarrierReason(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Reason</option>
          <option value="spot_repair">Spot Repair</option>
        </select>
      </div>

      {/* Generate Rebuttal Button */}
      <button
        onClick={handleGenerateRebuttal}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mb-4"
        disabled={!state || !carrier || !deniedItem || !carrierReason}
      >
        Generate Rebuttal
      </button>

      {/* Rebuttal Results */}
      {rebuttalResults && (
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-2">Rebuttal Details</h2>
          
          <div className="mb-2">
            <strong>Code:</strong> {rebuttalResults.code}
          </div>
          
          <div className="mb-2">
            <strong>Rebuttal:</strong> {rebuttalResults.rebuttal}
          </div>
          
          <div className="mb-2">
            <strong>Evidence Needed:</strong>
            <ul className="list-disc pl-5">
              {rebuttalResults.evidence.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Mark as Successful Button */}
          <button
            onClick={handleMarkSuccessful}
            className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 mt-2"
          >
            Mark as Successful
          </button>
        </div>
      )}
    </div>
  );
};

export default RebuttalGenerator;

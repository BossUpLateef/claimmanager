// src/data/states.ts
import { StateData } from '../types';

export const STATES_DATA: Record<string, StateData> = {
  "Alabama": { "IRC": "2015" },
  "Alaska": { "IRC": "2018" },
  "Arizona": { "IRC": "2018" },
  "Arkansas": { "IRC": "2021" },
  "California": { "IRC": "2021" },
  // ... other states
  "Wyoming": { "IRC": "N/A" },
  "District of Columbia": { "IRC": "N/A" }
};

// Sorted list of states for dropdown
export const STATES = Object.keys(STATES_DATA).sort();

// Carriers list
export const CARRIERS = [
  "Allstate",
  "American Family",
  "Auto-Owners",
  "Cincinnati Insurance",
  "Farmers",
  "Liberty Mutual",
  "MetLife",
  "Nationwide",
  "Progressive",
  "Safeco",
  "State Farm",
  "Travelers",
  "USAA",
  "Other"
].sort();

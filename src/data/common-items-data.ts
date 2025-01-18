// src/data/commonItems.ts
import { CodeItem } from '../types';

export const COMMON_ITEMS: Record<string, CodeItem> = {
  "deck_repair": {
    name: "Deck Repair/Replacement",
    codes: {
      "2015": "R803.1",
      "2018": "R803.1",
      "2021": "R803.1"
    },
    stateVariations: {
      "Florida": "Enhanced nailing patterns required",
      "Coastal Regions": "Higher grade materials required"
    },
    commonDenials: {
      "spot_repair": {
        rebuttal: "IRC {code} requires proper substrate for roof covering. Spot repairs cannot ensure deck integrity and proper fastener holding.",
        evidence: [
          "Core samples",
          "Moisture meter readings",
          "Deflection measurements",
          "Pull-through tests",
          "Photos of deterioration"
        ],
        carrierSpecific: {
          "State Farm": "Focus on structural integrity",
          "Allstate": "Document safety concerns",
          "Liberty Mutual": "Include engineer findings"
        }
      },
      "overlay_acceptable": {
        rebuttal: "IRC {code} requires sound substrate. Overlaying deteriorated deck violates code and manufacturer requirements.",
        evidence: [
          "Engineer report",
          "Load calculations",
          "Building department requirements",
          "Manufacturer specifications"
        ],
        carrierSpecific: {
          "State Farm": "Emphasize long-term structural concerns",
          "Allstate": "Document code compliance issues"
        }
      }
    }
  },
  "valley_metal": {
    name: "Valley Metal",
    codes: {
      "2015": "R905.2.8.2",
      "2018": "R905.2.8.2",
      "2021": "R905.2.8.2"
    },
    stateVariations: {
      "Northeast": "Enhanced ice protection required",
      "Florida": "Hurricane zone specifications"
    },
    commonDenials: {
      "closed_valley_acceptable": {
        rebuttal: "Open metal valley required per manufacturer specifications and local best practices for warranty coverage.",
        evidence: [
          "Manufacturer specifications",
          "Local jurisdiction requirements",
          "Industry standards",
          "Warranty documentation"
        ],
        carrierSpecific: {
          "State Farm": "Focus on proper water channeling",
          "Allstate": "Document historical valley leaks"
        }
      }
    }
  }
};

// List of common items for dropdown
export const COMMON_ITEM_KEYS = Object.keys(COMMON_ITEMS).sort();

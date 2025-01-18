// src/utils/rebuttalHelpers.ts

// Define basic types for type safety
interface StateData {
  IRC: string;
}

interface DenialScenario {
  rebuttal: string;
  evidence: string[];
  carrierSpecific?: Record<string, string>;
}

interface CodeItem {
  name: string;
  codes: Record<string, string>;
  stateVariations?: Record<string, string>;
  commonDenials: Record<string, DenialScenario>;
}

interface RebuttalData {
  code: string;
  rebuttal: string;
  evidence: string[];
  stateSpecific?: string | null;
  carrierSpecific?: string | null;
}

// Mock data (you'd typically import these from separate files)
const STATES_DATA: Record<string, StateData> = {
  "Florida": { IRC: "2021" },
  "California": { IRC: "2018" },
  "Texas": { IRC: "2015" }
};

const COMMON_ITEMS: Record<string, CodeItem> = {
  "deck_repair": {
    name: "Deck Repair/Replacement",
    codes: {
      "2015": "R803.1",
      "2018": "R803.1",
      "2021": "R803.1"
    },
    stateVariations: {
      "Florida": "Enhanced nailing patterns required",
      "California": "Seismic considerations mandatory"
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
          "Allstate": "Document safety concerns"
        }
      }
    }
  }
};

// Main rebuttal generation function
export function generateRebuttal(params: {
  state: string;
  carrier: string;
  deniedItem: string;
  carrierReason: string;
}): RebuttalData | null {
  const { state, carrier, deniedItem, carrierReason } = params;

  // Validate inputs
  if (!state || !carrier || !deniedItem || !carrierReason) {
    return null;
  }

  // Get state IRC version
  const stateData = STATES_DATA[state];
  if (!stateData) {
    return null;
  }

  // Get common item details
  const itemData = COMMON_ITEMS[deniedItem];
  if (!itemData) {
    return null;
  }

  // Get code section
  const codeSection = itemData.codes[stateData.IRC];
  if (!codeSection) {
    return null;
  }

  // Get denial scenario
  const denialData = itemData.commonDenials[carrierReason];
  if (!denialData) {
    return null;
  }

  // Prepare rebuttal data
  return {
    code: codeSection,
    rebuttal: denialData.rebuttal.replace("{code}", codeSection),
    evidence: denialData.evidence,
    stateSpecific: itemData.stateVariations?.[state] || null,
    carrierSpecific: denialData.carrierSpecific?.[carrier] || null
  };
}

// Utility function to track successful rebuttals
export function trackSuccessfulRebuttal(rebuttalData: RebuttalData): void {
  try {
    // Get existing rebuttals from local storage
    const existingRebuttals = JSON.parse(
      localStorage.getItem('successfulRebuttals') || '[]'
    );

    // Add new rebuttal
    const newRebuttal = {
      ...rebuttalData,
      date: new Date().toISOString()
    };

    // Save updated list
    localStorage.setItem(
      'successfulRebuttals', 
      JSON.stringify([...existingRebuttals, newRebuttal])
    );
  } catch (error) {
    console.error('Error tracking successful rebuttal:', error);
  }
}

// Function to retrieve successful rebuttals
export function getSuccessfulRebuttals(): RebuttalData[] {
  try {
    return JSON.parse(
      localStorage.getItem('successfulRebuttals') || '[]'
    );
  } catch (error) {
    console.error('Error retrieving successful rebuttals:', error);
    return [];
  }
}

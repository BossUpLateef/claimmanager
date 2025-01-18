// src/data/manufacturers.ts
import { ManufacturerSpec } from '../types';

export const MANUFACTURER_SPECS: Record<string, ManufacturerSpec> = {
  "Atlas": {
    starter_requirements: "Pro-Cut® Starter Shingles required for enhanced warranty",
    ice_water_requirements: "Weather-Master® Ice & Water required for warranty",
    ventilation_requirements: "High-Performance ventilation required for warranty",
    technical_specs: {
      nail_zone: "Specified fastening area only",
      drip_edge: "1.5 inch minimum horizontal leg",
      overlap: "4 inch end lap, 6 inch in valleys",
      wind_warranty: "130 mph with enhanced installation"
    }
  },
  "CertainTeed": {
    starter_requirements: "SwiftStart® required for 5-star warranty",
    ice_water_requirements: "WinterGuard® required for enhanced warranty",
    ventilation_requirements: "Ridge Vent 7 required for max warranty",
    technical_specs: {
      nail_zone: "Specific nail line requirements",
      drip_edge: "2 inch minimum horizontal leg",
      overlap: "4 inch end lap, 6 inch valley",
      wind_warranty: "Enhanced warranty requires specific pattern"
    }
  },
  "GAF": {
    starter_requirements: "GAF StarterMatch™ or WeatherBlocker™ required for enhanced warranty",
    ice_water_requirements: "WeatherWatch® or StormGuard® required for Golden Pledge",
    ventilation_requirements: "Cobra® ridge vent required for warranty",
    technical_specs: {
      nail_zone: "Requires nailing within marked zone only",
      drip_edge: "1.5 inch minimum horizontal leg",
      overlap: "4 inch end lap, 6 inch in valleys",
      wind_warranty: "Required starter and 6 nails for max wind coverage"
    }
  },
  "Owens Corning": {
    starter_requirements: "WeatherLock® Starter required for Platinum warranty",
    ice_water_requirements: "WeatherLock® required for ice dam protection",
    ventilation_requirements: "VentSure® required for system warranty",
    technical_specs: {
      nail_zone: "SureNail® Technology zone required",
      drip_edge: "2 inch minimum horizontal leg",
      overlap: "4 inch end lap, 6 inch valley",
      wind_warranty: "Enhanced nailing pattern for high wind"
    }
  }
};

// List of manufacturers for dropdown
export const MANUFACTURERS = Object.keys(MANUFACTURER_SPECS).sort();

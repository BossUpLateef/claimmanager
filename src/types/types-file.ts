// src/types/index.ts
export type CodeVersion = "2015" | "2018" | "2021" | "N/A";

export interface StateData {
  IRC: CodeVersion;
}

export interface TechnicalSpecs {
  nail_zone: string;
  drip_edge: string;
  overlap: string;
  wind_warranty: string;
}

export interface ManufacturerSpec {
  starter_requirements: string;
  ice_water_requirements: string;
  ventilation_requirements: string;
  technical_specs: TechnicalSpecs;
}

export interface CarrierSpecific {
  [carrier: string]: string;
}

export interface DenialScenario {
  rebuttal: string;
  evidence: string[];
  carrierSpecific: CarrierSpecific;
}

export interface CommonDenials {
  [key: string]: DenialScenario;
}

export interface StateVariations {
  [state: string]: string;
}

export interface CodeItem {
  name: string;
  codes: {
    [version in CodeVersion]?: string;
  };
  stateVariations: StateVariations;
  commonDenials: CommonDenials;
}

export interface RebuttalData {
  code: string;
  rebuttal: string;
  evidence: string[];
  stateSpecific: string | null;
  carrierSpecific: string | null;
  manufacturerReq: ManufacturerSpec | null;
  state: string;
  carrier: string;
  manufacturer: string | null;
}

export interface SuccessfulRebuttal {
  state: string;
  carrier: string;
  deniedItem: string;
  carrierReason: string;
  manufacturer: string | null;
  date: string;
  rebuttalText: string;
  code: string;
}

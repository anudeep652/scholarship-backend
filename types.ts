export type TuTenth = {
  name: string;
  state: string;
  parentOccupation: string;
  marksPercentage: number;
  annualIncome: number;
  isGirl: boolean;
  isSpecialCategory: boolean;
  maximumFamilySiblings: number;
  Nationality: string;
};

export type TaTenth = {
  name: string;
  state: string;
  parentOccupation: string;
  marksPercentage: number;
  annualIncome: number;
  isGirl: boolean;
  isSpecialCategory: boolean;
  maximumFamilySiblings: number;
  Nationality: string;
  community: string;
};

export type Tug = {
  name: string;
  state: string;
  parentOccupation: string;
  marksPercentage: number;
  annualIncome: number;
  isGirl: boolean;
  eligibility: string;
  benefits: string;
  documents: string;
  link: string;
  lastDate: string;
  isFromMinorCommunity: boolean;
  maximumFamilySiblings: number;
  Nationality: string;
  community: string;
  ageGrp: number;
  yearOfStudy: number;
  isSpecialCategory?: boolean;
};

export type Tpg = {
  name: string;
  state: string;
  parentOccupation: string;
  marksPercentage: number;
  annualIncome: number;
  isGirl: boolean;
  isFromMinorCommunity: boolean;
  maximumFamilySiblings: number;
  Nationality: string;
  community: string;
  ageGrp: number;
  yearOfStudy: number;
  isSpecialCategory?: boolean;
};

export type TDiploma = {
  name: string;
  state: string;
  parentOccupation: string;
  marksPercentage: number;
  annualIncome: number;
  isGirl: boolean;
  isDifferentlyAbled: boolean;
  isFromMinorCommunity: boolean;
  maximumFamilySiblings: number;
  Nationality: string;
  community: string;
  ageGrp: number;
  isSpecialCategory?: boolean;
};

export enum Grade {
  UTENTH = "UTENTH",
  ATENTH = "ATENTH",
  UG = "UG",
  PG = "PG",
  DIPLOMA = "DIPLOMA",
}

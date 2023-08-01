export type TuTenth = {
  name: string;
  state: string;
  parentOccupation: string[];
  marksPercentage: number;
  annualIncome: number;
  shouldBeGirl: boolean;
  eligibility: string;
  benefits: string;
  documents: string;
  forSpecialCategory: boolean;
  link: string;
  lastDate: string;
  maximumFamilySiblings: number;
  Nationality: string;
};

export type TaTenth = {
  name: string;
  state: string;
  parentOccupation: string[];
  marksPercentage: number;
  annualIncome: number;
  shouldBeGirl: boolean;
  eligibility: string;
  benefits: string;
  documents: string;
  forSpecialCategory: boolean;
  link: string;
  lastDate: string;
  maximumFamilySiblings: number;
  Nationality: string;
  community: string;
};

export type Tug = {
  name: string;
  state: string;
  parentOccupation: string[];
  marksPercentage: number;
  annualIncome: number;
  shouldBeGirl: boolean;
  eligibility: string;
  benefits: string;
  documents: string;
  link: string;
  lastDate: string;
  shouldBeFromMinorCommunity: boolean;
  maximumFamilySiblings: number;
  Nationality: string;
  community: string;
  ageGrp: number;
  yearOfStudy: number;
};

export type Tpg = {
  name: string;
  state: string;
  parentOccupation: string[];
  marksPercentage: number;
  annualIncome: number;
  shouldBeGirl: boolean;
  eligibility: string;
  benefits: string;
  documents: string;
  link: string;
  lastDate: string;
  shouldBeFromMinorCommunity: boolean;
  maximumFamilySiblings: number;
  Nationality: string;
  community: string;
  ageGrp: number;
  yearOfStudy: number;
};

export type TDiploma = {
  name: string;
  state: string;
  parentOccupation: string[];
  marksPercentage: number;
  annualIncome: number;
  shouldBeGirl: boolean;
  eligibility: string;
  benefits: string;
  documents: string;
  shouldBeDifferentlyAbled: boolean;
  link: string;
  lastDate: string;
  shouldBeFromMinorCommunity: boolean;
  maximumFamilySiblings: number;
  Nationality: string;
  community: string;
  ageGrp: number;
};

export enum Grade {
  UTENTH = "UTENTH",
  ATENTH = "ATENTH",
  UG = "UG",
  PG = "PG",
  DIPLOMA = "DIPLOMA",
}

import { Grade, TDiploma, TaTenth, Tpg, TuTenth, Tug } from "../types";

export const myfilter = (
  grade: Grade,
  schs: any,
  userDetail: TuTenth | TaTenth | Tug | Tpg | TDiploma
) => {
  const {
    marksPercentage,
    state,
    parentOccupation,
    annualIncome,
    isSpecialCategory,
    Nationality,
    maximumFamilySiblings,
  } = userDetail;
  schs = schs.filter((sch: any) => {
    return (
      marksPercentage >= sch.marksPercentage &&
      inArray(sch.state, state) &&
      inArray(sch.parentOccupation, parentOccupation) &&
      annualIncome <= sch.annualIncome &&
      sch.forSpecialCategory === isSpecialCategory &&
      sch.Nationality &&
      sch.Nationality === Nationality &&
      sch.maximumFamilySiblings &&
      maximumFamilySiblings <= sch.maximumFamilySiblings
    );
  });

  if (grade === Grade.ATENTH && "community" in userDetail) {
    const { community } = userDetail;
    schs = schs.filter((sch: any) => sch.community.includes(community));
  }

  if (
    (grade === Grade.UG || grade === Grade.PG) &&
    "isFromMinorCommunity" in userDetail &&
    "community" in userDetail &&
    "ageGrp" in userDetail &&
    "yearOfStudy" in userDetail
  ) {
    console.log("Came here");
    const { isFromMinorCommunity, community, ageGrp, yearOfStudy } = userDetail;
    console.log(schs);

    schs = schs.filter((sch: any) => {
      return (
        sch.shouldBeFromMinorCommunity === isFromMinorCommunity &&
        sch.community.includes(community) &&
        yearOfStudy <= sch.yearOfStudy &&
        ageGrp <= sch.ageGrp.max &&
        ageGrp >= sch.ageGrp.min
      );
    });
    console.log(schs);
  }

  if (grade === Grade.DIPLOMA && "isDifferentlyAbled" in userDetail) {
    const { isDifferentlyAbled } = userDetail;

    schs = schs.filter(
      (sch: any) => sch.shouldBeDifferentlyAbled === isDifferentlyAbled
    );
  }

  return schs;
};

const inArray = (arr: string[], val: string) => arr.includes(val);

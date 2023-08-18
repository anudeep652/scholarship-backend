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
    isGirl,
  } = userDetail;
  console.log("0:  ", schs);
  schs = schs.filter((sch: any) => {
    return (
      // marksPercentage >= sch.marksPercentage &&
      inArray(sch.state, state) &&
      annualIncome <= sch.annualIncome &&
      // sch.forSpecialCategory === isSpecialCategory &&
      sch.Nationality &&
      sch.Nationality === Nationality
    );
  });
  console.log("1:  ", schs);

  if (!isGirl) {
    schs = schs.filter((sch: any) => {
      return sch.shouldBeGirl === false;
    });
  }

  schs = schs.filter((sch: any) => {
    if (sch.maximumFamilySiblings) {
      return maximumFamilySiblings <= sch.maximumFamilySiblings;
    }
    return true;
  });

  // schs = schs.filter((sch: any) =>{
  // if (Array.isArray(schs.parentOccupation)) {

  //   inArray(sch.parentOccupation, parentOccupation)
  // }
  // )}
  if (!isSpecialCategory) {
    schs = schs.filter((sch: any) => {
      if (sch.forSpecialCategory) {
        return isSpecialCategory === false;
      }
    });
  }

  schs = schs.filter((sch: any) => {
    if (sch.marksPercentage) {
      return marksPercentage >= sch.marksPercentage;
    }
    return true;
  });

  schs = schs.filter((sch: any) => {
    if (Array.isArray(sch.parentOccupation)) {
      return inArray(sch.parentOccupation, parentOccupation);
    }
    return true;
  });
  console.log("2:  ", schs);

  // if (grade === Grade.ATENTH && "community" in userDetail) {
  //   const { community } = userDetail;
  //   schs = schs.filter((sch: any) => sch.community.includes(community));
  // }

  console.log("3:  ", schs);

  if (
    (grade === Grade.UG || grade === Grade.PG) &&
    "isFromMinorCommunity" in userDetail &&
    "community" in userDetail &&
    "ageGrp" in userDetail &&
    "yearOfStudy" in userDetail &&
    "isGovtSch" in userDetail
  ) {
    console.log("Came here");
    console.log(schs);

    const { isFromMinorCommunity, community, ageGrp, yearOfStudy } = userDetail;
    console.log(schs);

    if (!isFromMinorCommunity) {
      schs = schs.filter((sch: any) => {
        if (sch.shouldBeFromMinorCommunity) {
          return sch.shouldBeFromMinorCommunity === false;
        }
      });
    }
    console.log(yearOfStudy, ageGrp);
    console.log("1a:", schs);

    schs = schs.filter((sch: any) => {
      if (sch.yearOfStudy) {
        return yearOfStudy <= sch.yearOfStudy;
      }
      return true;
    });
    console.log("1b:", schs);

    schs = schs.filter((sch: any) => {
      if (sch.ageGrp.min) {
        return ageGrp <= sch.ageGrp.max && ageGrp >= sch.ageGrp.min;
      }
      return true;
    });

    console.log("in PG");
    console.log(schs);

    if (!userDetail.isGovtSch) {
      schs = schs.filter((sch: any) => sch.isGovtSch === userDetail.isGovtSch);
    }
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

const inArray = (arr: string[], val: string) => arr?.includes(val);

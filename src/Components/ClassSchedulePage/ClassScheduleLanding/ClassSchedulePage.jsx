import React from "react";
import TopHeader from "../../Shared/TopHeader/TopHeader";
import Footer from "../../Shared/Footer/Footer";
import ClassScheduleMid from "../ClassScheduleMid/ClassScheduleMid";

const ClassSchedulePage = () => {
  return (
    <>
      <TopHeader title="ADVANCE GYM" />
      <ClassScheduleMid />
      <Footer />
    </>
  );
};

export default ClassSchedulePage;

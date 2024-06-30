"use client";

import CardMode from "../CardMode";
import CategoriesMode from "../CategoriesMode";

const FullWidthShowCase = ({
  title,
  subTitle,
  link,
  img,
  mode = "card",
  buttons,
}: any) => {
  return mode === "card" ? (
    <CardMode
      title={title}
      subTitle={subTitle}
      img={img}
      link={link}
      buttons={buttons}
    />
  ) : (
    <CategoriesMode
      title={title}
      subTitle={subTitle}
      img={img}
      link={link}
      buttons={buttons}
    />
  );
};

export default FullWidthShowCase;

import React from "react";
export default function LanguageLogo({ language }) {
  return (
    <img id="language-logo" src={require(`../images/${language}.svg`)} alt="" />
  );
}

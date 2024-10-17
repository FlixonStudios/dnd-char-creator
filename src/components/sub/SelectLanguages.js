import React, { useEffect, useState } from "react";
import { hasKey } from "../../lib/Func";
import GroupOfSelection from "../../lib/GroupOfSelection";

export function SelectLanguages({
  raceDetails,
  raceSelection,
  setLanguages,
  isMock,
}) {
  const [languageOptions, setLanguageOptions] = useState([]);
  const [numOfChoices, setNumOfChoices] = useState(1);
  const [languageDefault, setLanguageDefault] = useState([]);

  let langKey = "languages";
  let langOptionKey = "language_options";
  let optionFromKey = "from";
  let optionChooseKey = "choose";

  useEffect(() => {
    setLanguageOptions([]);
    setLanguageDefault([]);

    getLanguages();
  }, [raceSelection, raceDetails]);

  function getLanguages() {
    if (hasKey(raceDetails, langKey)) {
      setLanguageDefault(raceDetails[langKey]);
    }
    if (hasKey(raceDetails, langOptionKey)) {
      if (hasKey(raceDetails[langOptionKey], optionFromKey)) {
        setNumOfChoices(raceDetails[langOptionKey][optionChooseKey]);

        const transformedLanguageOptions = raceDetails[langOptionKey][
          optionFromKey
        ]?.["options"].map((option) => option.item);

        setLanguageOptions(transformedLanguageOptions);
      }
    }
  }

  return (
    <>
      <GroupOfSelection
        list={languageOptions}
        tagDisplay={"Race: Languages"}
        numOfChoices={numOfChoices}
        defaultChoices={languageDefault}
        title={"Please Select Languages for your Race"}
        tag={"race"}
        setReturn={setLanguages}
        isMock={isMock}
      />
    </>
  );
}

export default SelectLanguages;

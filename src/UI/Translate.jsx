import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageProvider/LanguageProvider";

function Translate(json, key) {
    const { language } = useContext(LanguageContext);
    return json[key][language];
}

export default Translate;

import React from "react";
import styled from "styled-components";
import { Switch } from "@mui/material";
import icon_pt from "../../assets/img/icon_pt.svg";
import icon_en from "../../assets/img/icon_en.svg";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageProvider/LanguageProvider";

const SwitchWrapper = styled(Switch)(() => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translate(2px, 2px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translate(22px, 2px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(${icon_en})`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#001e3c",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url(${icon_pt})`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20 / 2,
  },
}));

export function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  const label = {
    inputProps: { "aria-label": "Switch to english translation" },
  };

  return (
    <SwitchWrapper
      {...label}
      checked={language === "en"}
      onChange={(e) => setLanguage(e.target.checked ? "en" : "pt")}
    />
  );
}

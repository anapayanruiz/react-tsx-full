import { useState } from "react";
import SelectLang from "../components/SelectLang";
import Header from "./Header";
import { LangCtx } from "../context/lang.context";
import { traducciones } from "../types/lang";
import type { Lang } from "../types/lang";

const Context = () => {
  const [lang, setLang] = useState<Lang>("es");

  return (
    <div>
      <LangCtx.Provider value={traducciones[lang]}>
        <SelectLang
          langs={Object.keys(traducciones) as Lang[]}
          onChangeLang={setLang}
          selectedLang={lang}
        />
        <Header />
      </LangCtx.Provider>
    </div>
  );
};

export default Context;

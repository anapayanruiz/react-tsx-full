import type { Lang } from "../types/lang";

type Props = {
  langs: Lang[];
  onChangeLang: (lang: Lang) => void;
  selectedLang: Lang;
  children?: Lang[];
};

const SelectLang = ({ langs, onChangeLang, selectedLang, children }: Props) => {
  const optionsLang = langs.map((l, pos) => (
    <option key={pos} value={l}>
      {l.toUpperCase()}
    </option>
  ));

  return (
    <>
      <select
        onChange={(e) => onChangeLang(e.target.value as Lang)}
        value={selectedLang}
      >
        {optionsLang}
      </select>

      {children}
    </>
  );
};

export default SelectLang;

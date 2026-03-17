import { useLang } from "../context/useLang";

const Header = () => {
  const { bienvenida } = useLang();

  return <h1>{bienvenida}</h1>;
};

export default Header;

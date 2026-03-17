import { useContext } from "react";
import { LangCtx } from "./lang.context";

export const useLang = () => {
  const ctx = useContext(LangCtx);

  if (!ctx) {
    throw new Error("useLang must be used within LangProvider");
  }

  return ctx;
};

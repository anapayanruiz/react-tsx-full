import { createContext } from "react";
import type { LangContent } from "../types/lang";

export const LangCtx = createContext<LangContent | null>(null);

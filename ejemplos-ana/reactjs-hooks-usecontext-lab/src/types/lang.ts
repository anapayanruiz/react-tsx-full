export const traducciones = {
  es: { bienvenida: "Bienvenido a mi Startup" },
  en: { bienvenida: "Welcome to my Startup" },
  fr: { bienvenida: "Bienvenue dans ma Startup" },
};

export type Lang = keyof typeof traducciones;

export type LangContent = (typeof traducciones)[Lang];

type AuthMode = "sign-in" | "sign-up";

export type AuthFormProp = {
  mode: AuthMode;
  onToggleMode: () => void;
};

export type { AuthMode as default };

import type { InitialContext } from "../types/initialContext";
import { createContext } from "react";

export const GameInitialContext = createContext<InitialContext | undefined>(undefined);

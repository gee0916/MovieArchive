import { atom } from "jotai";
import { FormData } from "@/types/type";

export const userInfoAtom = atom<FormData | null>(null);

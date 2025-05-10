import { StateCreator } from "zustand";
import { GlobalStoreType } from "./useGlobalStore";

interface CommonAction {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  updateStore: (key: string, value: any) => void;
}

export type CommonSlice = CommonAction;

const createCommonSlice: StateCreator<
  GlobalStoreType,
  [],
  [],
  CommonSlice
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
> = (set, get) => ({
  updateStore: (key, value) => {
    set({ [key]: value });
  },
});

export default createCommonSlice;

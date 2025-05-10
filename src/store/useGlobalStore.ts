import { create } from "zustand";
import createCommonSlice, { CommonSlice } from "./createCommonSlice";
import { subscribeWithSelector } from "zustand/middleware";

export type GlobalStoreType = CommonSlice;

const useGlobalStore = create<GlobalStoreType>()(
  subscribeWithSelector((...a) => ({
    ...createCommonSlice(...a),
  }))
);

export default useGlobalStore;

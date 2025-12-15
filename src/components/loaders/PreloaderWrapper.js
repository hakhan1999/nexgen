// components/common/PreloaderWrapper.js
"use client"; // important, must be at the top

import { useContext } from "react";
import { LoadingContext } from "@/context/LoadingContext";
import Preloader from "./Preloader";

export default function PreloaderWrapper({ children }) {
  const { loading } = useContext(LoadingContext);

  return (
    <>
      {loading && <Preloader />}
      {children}
    </>
  );
}

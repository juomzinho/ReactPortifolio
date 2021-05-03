
import { useState, useEffect } from "react";

export default function useWindowSize() {
  function getTamanho() {
    return {
      largura: window.innerWidth,
      altura: window.innerHeight
    };
  }

  const [janelaTamanho, setJanelaTamanho] = useState(getTamanho);

  useEffect(() => {
    function handleResize() {
        setJanelaTamanho(getTamanho());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return janelaTamanho;
}
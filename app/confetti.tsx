"use client";

import dynamic from "next/dynamic";

// Carregado só no cliente e fora do bundle inicial: é decorativo e não afeta o LCP.
// Sem SSR, o react-confetti já usa window.innerWidth/innerHeight como tamanho padrão.
const ReactConfetti = dynamic(() => import("react-confetti"), { ssr: false });

export default function Confetti() {
  return <ReactConfetti recycle={false} />;
}

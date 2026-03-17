"use client"

import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import { Timer } from "lucide-react";

type ProgressBarProps = {
  value: number;
};

export function ProgressBar({ value }: ProgressBarProps) {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <header className="sticky top-0 z-50 w-full bg-muted/80 backdrop-blur-sm shadow-sm">
        <div className="bg-destructive text-destructive-foreground p-2.5 text-center flex items-center justify-center gap-2 font-bold text-sm">
            <Timer className="h-5 w-5" />
            <span>OFERTA EXCLUSIVA EXPIRA EM:</span>
            <span className="font-mono text-base tabular-nums bg-white/20 px-2 py-1 rounded-md">
                {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
        </div>
        <div className="p-2 text-center">
            <p className="text-xs text-muted-foreground">
                Passo 2 de 3: Personalize e finalize seu acesso...
            </p>
        </div>
        <Progress value={value} className="h-1.5" />
    </header>
  );
}

import { Progress } from "@/components/ui/progress";

type ProgressBarProps = {
  value: number;
};

export function ProgressBar({ value }: ProgressBarProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-muted/80 backdrop-blur-sm shadow-sm">
        <div className="p-2 text-center">
            <p className="text-xs text-muted-foreground">
                Passo 2 de 3: Personalize e finalize seu acesso...
            </p>
        </div>
        <Progress value={value} className="h-1.5" />
    </header>
  );
}

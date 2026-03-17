import { AlertTriangle } from "lucide-react";

export function UrgencyAlert() {
  return (
    <div className="bg-[#FFFAE5] border border-[#B81F1F]/20 text-[#B81F1F] rounded-lg p-4 flex items-start space-x-3 my-8 shadow-md" role="alert">
      <AlertTriangle className="h-5 w-5 mt-0.5 shrink-0" />
      <div className="flex-1">
        <p className="font-bold">ESPERE! Não feche ou atualize esta página.</p>
        <p className="text-sm">
          Seu pedido dos Modelos de PEI foi aprovado, mas você tem apenas UMA chance de ver isso.
        </p>
      </div>
    </div>
  );
}

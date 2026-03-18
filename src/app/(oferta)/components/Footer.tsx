import { Lock, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white py-8 mt-12 border-t border-gray-200/80">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <div className="flex justify-center items-center space-x-6 mb-4">
          <div className="flex items-center space-x-2 text-sm">
            <Lock className="h-4 w-4" />
            <span>Compra Segura</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <ShieldCheck className="h-4 w-4" />
            <span>SSL Certificado</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

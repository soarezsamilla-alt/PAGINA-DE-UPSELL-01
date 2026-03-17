import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProgressBar } from './components/ProgressBar';
import { UrgencyAlert } from './components/UrgencyAlert';
import { ImageCarousel } from './components/ImageCarousel';
import { Footer } from './components/Footer';

export default function UpsellPage() {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <ProgressBar value={80} />
      <main className="container mx-auto max-w-3xl px-4 py-8 md:py-12 flex-grow">
        <UrgencyAlert />

        <h1 className="text-[23px] md:text-3xl font-extrabold text-center my-8 md:my-12 text-foreground font-headline leading-tight">
          Você garantiu o seu Planejamento. Mas o que você vai escrever no <span className="text-primary">RELATÓRIO</span> de avaliação no final do bimestre?
        </h1>
        
        <ImageCarousel />

        <div className="bg-card border rounded-xl p-6 md:p-8 shadow-md text-lg text-foreground/90 space-y-4 my-8 md:my-12 text-left sm:text-center max-w-2xl mx-auto">
          <p>Parabéns, professora! Seus +200 Modelos de PEI já estão sendo enviados para o seu e--mail. Você acaba de resolver a pior parte do planejamento.</p>
          <p>Mas, e quando chegar o final do bimestre? Você vai perder o seu final de semana novamente pensando nas palavras exatas para não ofender os pais e cumprir as exigências do MEC no relatório do aluno de inclusão?</p>
          
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4 shadow-inner">
            <p className="text-center font-semibold">Para que você nunca mais trave na frente do Word, eu liberei um material complementar exclusivo: O Banco de Frases para Relatórios de Inclusão.</p>
          </div>

          <ul className='list-disc pl-5 mt-6 mb-4 space-y-2 text-left max-w-md mx-auto'>
            <li>Frases prontas para TEA, TDAH, Deficiência Intelectual e mais.</li>
            <li>Parágrafos divididos por comportamento, socialização e aprendizagem.</li>
            <li>Basta copiar, colar e montar um relatório perfeito em 5 minutos.</li>
          </ul>
        </div>
        
        <div className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-xl p-6 md:p-8 text-center max-w-2xl mx-auto my-12 shadow-sm">
            <p className="text-sm text-foreground">
                Este material é vendido separadamente por <span className="line-through font-semibold">R$ 47,00</span>. Mas apenas nesta página, para você que já confiou no nosso trabalho, adicione ao seu pedido por:
            </p>
            <p className="text-4xl md:text-5xl font-bold text-primary my-3">
                Apenas 1x de R$ 9,90
            </p>
        </div>

        <div className="flex flex-col items-center gap-2 max-w-md mx-auto my-8">
            <Button asChild size="lg" className="w-full h-auto py-4 text-lg md:text-xl font-bold animate-custom-pulse shadow-lg hover:shadow-xl transition-shadow duration-300">
                <a href="https://pay.wiapy.com/checkout/69b98c2cdbad674b5707c3bb">
                    <Check className="mr-2 h-6 w-6" />
                    SIM! ADICIONAR POR APENAS R$ 9,90
                </a>
            </Button>
            <p className="text-sm text-foreground">Adicionar com 1 clique (Cobrado no mesmo cartão)</p>
        </div>

        <div className="text-center my-8">
            <a href="#" className="text-muted-foreground underline text-sm transition-opacity hover:opacity-70">
                Não, obrigado. Eu prefiro perder horas do meu final de semana pensando no que escrever no relatório.
            </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

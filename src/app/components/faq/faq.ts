import { Component, signal } from '@angular/core';

interface FaqItem {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.scss',
})
export class Faq {
  protected readonly activeFaqIndex = signal<number | null>(null);

  protected readonly faqs = signal<FaqItem[]>([
    {
      question: 'Como funciona o atendimento clínico de psicanálise?',
      answer: 'O atendimento é realizado em sessões semanais com duração aproximada de 50 minutos. Por meio de videochamadas seguras e criptografadas, criamos um espaço seguro de escuta atenta e livre de julgamentos, permitindo que você se expresse com total liberdade para investigar dinâmicas inconscientes.',
    },
    {
      question: 'Quais são as formas de pagamento para as consultas?',
      answer: 'Para as consultas clínicas individuais, as sessões podem ser pagas individualmente ou por pacotes mensais. Aceitamos pagamentos por Pix, transferência bancária ou cartões de crédito (faturamento mensal). Emitimos recibo para fins de reembolso ou declaração.',
    },
    {
      question: 'Como recebo o acesso aos cursos adquiridos?',
      answer: 'O acesso aos nossos cursos online é 100% automático. Assim que a administradora (Hotmart ou Kiwify) aprovar o pagamento, você receberá um e-mail de confirmação com os dados de acesso direto à área de membros. Pagamentos via Pix liberam o acesso em menos de 5 minutos.',
    },
    {
      question: 'Os cursos oferecem suporte a dúvidas?',
      answer: 'Sim, absolutamente. Dentro da própria plataforma de ensino de cada curso, há uma seção de comentários abaixo de cada videoaula para tirar dúvidas. Além disso, temos canais de suporte técnico e grupos exclusivos de acompanhamento.',
    },
    {
      question: 'Preciso ter conhecimento prévio para iniciar os cursos?',
      answer: 'Não. Os cursos foram criados e estruturados metodologicamente para acolher tanto pessoas que nunca estudaram psicanálise ou psicologia, quanto terapeutas que desejam aprofundar suas abordagens práticas. Toda a linguagem técnica é traduzida e aplicada ao cotidiano.',
    },
  ]);

  protected toggleFaq(index: number): void {
    this.activeFaqIndex.update(current => (current === index ? null : index));
  }
}

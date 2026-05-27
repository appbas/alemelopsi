# Especificação Técnica e Conteúdo: Landing Page Psicanálise & Inteligência Emocional

## 1. Visão Geral do Projeto

- **Nome Provisório:** Landing Page - Psicanalista & Desenvolvimento Emocional
- **Objetivo Principal:** Converter visitantes em leads qualificados através de dois canais principais:
  1. Contato direto e agendamento de consultas via **WhatsApp**.
  2. Venda de **Cursos Online** (redirecionando para checkout externo como Hotmart/Kiwify).
- **Abordagem de Desenvolvimento:** Vibe Coding / Agentic Development utilizando **Angular 21+** com Componentes Standalone e **Signals** para gerenciamento de estado leve.
- **Premissa de Design:** Arquitetura minimalista, limpa, focada em legibilidade e acessibilidade. Identidade visual e logos serão injetados posteriormente via design tokens / CSS Custom Properties.

---

## 2. Configurações Globais de Arquitetura (Foco em Flexibilidade)

Para garantir que a identidade visual possa ser alterada facilmente no futuro, todos os componentes devem consumir propriedades customizadas do CSS definidas globalmente no `styles.scss` ou `styles.css`.

### Tokens de CSS Inicial (Estilo Minimalista/Neutro)

```css
:root {
  /* Cores Neutras e Acolhedoras (Modificáveis posteriormente) */
  --bg-primary: #faf8f5; /* Fundo suave, tom areia/creme bem claro */
  --bg-surface: #ffffff; /* Fundo de cards e seções destacadas */
  --text-main: #2d3748; /* Grafite escuro para leitura confortável */
  --text-muted: #718096; /* Cinza para subtítulos e descrições secundárias */
  --accent-color: #4a5568; /* Cor de destaque inicial (neutra) */
  --whatsapp-green: #25d366; /* Cor padrão do WhatsApp para alta conversão */

  /* Tipografia */
  --font-family: "Inter", system-ui, -apple-system, sans-serif;
  --font-serif:
    "Playfair Display", Georgia, serif; /* Opcional para H1/H2 elegantes */

  /* Espaçamento e Bordas */
  --radius-sm: 4px;
  --radius-md: 8px;
  --max-width-content: 1140px;
}
```

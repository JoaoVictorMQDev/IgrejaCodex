---
name: Igreja Nova Canaã
description: Um santuário editorial digital, sereno e acolhedor para novos visitantes e famílias.
colors:
  primary-wine: "#681e32"
  primary-wine-dark: "#3e101e"
  primary-wine-light: "#8b3049"
  neutral-cream: "#f5f0e6"
  neutral-paper: "#fbf8f1"
  accent-gold: "#c99a55"
  accent-ivory: "#e5c99e"
  neutral-ink: "#241d1c"
  neutral-muted: "#6f6561"
  neutral-line: "rgba(36, 29, 28, 0.14)"
  neutral-footer: "#1d1717"
  neutral-white: "#ffffff"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(62px, 7.4vw, 102px)"
    fontWeight: 600
    lineHeight: 0.97
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "clamp(48px, 5.7vw, 78px)"
    fontWeight: 600
    lineHeight: 0.97
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: 1.1
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.18em"
rounded:
  none: "0"
  pill: "999px"
  circle: "50%"
  arch: "150px 150px 0 0"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "36px"
  xl: "60px"
  section: "120px"
components:
  button-primary:
    backgroundColor: "{colors.neutral-cream}"
    textColor: "{colors.primary-wine-dark}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "50px"
  button-solid:
    backgroundColor: "{colors.primary-wine}"
    textColor: "{colors.neutral-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "50px"
  card-featured:
    backgroundColor: "{colors.primary-wine}"
    textColor: "{colors.neutral-white}"
    rounded: "{rounded.none}"
    padding: "36px"
  navigation-cta:
    backgroundColor: "{colors.neutral-cream}"
    textColor: "{colors.neutral-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 18px"
---

# Design System: Igreja Nova Canaã

## Overview

**Creative North Star: "Santuário Editorial"**

O sistema combina a presença silenciosa de um espaço de culto com a clareza de uma publicação editorial. Grandes títulos serifados criam solenidade sem distância; o corpo em sans-serif mantém todas as informações práticas acessíveis. A composição é espaçosa, assimétrica e deliberada, alternando superfícies claras e blocos profundos em vinho.

A atmosfera é serena, reverente e acolhedora. A profundidade vem principalmente de camadas tonais, contraste e geometria; sombras ambientes aparecem apenas em pontos de destaque. Componentes são refinados, discretos e responsivos ao toque, sem competir com a mensagem.

**Key Characteristics:**
- Hierarquia editorial de alto contraste, com títulos serifados expressivos.
- Paleta quente de vinho, creme, papel e ouro fosco.
- Muito espaço negativo e seções com ritmo amplo.
- Geometria simbólica construída com círculos, arcos e linhas finas.
- Interações breves e suaves, sempre subordinadas ao conteúdo.

## Colors

A paleta é quente e contida: vinho profundo sustenta a identidade, creme e papel criam acolhimento, e ouro fosco marca momentos de orientação e significado.

### Primary
- **Vinho Santuário:** cor institucional dominante para heróis, chamadas e superfícies de alta presença.
- **Vinho Profundo:** cria contraste em seções noturnas, arcos e fundos de programação.
- **Vinho Luminoso:** reserva para variações ou estados que precisem elevar o vinho sem introduzir outra família cromática.

### Secondary
- **Ouro Fosco:** acento quente para numeração, símbolos e superfícies editoriais especiais.
- **Marfim Dourado:** destaca palavras em itálico, rótulos e informações de apoio sobre fundos escuros.

### Neutral
- **Papel Acolhedor:** fundo principal das páginas e superfícies de leitura.
- **Creme Litúrgico:** superfície secundária e preenchimento dos botões claros.
- **Tinta Quente:** texto principal e superfícies escuras de alto contraste.
- **Cinza Terroso:** texto secundário sobre fundos claros.
- **Carvão do Rodapé:** encerra a página com peso e estabilidade.
- **Linha Suave:** divisores discretos; estrutura sem transformar a interface em uma grade rígida.

### Named Rules

**The Wine Anchor Rule.** Toda página deve ter ao menos um momento estrutural em vinho, mas o vinho não deve ocupar todas as superfícies.

**The Muted Gold Rule.** Ouro orienta e pontua; nunca substitui o vinho como voz principal nem vira efeito metálico brilhante.

## Typography

**Display Font:** Playfair Display (com Georgia e serif como fallback)  
**Body Font:** DM Sans (com Arial e sans-serif como fallback)

**Character:** A Playfair Display fornece solenidade editorial e humanidade; a DM Sans mantém navegação, horários e textos explicativos contemporâneos e legíveis. O contraste entre as famílias é parte essencial da identidade.

### Hierarchy
- **Display** (600, escala fluida até 102px, line-height 0.97): heróis e declarações principais; usa tracking fechado e poucas linhas.
- **Headline** (600, escala fluida até 78px, line-height 0.97): abertura de seções e páginas internas.
- **Title** (600, 26–34px): títulos de cartões, departamentos e encontros.
- **Body** (400, 16–18px, line-height 1.7–1.75): apresentação e orientação; limitar a largura para preservar o ritmo de leitura.
- **Label** (700, 9–11px, tracking 0.12–0.20em, caixa alta): sobrancelhas, dias, categorias e metadados.

### Named Rules

**The Two Voices Rule.** Playfair fala sobre significado; DM Sans explica, orienta e permite agir.

**The Editorial Emphasis Rule.** Destaques dentro de grandes títulos usam itálico serifado e marfim dourado ou vinho, nunca negrito sans-serif.

## Layout

O conteúdo usa contêiner central de até 1180px, com margens laterais de 24px por lado no desktop e 16px no mobile. Seções principais respiram com 120px de espaço vertical, reduzidos para 90px abaixo de 920px e 72px abaixo de 640px.

Desktop alterna grades de duas colunas, faixas horizontais e cartões em duas ou três colunas. A hierarquia favorece assimetria controlada: texto de apresentação ocupa uma metade enquanto arte, detalhes ou ações ocupam a outra. Em telas até 920px, navegação vira painel de tela cheia e composições maiores empilham. Até 640px, grades convertem para uma coluna, horários reorganizam seus metadados e ações passam a empilhar.

**The Breathing Room Rule.** Espaço negativo é parte do conteúdo; novas seções não devem comprimir o ritmo vertical para acomodar mais informação.

## Elevation & Depth

O sistema é plano por padrão e cria profundidade com contraste tonal, sobreposição e escala. Sombras são ambientes e coloridas pela própria paleta, reservadas para superfícies que realmente avançam: cabeçalho rolado, cartão destacado, bloco de visita e composição do herói.

### Shadow Vocabulary
- **Cabeçalho Suspenso** (`0 10px 35px rgba(48,25,28,.08)`): separa a navegação translúcida do conteúdo após a rolagem.
- **Destaque Vinho** (`0 24px 55px rgba(104,30,50,.17)`): eleva apenas o cartão central em uma sequência.
- **Chamada Ambiente** (`0 32px 80px rgba(70,24,35,.18)`): ancora grandes blocos de conversão.
- **Arco Profundo** (`-24px 28px 70px rgba(35,7,15,.28)`): dá volume à composição simbólica do herói.

**The Flat-by-Default Rule.** Superfícies comuns usam borda ou mudança tonal; sombra significa destaque estrutural, não decoração automática.

## Shapes

A forma dominante é a justaposição entre retângulos editoriais sem arredondamento e gestos circulares simbólicos. Cartões, listas e grandes superfícies permanecem retos; botões e chamadas compactas usam pílulas completas. Círculos enquadram marca e ícones, enquanto arcos altos definem a assinatura visual do herói.

Linhas de 1px e baixa opacidade separam conteúdo sem endurecer a composição. A forma deve continuar calma: não introduzir cantos médios arredondados em cartões genéricos, pois eles diluem a tensão entre retângulo, círculo e arco.

## Components

### Buttons
- **Shape:** pílula completa, com altura mínima de 50px e padding horizontal de 24px.
- **Primary:** creme sobre vinho, ou vinho sobre superfícies claras; tipografia sans-serif pequena e firme.
- **Hover / Focus:** mudança tonal curta; o estado pressionado reduz a escala para 0.97 e confirma o toque sem exuberância.
- **Text Link:** peso 700, linha inferior fina e seta que avança poucos pixels em hover.

### Cards / Containers
- **Corner Style:** cantos retos; círculos ficam restritos a ícones e marca.
- **Background:** papel e creme para leitura, vinho e carvão para destaques, ouro fosco para variação controlada.
- **Shadow Strategy:** somente cartões destacados recebem sombra ambiente.
- **Border:** linha de 1px com baixa opacidade nos cartões claros e divisores.
- **Internal Padding:** geralmente 28–36px; grandes chamadas podem usar 55–70px.

### Navigation
- Cabeçalho fixo, transparente e claro sobre o herói; após rolagem, torna-se papel translúcido com blur e texto em tinta quente.
- Links usam 13px e peso 600; a página ativa e o hover recebem sublinhado fino animado.
- Em mobile, o menu ocupa a tela, usa títulos serifados de 34px e mantém a chamada principal em uma pílula vinho.

### Schedule Rows
- Linhas amplas e sem cantos, com dia em uma pequena moldura, título serifado e horário alinhado como metadado.
- Hover acrescenta apenas leve preenchimento tonal e deslocamento curto da seta.

### Contact Rows
- Contatos funcionam como linhas editoriais, não cartões elevados: rótulo pequeno, valor serifado e seta vinho.
- No mobile, rótulo e valor empilham e conteúdos longos podem quebrar sem extrapolar a tela.

### Motion
- Entradas de conteúdo usam opacidade combinada com deslocamento de 22px, escala sutil ou recorte, conforme o tipo de informação; grupos recebem stagger de 60ms e aparecem uma única vez.
- A barra dourada fixa no topo indica o progresso da página com `scaleX`, atualizado por `requestAnimationFrame`.
- Interações usam transições entre 160ms e 250ms; movimento reduzido troca deslocamentos por um fade curto e remove rolagem suave e movimento ambiente.
- Hovers são aplicados apenas quando o dispositivo realmente oferece ponteiro fino.

## Do's and Don'ts

### Do:
- **Do** preserve a alternância entre vinho profundo e superfícies claras de papel ou creme.
- **Do** use Playfair Display para significado e DM Sans para orientação prática.
- **Do** maintain títulos grandes, poucas linhas e espaço negativo generoso.
- **Do** use círculos, arcos e linhas finas como geometria recorrente.
- **Do** keep estados ativos e pressionados curtos, acessíveis e perceptíveis.

### Don't:
- **Don't** adicionar cores frias ou acentos saturados que disputem com vinho e ouro fosco.
- **Don't** arredondar cartões genéricos; a pílula pertence a botões e o círculo a símbolos.
- **Don't** aplicar sombras a todas as superfícies ou usar brilho metálico no ouro.
- **Don't** usar fontes serifadas em textos longos, navegação de desktop ou metadados.
- **Don't** transformar símbolos religiosos em ornamento repetitivo; a cruz permanece um elemento intencional e contido.

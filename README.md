# T&M Têxtil — Landing Page de Alta-Costura & Catálogo Institucional

Uma landing page moderna, sofisticada e inovadora desenvolvida exclusivamente para a **T&M Têxtil**, voltada para estilistas, ateliês de alta costura, confecções de moda, alfaiates e diretores criativos.

Inspirada na estética de editoriais de moda francesa (*Vogue Paris*, *L'Officiel*), ateliês parisienses da *Place Vendôme* e nas passarelas internacionais.

---

## ✨ Características Principais

1. **Exclusivamente Institucional & Mostruário Visual**:
   - Sem carrinho, sem checkout e sem pagamentos no site.
   - Foco 100% em valor de marca, apresentação de texturas nobres e geração de leads qualificados.
2. **Conversão Direta para WhatsApp**:
   - Cada tecido possui o botão *"Tenho interesse — falar pelo WhatsApp"* que abre o WhatsApp com mensagem pré-preenchida contendo o nome e código de referência do tecido.
   - Botões adicionais para solicitação de atendimento exclusivo, agendamento de visita ao showroom e pedido do *Book de Amostras Físicas* para estilistas.
3. **Identidade Visual de Luxo**:
   - **Azul-marinho escuro** (`#05080F`, `#070B14`, `#0F192D`) como fundo institucional solene;
   - **Vinho/Bordô editorial** (`#78152C`, `#8F1935`, `#A92042`) como cor de destaque nos botões e elementos de ênfase;
   - **Off-white seda e dourado champagne** (`#FBF9F5`, `#C5A880`) para tipografia de alto contraste e detalhes de refinamento.
4. **Catálogo Interativo**:
   - Busca em tempo real por nome, composição ou caimento;
   - Filtros por categoria: *Alfaiataria, Moda feminina, Moda masculina, Festa, Casual, Tecidos leves, Tecidos estruturados, Premium*;
   - Modal com ficha técnica completa: gramatura (g/m²), largura útil, drapeado, toque, transparência, modelagens ideais e cuidados de manuseio.
5. **Seções Editoriais**:
   - **Hero Section**: Fotografia editorial de grande impacto com chamada principal e estatísticas de prestígio;
   - **Nossa Essência**: Manifesto institucional destacando *Qualidade, Inovação, Sofisticação, Versatilidade e Identidade*;
   - **Inspiração Editorial**: Layout de revista de moda francesa com composição assimétrica e a frase: *"Da textura nasce a ideia. Da ideia, nasce a criação."*;
   - **Diferenciais**: 4 pilares estratégicos (Qualidade dos materiais, Curadoria especializada, Variedade, Atendimento personalizado);
   - **Contato & Showroom**: Informações sobre agendamento no showroom dos Jardins (SP) e bureau em Paris.
6. **Design 100% Responsivo**:
   - Fluido em monitores ultra-wide, laptops, tablets e smartphones (com menu drawer mobile lateral).

---

## 📁 Estrutura de Arquivos

```
tm-textil/
├── index.html              # Estrutura HTML5 semântica e acessível
├── css/
│   ├── luxury-theme.css    # Design system, variáveis, cores, tipografia e reset
│   └── components.css      # Estilos do Header, Hero, Catálogo, Modal, Inspiração e Footer
├── js/
│   ├── fabrics-data.js     # Base de dados dos 12 tecidos nobres e configurações da empresa
│   └── app.js              # Controlador dos filtros, busca, modal, links WhatsApp e scroll
└── README.md               # Documentação técnica e instruções de uso
```

---

## ⚙️ Como Personalizar o WhatsApp e Informações

Para alterar o número do WhatsApp corporativo da T&M Têxtil, abra o arquivo `js/fabrics-data.js` e edite a constante `TM_CONFIG`:

```javascript
const TM_CONFIG = {
  brandName: "T&M Têxtil",
  whatsappNumber: "5511999999999", // Insira o DDI + DDD + Número da sua empresa (apenas números)
  email: "contato@tmtextil.com.br",
  showroomLocation: "Alameda Gabriel Monteiro da Silva, Jardins — São Paulo / SP",
  parisBureau: "1er Arrondissement, Place Vendôme — Paris, France"
};
```

---

## 🚀 Como Visualizar Localmente

Basta abrir o arquivo `index.html` em qualquer navegador web (Google Chrome, Safari, Edge, Firefox), ou executar via terminal:

```bash
# Executar servidor local simples
python -m http.server 8080 --directory "C:\Users\54773582898\Desktop\site-textilemoda"
```

Acesse em: `http://localhost:8080`

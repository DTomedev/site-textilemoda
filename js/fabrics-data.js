/**
 * T&M TÊXTIL — BASE DE DADOS DE TECIDOS NOBRES
 * Curadoria de alta-costura, alfaiataria fina e tecidos exclusivos.
 */

const FABRICS_DATA = [
  {
    id: "tm-101",
    ref: "TM-101",
    name: "Crepe Georgette de Seda Royale",
    categoryKey: "festa",
    categoryLabel: "Festa & Gala",
    tags: ["festa", "feminina", "leves", "premium"],
    composition: "100% Seda Mulberry Pura",
    weight: "68 g/m² (Leveza etérea)",
    width: "1,40 m útil",
    drape: "Extremamente fluido com movimento em cascata",
    touch: "Sutilmente granulado, suave e fresco",
    transparency: "Semiotransparente (exige forro em sedas ou tules)",
    shortDesc: "Seda pura com textura georgette refinada, caimento aéreo incomparável para vestidos de noiva, vestidos de gala e camisas fluidas de alta costura.",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=900&auto=format&fit=crop",
    recommendedFor: ["Vestidos de Festa Fluidos", "Véus e Sobressaias de Noiva", "Camisaria Feminina de Luxo", "Echarpes & Foulards"],
    care: "Lavagem a seco especializada em lavanderia têxtil. Passar a vapor brando com proteção de tecido de algodão fino.",
    colors: [
      { name: "Bordô Imperial", hex: "#72162C" },
      { name: "Azul Petróleo Nuit", hex: "#0E243A" },
      { name: "Off-White Pérola", hex: "#F5F2EB" },
      { name: "Preto Noir", hex: "#111111" }
    ]
  },
  {
    id: "tm-204",
    ref: "TM-204",
    name: "Lã Fria Australiana Super 150s",
    categoryKey: "alfaiataria",
    categoryLabel: "Alfaiataria",
    tags: ["alfaiataria", "masculina", "feminina", "estruturados", "premium"],
    composition: "98% Lã Virgem Super 150s, 2% Lycra Suíça",
    weight: "240 g/m² (Gramatura 4 estações)",
    width: "1,50 m útil",
    drape: "Impecável, com caimento britânico estruturado",
    touch: "Toque extremamente macio, acetinado e térmico",
    transparency: "Opaco (100% fechado)",
    shortDesc: "Fio super 150s de lã virgem de alta torção com resiliência natural. Mantém o vinco impecável e oferece conforto térmico tanto no inverno quanto no verão.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=900&auto=format&fit=crop",
    recommendedFor: ["Costumes e Ternos Sob Medida", "Blazers e Smokings", "Calças de Alfaiataria Masculina e Feminina", "Sobretudos Leves"],
    care: "Lavagem a seco profissional. Não centrifugar. Escovação periódica com cerdas naturais de crina de cavalo.",
    colors: [
      { name: "Azul Marinho Noite", hex: "#0A1428" },
      { name: "Cinza Grafite Oxford", hex: "#2C3038" },
      { name: "Vinho Merlot", hex: "#561223" },
      { name: "Preto Ébano", hex: "#0D0D0F" }
    ]
  },
  {
    id: "tm-309",
    ref: "TM-309",
    name: "Veludo Devoré Imperial Bordô",
    categoryKey: "festa",
    categoryLabel: "Festa & Gala",
    tags: ["festa", "feminina", "estruturados", "premium"],
    composition: "82% Viscose Rayon no pelo, 18% Seda Pura no fundo",
    weight: "210 g/m² (Médio encorpado)",
    width: "1,38 m útil",
    drape: "Drapeado suntuoso com peso controlado",
    touch: "Aveludado profundo em alto relevo com contraste tátil",
    transparency: "Base translúcida com áreas densas em veludo",
    shortDesc: "Técnica artesanal devoré que desenha arabescos franceses barrocos. Brilho solene que reflete a iluminação noturna com sofisticação dramática.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=900&auto=format&fit=crop",
    recommendedFor: ["Vestidos de Gala de Inverno", "Kimonos e Capas de Noite", "Corpetes Estruturados", "Detalhes e Aplicações em Peças de Festa"],
    care: "Exclusivamente lavagem a seco química. Passar apenas a vapor pelo avesso suspenso sem apoiar a base do ferro.",
    colors: [
      { name: "Bordô Imperial", hex: "#78152C" },
      { name: "Azul Marinho Royale", hex: "#0F1A34" },
      { name: "Preto Absoluto", hex: "#08080A" },
      { name: "Verde Esmeralda Noturno", hex: "#0F2820" }
    ]
  },
  {
    id: "tm-412",
    ref: "TM-412",
    name: "Tweed Bouclé Francês Haute Couture",
    categoryKey: "alfaiataria",
    categoryLabel: "Alfaiataria",
    tags: ["alfaiataria", "feminina", "estruturados", "premium"],
    composition: "55% Lã Virgem, 25% Fio Bouclé de Algodão, 15% Seda, 5% Fios Lurex Ouro Fino",
    weight: "360 g/m² (Encorpado escultural)",
    width: "1,45 m útil",
    drape: "Firme e encorpado com memória geométrica",
    touch: "Relevo bouclé texturizado de toque acolhedor",
    transparency: "100% Opaco",
    shortDesc: "Inspirado na icônica alfaiataria parisiense da Rue Cambon. A combinação de bouclé, lã e fios cintilantes cria um efeito tridimensional único para tailleurs.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=900&auto=format&fit=crop",
    recommendedFor: ["Casaquetos Estilo Francês", "Saias Estruturadas", "Tailleurs Completos", "Casacos Meia-Estação"],
    care: "Limpeza a seco especializada. Guardar sempre em cabide anatômico forrado com capa respirável de TNT.",
    colors: [
      { name: "Marinho & Dourado Antigo", hex: "#141F36" },
      { name: "Vinho & Rosé Pastel", hex: "#6E1A2F" },
      { name: "Cru & Fios Champagne", hex: "#E7DFD3" },
      { name: "Noir & Grafite", hex: "#1F2124" }
    ]
  },
  {
    id: "tm-515",
    ref: "TM-515",
    name: "Tafetá de Seda Duchesse",
    categoryKey: "festa",
    categoryLabel: "Festa & Gala",
    tags: ["festa", "estruturados", "feminina", "premium"],
    composition: "100% Seda Pura Duchesse",
    weight: "185 g/m² (Armado com nobreza)",
    width: "1,42 m útil",
    drape: "Armado, volumoso e com farfalhar acústico clássico",
    touch: "Liso, seco, frio e com luminosidade cintilante",
    transparency: "Totalmente opaco",
    shortDesc: "Tecido nobre de urdidura compacta que mantém volumes amplos e pregas arquitetônicas. A escolha primordial para saias rodadas de alta-costura e laços monumentais.",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=900&auto=format&fit=crop",
    recommendedFor: ["Vestidos de Baile e Gala", "Saias Godês com Armação", "Corpetes Esculturais", "Mangas Bufantes Dramáticas"],
    care: "Lavagem a seco em solvente suave. Jamais borrifar água diretamente antes de passar.",
    colors: [
      { name: "Bleu Nuit Parisien", hex: "#091224" },
      { name: "Bordeaux Profond", hex: "#631024" },
      { name: "Seda Marfim Natural", hex: "#F0ECE1" },
      { name: "Ônix Escovado", hex: "#1A1A1E" }
    ]
  },
  {
    id: "tm-618",
    ref: "TM-618",
    name: "Linho Puro Belga Riviera",
    categoryKey: "casual",
    categoryLabel: "Casual Sofisticado",
    tags: ["casual", "alfaiataria", "masculina", "feminina"],
    composition: "100% Linho Europeu com Selo de Origem Masters of Linen",
    weight: "210 g/m² (Médio equilibrado)",
    width: "1,48 m útil",
    drape: "Maleável com amassamento nobre característico da fibra pura",
    touch: "Fresco, com relevo de fio slub e toque aveludado pós-lavagem",
    transparency: "Opaco com discreta refração de luz natural",
    shortDesc: "Colhido e fiado na Flandres europeia. Oferece o equilíbrio definitivo entre a elegância despretensiosa do resort wear e a sobriedade de alfaiatarias de verão.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=900&auto=format&fit=crop",
    recommendedFor: ["Costumes Desestruturados de Verão", "Camisaria Resort Chic", "Vestidos Chemise Elegantes", "Pantalonas Fluídas"],
    care: "Lavagem suave a mão ou máquina em ciclo delicado frio. Passar ainda ligeiramente úmido para realçar o brilho natural.",
    colors: [
      { name: "Areia Dourada Riviera", hex: "#D6C7B2" },
      { name: "Azul Índigo Mediterrâneo", hex: "#1B2A4A" },
      { name: "Branco Seda Crua", hex: "#FAF8F4" },
      { name: "Vinho Terracota Queimado", hex: "#7E2A38" }
    ]
  },
  {
    id: "tm-721",
    ref: "TM-721",
    name: "Cetim de Seda Charmeuse Duplo",
    categoryKey: "feminina",
    categoryLabel: "Moda Feminina",
    tags: ["feminina", "festa", "leves", "premium"],
    composition: "95% Seda Mulberry Pura, 5% Elastano",
    weight: "115 g/m² (Caimento líquido)",
    width: "1,38 m útil",
    drape: "Extremamente escorregadio e orgânico sobre a silhueta",
    touch: "Ultra macio na face externa com toque crepado no avesso",
    transparency: "Opaco (não requer transparência)",
    shortDesc: "Superfície espelhada com luminosidade líquida. O elastano na trama confere mobilidade e caimento impecável ao corte em viés (bias cut).",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=900&auto=format&fit=crop",
    recommendedFor: ["Slip Dresses de Viés", "Blusas Lingerie Couture", "Vestidos de Festa Sereia", "Forros de Casacos Nobres"],
    care: "Lavagem especializada a seco. Ao passar a ferro, utilizar sempre a temperatura baixa para sedas com sapatilha de teflon.",
    colors: [
      { name: "Vinho Marsala Intenso", hex: "#871B35" },
      { name: "Champagne Royale", hex: "#DFCEB6" },
      { name: "Azul Marinho Meia-Noite", hex: "#08101E" },
      { name: "Verde Sálvia Escuro", hex: "#2A3831" }
    ]
  },
  {
    id: "tm-824",
    ref: "TM-824",
    name: "Gabardine de Algodão Egípcio Pima",
    categoryKey: "alfaiataria",
    categoryLabel: "Alfaiataria",
    tags: ["alfaiataria", "casual", "masculina", "estruturados"],
    composition: "100% Algodão Pima Egípcio Fio Penteado",
    weight: "285 g/m² (Resistência e corpo)",
    width: "1,50 m útil",
    drape: "Firme, disciplinado e com excelente retenção de corte",
    touch: "Trama diagonal compacta de toque sedoso e fechado",
    transparency: "100% Opaco e bloqueador de vento leve",
    shortDesc: "A fibra de algodão mais longa e nobre do mundo tecida na clássica sarja gabardine. Ideal para alfaiataria utilitária de luxo e trench coats resistentes.",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=900&auto=format&fit=crop",
    recommendedFor: ["Trench Coats Clássicos", "Calças Chino Sob Medida", "Jaquetas Estruturadas Safari", "Saias Lápis"],
    care: "Lavagem com sabão neutro em água fria. Passar a ferro morno com pano úmido para assentar costuras.",
    colors: [
      { name: "Bege Trench Britânico", hex: "#BEAD93" },
      { name: "Marinho Navy Militar", hex: "#0B162C" },
      { name: "Preto Fosco Carbono", hex: "#141517" },
      { name: "Bordô Vintage", hex: "#661828" }
    ]
  },
  {
    id: "tm-927",
    ref: "TM-927",
    name: "Zibeline de Seda Pura Royale",
    categoryKey: "premium",
    categoryLabel: "Linha Premium",
    tags: ["premium", "festa", "estruturados", "feminina"],
    composition: "100% Seda Pura Italiana Pesada",
    weight: "310 g/m² (Alta densidade escultural)",
    width: "1,40 m útil",
    drape: "Rígido escultural, permitindo criar volumes arquitetônicos",
    touch: "Semiacetinado com brilho opalescente refinado",
    transparency: "Completamente opaco e denso",
    shortDesc: "A rainha dos tecidos estruturados para vestidos de noiva e alta-costura cerimonial. Sua densidade sustenta pregas monumentais sem desmanchar o desenho.",
    image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=900&auto=format&fit=crop",
    recommendedFor: ["Vestidos de Noiva de Alta Costura", "Vestidos de Debutante Esculturais", "Capas Monocromáticas de Gala", "Bustos com Estruturação de Barbatanas"],
    care: "Apenas lavanderia de alta costura com processo de hidrocarbonetos para sedas preciosas.",
    colors: [
      { name: "Branco Off-White Noiva", hex: "#FDFBF7" },
      { name: "Vinho Borgonha Escuro", hex: "#540F1E" },
      { name: "Azul Meia-Noite Imperial", hex: "#070E1C" },
      { name: "Dourado Pálido Antique", hex: "#D8C7A5" }
    ]
  },
  {
    id: "tm-103",
    ref: "TM-103",
    name: "Cambraia de Linho & Seda Flottant",
    categoryKey: "leves",
    categoryLabel: "Tecidos Leves",
    tags: ["leves", "casual", "feminina"],
    composition: "60% Linho Puro, 40% Seda Mulberry",
    weight: "85 g/m² (Leveza transparente)",
    width: "1,42 m útil",
    drape: "Aéreo com ondulação delicada e leve volume",
    touch: "Frescor do linho com a maciez polida da seda",
    transparency: "Semiotransparente com trama aberta luminosa",
    shortDesc: "A união poética entre a nobreza rústica do linho e a delicadeza translúcida da seda. Proporciona respiração térmica absoluta para peças leves de meia estação.",
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=900&auto=format&fit=crop",
    recommendedFor: ["Camisas Transparentes Poéticas", "Túnicas de Sobreposição", "Vestidos Esvoaçantes de Verão", "Lenços de Cabeça e Pescoço"],
    care: "Lavar delicadamente a mão com detergente para sedas. Secar na sombra sem torcer.",
    colors: [
      { name: "Alabastro Natural", hex: "#F4F0E8" },
      { name: "Céu Francês Desbotado", hex: "#8DA7BE" },
      { name: "Pó de Vinho Antigo", hex: "#8C4A5A" },
      { name: "Nude Pêssego Frio", hex: "#D8BFB0" }
    ]
  },
  {
    id: "tm-114",
    ref: "TM-114",
    name: "Jacquard Brocado Veneziano",
    categoryKey: "estruturados",
    categoryLabel: "Tecidos Estruturados",
    tags: ["estruturados", "festa", "premium", "feminina"],
    composition: "70% Seda Natural, 25% Viscose, 5% Fios Metálicos Ouro Velho",
    weight: "320 g/m² (Tapeçaria de moda pesada)",
    width: "1,40 m útil",
    drape: "Firme, imponente e com relevo táctil acentuado",
    touch: "Bordado denso com textura metálica fria",
    transparency: "100% Opaco",
    shortDesc: "Inspirado nos teares de tecelagem clássica veneziana. Relevos florais entrelaçados em fios metálicos que conferem peso e esplendor imperial a casacos e saias.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=900&auto=format&fit=crop",
    recommendedFor: ["Casacos de Gala Longos", "Vestidos de Noite Baroque", "Saias Estruturadas de Concerto", "Aventais e Faixas de Alta-Costura"],
    care: "Processamento a seco rigoroso. Evitar atrito com joias pontiagudas para não puxar fios do brocado.",
    colors: [
      { name: "Vinho & Ouro Envelhecido", hex: "#6D172A" },
      { name: "Marinho & Bronze Metal", hex: "#0E182A" },
      { name: "Preto Noir & Dourado", hex: "#161616" }
    ]
  },
  {
    id: "tm-125",
    ref: "TM-125",
    name: "Popeline de Algodão Giza Fio 120/2",
    categoryKey: "masculina",
    categoryLabel: "Moda Masculina",
    tags: ["masculina", "alfaiataria", "casual", "leves"],
    composition: "100% Algodão Egípcio Giza Extra-Long Staple",
    weight: "125 g/m² (Camisaria fina)",
    width: "1,50 m útil",
    drape: "Flexível, maleável e com dobra precisa",
    touch: "Sedoso como cetim, porém fresco e macio",
    transparency: "Opaco com altíssima contagem de fios",
    shortDesc: "Dois cabos retorcidos de algodão egípcio de fibra extralonga. A matéria-prima definitiva para colchas e camisas sob medida que enfrentam o tempo sem perder o frescor.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=900&auto=format&fit=crop",
    recommendedFor: ["Camisaria Masculina Sob Medida", "Camisas Femininas com Punhos Franceses", "Vestidos Camisa Estruturados", "Forros de Blazers Clássicos"],
    care: "Lavar a 40°C. Engomar suavemente para colarinho e punhos perfeitos.",
    colors: [
      { name: "Branco Gelo Ótico", hex: "#FFFFFF" },
      { name: "Azul Céu Savile Row", hex: "#C7D8E8" },
      { name: "Listras Finas Marinho", hex: "#102342" },
      { name: "Rosa Francês Pálido", hex: "#E9D2D7" }
    ]
  }
];

// Configuração Geral da Marca T&M Têxtil
const TM_CONFIG = {
  brandName: "T&M Têxtil",
  tagline: "Tecidos que transformam ideias em identidade",
  whatsappNumber: "5511999999999", // Altere aqui para o número oficial da empresa (apenas dígitos: DDI + DDD + Número)
  email: "contato@tmtextil.com.br",
  instagram: "https://instagram.com/tmtextil.oficial",
  showroomLocation: "Alameda Gabriel Monteiro da Silva, Jardins — São Paulo / SP",
  parisBureau: "1er Arrondissement, Place Vendôme — Paris, France"
};

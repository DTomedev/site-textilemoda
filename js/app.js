/**
 * T&M TÊXTIL — APPLICATION CONTROLLER
 * Interatividade do catálogo, filtros, modal técnico, WhatsApp e navegação.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Estado da Aplicação
  const state = {
    currentCategory: 'all',
    searchQuery: '',
    activeFabric: null
  };

  // Referências aos Elementos do DOM
  const elements = {
    header: document.getElementById('mainHeader'),
    fabricsGrid: document.getElementById('fabricsGrid'),
    resultsCount: document.getElementById('resultsCount'),
    catalogEmpty: document.getElementById('catalogEmpty'),
    filterPills: document.querySelectorAll('.filter-pill'),
    searchInput: document.getElementById('fabricSearchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    btnResetFilters: document.getElementById('btnResetFilters'),
    
    // Modal
    modal: document.getElementById('fabricModal'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalImage: document.getElementById('modalFabricImage'),
    modalCategoryBadge: document.getElementById('modalCategoryBadge'),
    modalRefCode: document.getElementById('modalRefCode'),
    modalFabricName: document.getElementById('modalFabricName'),
    modalFabricDesc: document.getElementById('modalFabricDesc'),
    modalSpecComposition: document.getElementById('modalSpecComposition'),
    modalSpecWeight: document.getElementById('modalSpecWeight'),
    modalSpecWidth: document.getElementById('modalSpecWidth'),
    modalSpecDrape: document.getElementById('modalSpecDrape'),
    modalSpecTouch: document.getElementById('modalSpecTouch'),
    modalSpecTransparency: document.getElementById('modalSpecTransparency'),
    modalApplicationsTags: document.getElementById('modalApplicationsTags'),
    modalCareText: document.getElementById('modalCareText'),
    modalBtnWhatsApp: document.getElementById('modalBtnWhatsApp'),

    // Mobile Navigation
    mobileMenuToggle: document.getElementById('mobileMenuToggle'),
    mobileNavDrawer: document.getElementById('mobileNavDrawer'),
    mobileDrawerClose: document.getElementById('mobileDrawerClose'),
    drawerBackdrop: document.getElementById('drawerBackdrop'),
    mobileNavLinks: document.querySelectorAll('.mobile-nav-link'),

    // Botões de WhatsApp Externos
    btnHeaderWhatsApp: document.getElementById('btnHeaderWhatsApp'),
    btnMobileWhatsApp: document.getElementById('btnMobileWhatsApp'),
    btnHeroWhatsApp: document.getElementById('btnHeroWhatsApp'),
    btnRequestSwatch: document.getElementById('btnRequestSwatch'),
    btnContactWaChannel: document.getElementById('btnContactWaChannel'),
    btnContactMainWhatsApp: document.getElementById('btnContactMainWhatsApp'),
    floatingWhatsAppBtn: document.getElementById('floatingWhatsAppBtn'),
    footerWaTriggers: document.querySelectorAll('.footer-wa-trigger')
  };

  /**
   * 1. Utilitário para Disparo do WhatsApp
   */
  function triggerWhatsApp(message) {
    const cleanPhone = (TM_CONFIG.whatsappNumber || "5511999999999").replace(/\D/g, '');
    const encodedText = encodeURIComponent(message);
    const url = `https://wa.me/${cleanPhone}?text=${encodedText}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  /**
   * 2. Renderização dos Cards de Tecidos
   */
  function renderFabrics() {
    if (!elements.fabricsGrid) return;

    // Filtragem por Categoria e Busca
    const filtered = FABRICS_DATA.filter(fabric => {
      const matchCategory = state.currentCategory === 'all' 
        ? true 
        : (fabric.tags && fabric.tags.includes(state.currentCategory)) || fabric.categoryKey === state.currentCategory;

      if (!matchCategory) return false;

      if (!state.searchQuery) return true;

      const q = state.searchQuery.toLowerCase().trim();
      const matchName = fabric.name.toLowerCase().includes(q);
      const matchRef = fabric.ref.toLowerCase().includes(q);
      const matchComp = fabric.composition.toLowerCase().includes(q);
      const matchDesc = fabric.shortDesc.toLowerCase().includes(q);
      const matchCategoryLabel = fabric.categoryLabel.toLowerCase().includes(q);
      const matchDrape = fabric.drape.toLowerCase().includes(q);

      return matchName || matchRef || matchComp || matchDesc || matchCategoryLabel || matchDrape;
    });

    // Atualização de Status
    if (elements.resultsCount) {
      if (filtered.length === 0) {
        elements.resultsCount.textContent = 'Nenhum tecido corresponde aos critérios';
      } else if (state.currentCategory === 'all' && !state.searchQuery) {
        elements.resultsCount.textContent = `Apresentando todos os ${filtered.length} tecidos da curadoria`;
      } else {
        elements.resultsCount.textContent = `Encontrado(s) ${filtered.length} tecido(s) com os filtros aplicados`;
      }
    }

    // Exibição do Estado Vazio
    if (filtered.length === 0) {
      elements.fabricsGrid.innerHTML = '';
      if (elements.catalogEmpty) elements.catalogEmpty.style.display = 'block';
      return;
    } else {
      if (elements.catalogEmpty) elements.catalogEmpty.style.display = 'none';
    }

    // Construção dos Cards
    elements.fabricsGrid.innerHTML = filtered.map(fabric => {
      // Tags de Características (exibe até 3)
      const characteristics = [
        fabric.weight.split(' ')[0], 
        fabric.touch.split(',')[0],
        fabric.drape.split(',')[0]
      ];
      const tagsHtml = characteristics.map(char => `<span class="char-tag">${char}</span>`).join('');

      return `
        <article class="fabric-card" data-id="${fabric.id}">
          <div class="card-media" onclick="window.TMApp.openFabricModal('${fabric.id}')" style="cursor: pointer;" title="Clique para ver ficha técnica completa">
            <img src="${fabric.image}" alt="${fabric.name} — T&M Têxtil" loading="lazy">
            <span class="card-category-badge">${fabric.categoryLabel}</span>
            <span class="card-ref-badge">${fabric.ref}</span>
          </div>

          <div class="card-content">
            <div class="card-header-line">
              <h3 class="card-fabric-name" onclick="window.TMApp.openFabricModal('${fabric.id}')" style="cursor: pointer;">${fabric.name}</h3>
            </div>
            <div class="card-composition">${fabric.composition}</div>
            
            <p class="card-description">${fabric.shortDesc}</p>

            <div class="card-characteristics">
              ${tagsHtml}
            </div>

            <div class="card-actions">
              <button type="button" class="btn-card-wa" onclick="window.TMApp.inquireFabric('${fabric.id}')" title="Falar com consultor via WhatsApp sobre este tecido">
                <i class="fa-brands fa-whatsapp"></i>
                <span>Tenho interesse — falar pelo WhatsApp</span>
              </button>
              <button type="button" class="btn-card-details" onclick="window.TMApp.openFabricModal('${fabric.id}')">
                <i class="fa-solid fa-circle-info"></i>
                <span>Ver Ficha Técnica</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  /**
   * 3. Abertura do Modal com Ficha Técnica Completa
   */
  function openFabricModal(fabricId) {
    const fabric = FABRICS_DATA.find(f => f.id === fabricId);
    if (!fabric) return;

    state.activeFabric = fabric;

    // Preenchimento de dados
    elements.modalImage.src = fabric.image;
    elements.modalImage.alt = fabric.name;
    elements.modalCategoryBadge.textContent = fabric.categoryLabel;
    elements.modalRefCode.textContent = `REF: ${fabric.ref}`;
    elements.modalFabricName.textContent = fabric.name;
    elements.modalFabricDesc.textContent = fabric.shortDesc;

    elements.modalSpecComposition.textContent = fabric.composition;
    elements.modalSpecWeight.textContent = fabric.weight;
    elements.modalSpecWidth.textContent = fabric.width;
    elements.modalSpecDrape.textContent = fabric.drape;
    elements.modalSpecTouch.textContent = fabric.touch;
    elements.modalSpecTransparency.textContent = fabric.transparency;


    // Aplicações Recomendadas
    elements.modalApplicationsTags.innerHTML = (fabric.recommendedFor || []).map(app => `
      <span class="app-tag"><i class="fa-solid fa-check"></i> ${app}</span>
    `).join('');

    // Cuidados
    elements.modalCareText.textContent = fabric.care || "Consulte nosso suporte técnico para orientações específicas de lavagem.";

    // Exibir Modal
    elements.modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      elements.modal.classList.add('active');
    }, 10);
  }

  function closeFabricModal() {
    elements.modal.classList.remove('active');
    setTimeout(() => {
      elements.modal.style.display = 'none';
      document.body.style.overflow = '';
      state.activeFabric = null;
    }, 300);
  }

  /**
   * 4. Mensagem Personalizada do Tecido para o WhatsApp
   */
  function inquireFabric(fabricId) {
    const fabric = FABRICS_DATA.find(f => f.id === fabricId);
    if (!fabric) return;

    const msg = `Olá, T&M Têxtil! Tenho interesse no tecido "${fabric.name}" (Ref: ${fabric.ref}), da categoria ${fabric.categoryLabel}. Gostaria de informações sobre disponibilidade, metragens e envio de amostras.`;
    triggerWhatsApp(msg);
  }

  /**
   * 5. Event Listeners dos Filtros e Pesquisa
   */
  elements.filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      elements.filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');
      state.currentCategory = pill.getAttribute('data-category');
      renderFabrics();
    });
  });

  // Busca em Tempo Real
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (elements.clearSearchBtn) {
        elements.clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
      }
      renderFabrics();
    });
  }

  if (elements.clearSearchBtn) {
    elements.clearSearchBtn.addEventListener('click', () => {
      elements.searchInput.value = '';
      state.searchQuery = '';
      elements.clearSearchBtn.style.display = 'none';
      renderFabrics();
      elements.searchInput.focus();
    });
  }

  if (elements.btnResetFilters) {
    elements.btnResetFilters.addEventListener('click', () => {
      state.currentCategory = 'all';
      state.searchQuery = '';
      if (elements.searchInput) elements.searchInput.value = '';
      if (elements.clearSearchBtn) elements.clearSearchBtn.style.display = 'none';
      elements.filterPills.forEach(p => {
        p.classList.toggle('active', p.getAttribute('data-category') === 'all');
      });
      renderFabrics();
    });
  }

  // Links do Footer para Filtragem Direta
  document.querySelectorAll('[data-filter]').forEach(footerFilterLink => {
    footerFilterLink.addEventListener('click', (e) => {
      const cat = footerFilterLink.getAttribute('data-filter');
      if (cat) {
        state.currentCategory = cat;
        elements.filterPills.forEach(p => {
          const isMatch = p.getAttribute('data-category') === cat;
          p.classList.toggle('active', isMatch);
          p.setAttribute('aria-selected', isMatch ? 'true' : 'false');
        });
        renderFabrics();
      }
    });
  });

  /**
   * 6. Listeners do Modal
   */
  if (elements.modalCloseBtn) {
    elements.modalCloseBtn.addEventListener('click', closeFabricModal);
  }

  if (elements.modal) {
    elements.modal.addEventListener('click', (e) => {
      if (e.target === elements.modal) {
        closeFabricModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.modal.style.display === 'flex') {
      closeFabricModal();
    }
  });

  if (elements.modalBtnWhatsApp) {
    elements.modalBtnWhatsApp.addEventListener('click', () => {
      if (state.activeFabric) {
        inquireFabric(state.activeFabric.id);
      } else {
        triggerWhatsApp("Olá! Gostaria de consultar informações sobre os tecidos da T&M Têxtil.");
      }
    });
  }

  /**
   * 7. Listeners dos Botões Gerais de WhatsApp
   */
  // Header WhatsApp
  if (elements.btnHeaderWhatsApp) {
    elements.btnHeaderWhatsApp.addEventListener('click', () => {
      triggerWhatsApp("Olá! Conheci a T&M Têxtil através do site e gostaria de um atendimento exclusivo com um consultor têxtil.");
    });
  }

  // Mobile Drawer WhatsApp
  if (elements.btnMobileWhatsApp) {
    elements.btnMobileWhatsApp.addEventListener('click', () => {
      triggerWhatsApp("Olá! Gostaria de consultar o catálogo da T&M Têxtil pelo WhatsApp.");
      closeMobileDrawer();
    });
  }

  // Hero WhatsApp
  if (elements.btnHeroWhatsApp) {
    elements.btnHeroWhatsApp.addEventListener('click', () => {
      triggerWhatsApp("Olá! Gostaria de falar com a T&M Têxtil sobre a seleção de tecidos nobres para alta costura e confecção.");
    });
  }

  // Book de Amostras para Estilistas (Banner B2B)
  if (elements.btnRequestSwatch) {
    elements.btnRequestSwatch.addEventListener('click', () => {
      triggerWhatsApp("Olá! Sou estilista / ateliê de moda e gostaria de solicitar o Book de Amostras e mostruário físico da T&M Têxtil.");
    });
  }

  // Canal Direto de Contato
  if (elements.btnContactWaChannel) {
    elements.btnContactWaChannel.addEventListener('click', () => {
      triggerWhatsApp("Olá! Gostaria de tirar dúvidas técnicas e consultar a disponibilidade de tecidos com a T&M Têxtil.");
    });
  }

  if (elements.btnContactMainWhatsApp) {
    elements.btnContactMainWhatsApp.addEventListener('click', () => {
      triggerWhatsApp("Olá! Gostaria de agendar um horário para visita ao Showroom da T&M Têxtil ou consultar metragens.");
    });
  }

  // Botão Flutuante
  if (elements.floatingWhatsAppBtn) {
    elements.floatingWhatsAppBtn.addEventListener('click', () => {
      triggerWhatsApp("Olá! Gostaria de falar com um consultor da T&M Têxtil.");
    });
  }

  // Triggers do Footer
  elements.footerWaTriggers.forEach(el => {
    el.addEventListener('click', () => {
      triggerWhatsApp("Olá! Gostaria de entrar em contato com a equipe de atendimento da T&M Têxtil.");
    });
  });

  /**
   * 8. Header Sticky Scroll & Active Link Spy
   */
  function handleScroll() {
    if (window.scrollY > 40) {
      elements.header.classList.add('scrolled');
    } else {
      elements.header.classList.remove('scrolled');
    }

    // Active Navigation Spy
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.desktop-nav .nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /**
   * 9. Menu Mobile Drawer
   */
  function openMobileDrawer() {
    elements.mobileNavDrawer.classList.add('open');
    elements.drawerBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    elements.mobileNavDrawer.classList.remove('open');
    elements.drawerBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (elements.mobileMenuToggle) {
    elements.mobileMenuToggle.addEventListener('click', openMobileDrawer);
  }

  if (elements.mobileDrawerClose) {
    elements.mobileDrawerClose.addEventListener('click', closeMobileDrawer);
  }

  if (elements.drawerBackdrop) {
    elements.drawerBackdrop.addEventListener('click', closeMobileDrawer);
  }

  elements.mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  /**
   * 10. Expor Métodos Globais para Callbacks Inline
   */
  window.TMApp = {
    openFabricModal,
    closeFabricModal,
    inquireFabric,
    triggerWhatsApp
  };

  // Renderização Inicial do Catálogo
  renderFabrics();
});

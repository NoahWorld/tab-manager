let sessions = [];
let currentTabs = [];
let selectedTabIds = new Set();
let currentLang = 'en';

const translations = {
  en: {
    appName: 'Tab Manager',
    currentTabs: 'Current Tabs',
    savedSessions: 'Saved Sessions',
    selected: 'selected',
    selectAll: 'Select All',
    deselectAll: 'Deselect All',
    sessionNamePlaceholder: 'Session name',
    saveSelected: 'Save Selected',
    saveAll: 'Save All',
    noSessions: 'No saved sessions yet',
    noSessionsHint: 'Save your tabs to get started',
    restore: 'Restore',
    delete: 'Delete',
    tabs: 'tabs',
    savedSuccess: 'Saved {count} tabs as "{name}"',
    restoredSuccess: 'Restored {count} tabs from "{name}"',
    sessionDeleted: 'Session deleted',
    enterSessionName: 'Please enter a session name',
    selectAtLeastOne: 'Please select at least one tab'
  },
  'zh-CN': {
    appName: '标签页管理器',
    currentTabs: '当前标签页',
    savedSessions: '已保存会话',
    selected: '已选择',
    selectAll: '全选',
    deselectAll: '取消全选',
    sessionNamePlaceholder: '会话名称',
    saveSelected: '保存选中',
    saveAll: '保存全部',
    noSessions: '还没有保存的会话',
    noSessionsHint: '保存标签页以开始使用',
    restore: '恢复',
    delete: '删除',
    tabs: '个标签页',
    savedSuccess: '已将 {count} 个标签页保存为 "{name}"',
    restoredSuccess: '已从 "{name}" 恢复 {count} 个标签页',
    sessionDeleted: '会话已删除',
    enterSessionName: '请输入会话名称',
    selectAtLeastOne: '请至少选择一个标签页'
  },
  'zh-TW': {
    appName: '標籤頁管理器',
    currentTabs: '目前標籤頁',
    savedSessions: '已儲存會話',
    selected: '已選擇',
    selectAll: '全選',
    deselectAll: '取消全選',
    sessionNamePlaceholder: '會話名稱',
    saveSelected: '儲存選取',
    saveAll: '儲存全部',
    noSessions: '還沒有儲存的會話',
    noSessionsHint: '儲存標籤頁以開始使用',
    restore: '恢復',
    delete: '刪除',
    tabs: '個標籤頁',
    savedSuccess: '已將 {count} 個標籤頁儲存為 "{name}"',
    restoredSuccess: '已從 "{name}" 恢復 {count} 個標籤頁',
    sessionDeleted: '會話已刪除',
    enterSessionName: '請輸入會話名稱',
    selectAtLeastOne: '請至少選擇一個標籤頁'
  },
  ja: {
    appName: 'タブマネージャー',
    currentTabs: '現在のタブ',
    savedSessions: '保存済みセッション',
    selected: '選択中',
    selectAll: 'すべて選択',
    deselectAll: '選択解除',
    sessionNamePlaceholder: 'セッション名',
    saveSelected: '選択を保存',
    saveAll: 'すべて保存',
    noSessions: '保存されたセッションはありません',
    noSessionsHint: 'タブを保存して始めましょう',
    restore: '復元',
    delete: '削除',
    tabs: 'タブ',
    savedSuccess: '{count} 個のタブを "{name}" として保存しました',
    restoredSuccess: '"{name}" から {count} 個のタブを復元しました',
    sessionDeleted: 'セッションを削除しました',
    enterSessionName: 'セッション名を入力してください',
    selectAtLeastOne: '少なくとも1つのタブを選択してください'
  },
  es: {
    appName: 'Gestor de Pestañas',
    currentTabs: 'Pestañas Actuales',
    savedSessions: 'Sesiones Guardadas',
    selected: 'seleccionadas',
    selectAll: 'Seleccionar Todo',
    deselectAll: 'Deseleccionar Todo',
    sessionNamePlaceholder: 'Nombre de sesión',
    saveSelected: 'Guardar Selección',
    saveAll: 'Guardar Todo',
    noSessions: 'No hay sesiones guardadas',
    noSessionsHint: 'Guarda tus pestañas para comenzar',
    restore: 'Restaurar',
    delete: 'Eliminar',
    tabs: 'pestañas',
    savedSuccess: 'Guardadas {count} pestañas como "{name}"',
    restoredSuccess: 'Restauradas {count} pestañas de "{name}"',
    sessionDeleted: 'Sesión eliminada',
    enterSessionName: 'Por favor ingresa un nombre de sesión',
    selectAtLeastOne: 'Por favor selecciona al menos una pestaña'
  },
  pt: {
    appName: 'Gerenciador de Abas',
    currentTabs: 'Abas Atuais',
    savedSessions: 'Sessões Salvas',
    selected: 'selecionadas',
    selectAll: 'Selecionar Tudo',
    deselectAll: 'Desmarcar Tudo',
    sessionNamePlaceholder: 'Nome da sessão',
    saveSelected: 'Salvar Seleção',
    saveAll: 'Salvar Tudo',
    noSessions: 'Nenhuma sessão salva ainda',
    noSessionsHint: 'Salve suas abas para começar',
    restore: 'Restaurar',
    delete: 'Excluir',
    tabs: 'abas',
    savedSuccess: 'Salvou {count} abas como "{name}"',
    restoredSuccess: 'Restaurou {count} abas de "{name}"',
    sessionDeleted: 'Sessão excluída',
    enterSessionName: 'Por favor insira um nome de sessão',
    selectAtLeastOne: 'Por favor selecione pelo menos uma aba'
  },
  ko: {
    appName: '탭 관리자',
    currentTabs: '현재 탭',
    savedSessions: '저장된 세션',
    selected: '선택됨',
    selectAll: '모두 선택',
    deselectAll: '선택 해제',
    sessionNamePlaceholder: '세션 이름',
    saveSelected: '선택 항목 저장',
    saveAll: '모두 저장',
    noSessions: '저장된 세션이 없습니다',
    noSessionsHint: '탭을 저장하여 시작하세요',
    restore: '복원',
    delete: '삭제',
    tabs: '탭',
    savedSuccess: '{count}개의 탭을 "{name}"(으)로 저장했습니다',
    restoredSuccess: '"{name}"에서 {count}개의 탭을 복원했습니다',
    sessionDeleted: '세션이 삭제되었습니다',
    enterSessionName: '세션 이름을 입력하세요',
    selectAtLeastOne: '최소 하나의 탭을 선택하세요'
  },
  ar: {
    appName: 'مدير علامات التبويب',
    currentTabs: 'علامات التبويب الحالية',
    savedSessions: 'الجلسات المحفوظة',
    selected: 'محدد',
    selectAll: 'تحديد الكل',
    deselectAll: 'إلغاء التحديد',
    sessionNamePlaceholder: 'اسم الجلسة',
    saveSelected: 'حفظ المحدد',
    saveAll: 'حفظ الكل',
    noSessions: 'لا توجد جلسات محفوظة بعد',
    noSessionsHint: 'احفظ علامات التبويب للبدء',
    restore: 'استعادة',
    delete: 'حذف',
    tabs: 'علامات تبويب',
    savedSuccess: 'تم حفظ {count} علامات تبويب باسم "{name}"',
    restoredSuccess: 'تم استعادة {count} علامات تبويب من "{name}"',
    sessionDeleted: 'تم حذف الجلسة',
    enterSessionName: 'الرجاء إدخال اسم الجلسة',
    selectAtLeastOne: 'الرجاء تحديد علامة تبويب واحدة على الأقل'
  }
};

// Initialize
async function init() {
  await loadLanguage();
  await loadCurrentTabs();
  await loadSessions();
  renderCurrentTabs();
  renderSessions();
  bindEvents();
  applyTranslations();
}

// Load language preference
async function loadLanguage() {
  const result = await chrome.storage.local.get(['language']);
  currentLang = result.language || detectBrowserLanguage();
  document.getElementById('langSelect').value = currentLang;
  document.documentElement.lang = currentLang;
  document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
}

// Detect browser language
function detectBrowserLanguage() {
  const lang = navigator.language || navigator.userLanguage;
  if (lang.startsWith('zh-TW') || lang.startsWith('zh-HK')) return 'zh-TW';
  if (lang.startsWith('zh')) return 'zh-CN';
  if (lang.startsWith('ja')) return 'ja';
  if (lang.startsWith('ko')) return 'ko';
  if (lang.startsWith('es')) return 'es';
  if (lang.startsWith('pt')) return 'pt';
  if (lang.startsWith('ar')) return 'ar';
  return 'en';
}

// Apply translations
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
  
  updateTabCount();
}

// Get translation
function t(key, params = {}) {
  let text = translations[currentLang]?.[key] || translations.en[key] || key;
  Object.keys(params).forEach(k => {
    text = text.replace(`{${k}}`, params[k]);
  });
  return text;
}

// Update tab count display
function updateTabCount() {
  const count = currentTabs.length;
  document.getElementById('currentTabCount').textContent = `${count} ${t('tabs')}`;
}

// Load current tabs
async function loadCurrentTabs() {
  currentTabs = await chrome.tabs.query({ currentWindow: true });
  updateTabCount();
}

// Load sessions from storage
async function loadSessions() {
  const result = await chrome.storage.local.get(['sessions']);
  sessions = result.sessions || [];
}

// Save sessions to storage
async function saveSessions() {
  await chrome.storage.local.set({ sessions });
}

// Render current tabs list
function renderCurrentTabs() {
  const container = document.getElementById('currentTabsList');
  
  container.innerHTML = currentTabs.map(tab => {
    const isSelected = selectedTabIds.has(tab.id);
    const favicon = tab.favIconUrl || 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"%3E%3Ctext y="14" font-size="14"%3E📄%3C/text%3E%3C/svg%3E';
    
    return `
      <div class="tab-item">
        <input type="checkbox" class="tab-checkbox" data-tab-id="${tab.id}" ${isSelected ? 'checked' : ''}>
        <img class="tab-favicon" src="${favicon}" alt="">
        <div class="tab-info">
          <div class="tab-title">${escapeHtml(tab.title || 'Untitled')}</div>
          <div class="tab-url">${escapeHtml(tab.url || '')}</div>
        </div>
        <button class="tab-close" data-close-id="${tab.id}">×</button>
      </div>
    `;
  }).join('');
  
  // Bind checkbox events
  container.querySelectorAll('.tab-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', handleTabSelection);
  });
  
  // Bind close button events
  container.querySelectorAll('.tab-close').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const tabId = parseInt(e.target.dataset.closeId);
      await chrome.tabs.remove(tabId);
      await loadCurrentTabs();
      renderCurrentTabs();
      updateSelectedCount();
    });
  });
  
  updateSelectedCount();
}

// Handle tab selection
function handleTabSelection(e) {
  const tabId = parseInt(e.target.dataset.tabId);
  if (e.target.checked) {
    selectedTabIds.add(tabId);
  } else {
    selectedTabIds.delete(tabId);
  }
  updateSelectedCount();
}

// Update selected count display
function updateSelectedCount() {
  const count = selectedTabIds.size;
  document.getElementById('selectedCount').textContent = count;
  document.getElementById('saveSelectedBar').classList.toggle('show', count > 0);
}

// Select all tabs
function selectAll() {
  selectedTabIds.clear();
  currentTabs.forEach(tab => selectedTabIds.add(tab.id));
  renderCurrentTabs();
}

// Deselect all tabs
function deselectAll() {
  selectedTabIds.clear();
  renderCurrentTabs();
}

// Save selected tabs
async function saveSelectedTabs() {
  const sessionName = document.getElementById('selectedSessionName').value.trim();
  
  if (!sessionName) {
    showStatus(t('enterSessionName'), 'error');
    return;
  }
  
  if (selectedTabIds.size === 0) {
    showStatus(t('selectAtLeastOne'), 'error');
    return;
  }
  
  const selectedTabs = currentTabs.filter(tab => selectedTabIds.has(tab.id));
  const tabData = selectedTabs.map(tab => ({
    url: tab.url,
    title: tab.title
  }));
  
  const session = {
    id: Date.now(),
    name: sessionName,
    tabs: tabData,
    createdAt: new Date().toISOString(),
    tabCount: tabData.length
  };
  
  sessions.unshift(session);
  await saveSessions();
  
  document.getElementById('selectedSessionName').value = '';
  selectedTabIds.clear();
  showStatus(t('savedSuccess', { count: tabData.length, name: sessionName }));
  renderCurrentTabs();
  renderSessions();
}

// Save all current tabs
async function saveAllTabs() {
  const sessionName = document.getElementById('sessionName').value.trim();
  
  if (!sessionName) {
    showStatus(t('enterSessionName'), 'error');
    return;
  }
  
  const tabs = await chrome.tabs.query({ currentWindow: true });
  const tabData = tabs.map(tab => ({
    url: tab.url,
    title: tab.title
  }));
  
  const session = {
    id: Date.now(),
    name: sessionName,
    tabs: tabData,
    createdAt: new Date().toISOString(),
    tabCount: tabData.length
  };
  
  sessions.unshift(session);
  await saveSessions();
  
  document.getElementById('sessionName').value = '';
  showStatus(t('savedSuccess', { count: tabData.length, name: sessionName }));
  renderSessions();
}

// Restore a session
async function restoreSession(sessionId) {
  const session = sessions.find(s => s.id === sessionId);
  if (!session) return;
  
  for (const tab of session.tabs) {
    await chrome.tabs.create({ url: tab.url, active: false });
  }
  
  showStatus(t('restoredSuccess', { count: session.tabs.length, name: session.name }));
}

// Delete a session
async function deleteSession(sessionId) {
  sessions = sessions.filter(s => s.id !== sessionId);
  await saveSessions();
  showStatus(t('sessionDeleted'));
  renderSessions();
}

// Render sessions list
function renderSessions() {
  const container = document.getElementById('sessionsList');
  
  if (sessions.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">📁</div>
        <div>${t('noSessions')}</div>
        <div style="font-size: 12px; margin-top: 8px;">${t('noSessionsHint')}</div>
      </div>
    `;
    return;
  }
  
  container.innerHTML = sessions.map(session => {
    const date = new Date(session.createdAt);
    const dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    return `
      <div class="session-item">
        <div class="session-info">
          <div class="session-name">${escapeHtml(session.name)}</div>
          <div class="session-meta">${session.tabCount} ${t('tabs')} • ${dateStr}</div>
        </div>
        <div class="session-actions">
          <button class="btn btn-success btn-small" data-action="restore" data-id="${session.id}">${t('restore')}</button>
          <button class="btn btn-danger btn-small" data-action="delete" data-id="${session.id}">${t('delete')}</button>
        </div>
      </div>
    `;
  }).join('');
  
  // Add event listeners
  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const action = e.target.dataset.action;
      const id = parseInt(e.target.dataset.id);
      
      if (action === 'restore') {
        await restoreSession(id);
      } else if (action === 'delete') {
        await deleteSession(id);
      }
    });
  });
}

// Show status message
function showStatus(message, type = 'success') {
  const status = document.getElementById('status');
  status.textContent = message;
  status.className = 'status show';
  
  if (type === 'error') {
    status.style.background = '#fef2f2';
    status.style.color = '#991b1b';
  } else {
    status.style.background = '#f0fdf4';
    status.style.color = '#166534';
  }
  
  setTimeout(() => {
    status.classList.remove('show');
  }, 3000);
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Bind all events
function bindEvents() {
  // Language selector
  document.getElementById('langSelect').addEventListener('change', async (e) => {
    currentLang = e.target.value;
    await chrome.storage.local.set({ language: currentLang });
    document.documentElement.lang = currentLang;
    document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    applyTranslations();
    renderSessions();
  });
  
  // Tab navigation
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const view = e.target.dataset.view;
      
      // Update active tab button
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      
      // Update active view
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      document.getElementById(view === 'current' ? 'currentView' : 'savedView').classList.add('active');
    });
  });
  
  // Current tabs actions
  document.getElementById('selectAllBtn').addEventListener('click', selectAll);
  document.getElementById('deselectAllBtn').addEventListener('click', deselectAll);
  document.getElementById('saveSelectedBtn').addEventListener('click', saveSelectedTabs);
  
  // Save all tabs
  document.getElementById('saveAllBtn').addEventListener('click', saveAllTabs);
  document.getElementById('sessionName').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') saveAllTabs();
  });
  
  // Save selected tabs on Enter
  document.getElementById('selectedSessionName').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') saveSelectedTabs();
  });
}

// Initialize on load
init();

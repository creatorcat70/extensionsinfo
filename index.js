// ========== Extension Info LocalStorage Persistence ==========
// Paste this at the end of your <script> or in a standalone JS file included after the HTML.

// ---- Save to localStorage on change ----
function applyTheme(themeName) {
  if (!themes[themeName]) return;
  localStorage.setItem('selectedTheme', themeName); // Save
  const theme = themes[themeName];

  // Apply background gradient
  document.body.style.background = theme.bgGradient;
  document.body.style.color = theme.textColor;
  document.body.style.fontFamily = theme.fontFamily;

  // Update all cards and content areas
  const cards = document.querySelectorAll('.extension-card, .credit-card, .content');
  cards.forEach(card => {
    if (card.classList.contains('content')) {
      // Keep content area white for readability
      card.style.background = '#ffffff';
      card.style.color = '#333';
    } else {
      card.style.background = theme.cardBg;
      card.style.color = theme.cardText;
    }
  });

  // Update form elements for better contrast
  const formElements = document.querySelectorAll('.form-control, .form-select');
  formElements.forEach(element => {
    if (themeName === 'Dark blue' || themeName === 'Monument') {
      element.style.background = theme.cardBg;
      element.style.color = theme.cardText;
      element.style.borderColor = theme.textColor;
    } else {
      element.style.background = '#ffffff';
      element.style.color = '#333';
      element.style.borderColor = '#e9ecef';
    }
  });

  // Update color pickers to reflect current theme
  const bgColorPicker = document.getElementById('bg-color-picker');
  const textColorPicker = document.getElementById('text-color-picker');
  if (bgColorPicker) bgColorPicker.value = theme.bgGradient.includes('#') ? theme.bgGradient.match(/#[0-9A-Fa-f]{6}/)[0] : '#667eea';
  if (textColorPicker) textColorPicker.value = theme.textColor;
}

function customizeTab(choice) {
  const configs = {
    'google-search-calculator': { title: 'Calculator - Google Search', favicon: 'https://www.google.com/favicon.ico' },
    'google-classroom': { title: 'Google Classroom', favicon: 'https://ssl.gstatic.com/classroom/favicon.png' },
    'google-drive': { title: 'Google Drive', favicon: 'https://ssl.gstatic.com/docs/doclist/images/infinite_arrow_favicon_5.ico' },
    'google-docs': { title: 'Google Docs', favicon: 'https://ssl.gstatic.com/docs/doclist/images/mediatype/icon_1_document_x16.png' },
    'class-link': { title: 'Class Link', favicon: 'https://www.classlink.com/favicon.ico' },
    'schoology': { title: 'Schoology', favicon: 'https://www.schoology.com/favicon.ico' }
  };
  if (configs[choice]) {
    localStorage.setItem('tabDisguise', choice); // Save
    document.title = configs[choice].title;
    document.getElementById('favicon').href = configs[choice].favicon;
  }
}

function changeBackgroundColor(color) {
  localStorage.setItem('bgColor', color); // Save
  document.body.style.background = `linear-gradient(135deg, ${color} 0%, ${adjustBrightness(color, -20)} 100%)`;
}

function changeTextColor(color) {
  localStorage.setItem('textColor', color); // Save
  document.body.style.color = color;
  // Also update header text color for better visibility
  const headers = document.querySelectorAll('.header h1, .header p');
  headers.forEach(header => {
    header.style.color = color;
  });
}

function changeFont(font) {
  localStorage.setItem('fontFamily', font); // Save
  document.body.style.fontFamily = font;
}

// ---- Restore from localStorage on load ----
window.onload = () => {
  document.getElementById('content-area').innerHTML = contentData.extensions;

  // Restore theme
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme) {
    const themeSelect = document.getElementById('theme-select');
    if (themeSelect) themeSelect.value = savedTheme;
    applyTheme(savedTheme);
  }

  // Restore tab disguise
  const savedTab = localStorage.getItem('tabDisguise');
  if (savedTab) {
    const tabSelect = document.getElementById('customize-tab-select');
    if (tabSelect) tabSelect.value = savedTab;
    customizeTab(savedTab);
  }

  // Restore colors
  const savedBg = localStorage.getItem('bgColor');
  if (savedBg) {
    const bgColorPicker = document.getElementById('bg-color-picker');
    if (bgColorPicker) bgColorPicker.value = savedBg;
    changeBackgroundColor(savedBg);
  }
  const savedText = localStorage.getItem('textColor');
  if (savedText) {
    const textColorPicker = document.getElementById('text-color-picker');
    if (textColorPicker) textColorPicker.value = savedText;
    changeTextColor(savedText);
  }

  // Restore font
  const savedFont = localStorage.getItem('fontFamily');
  if (savedFont) {
    const fontSelect = document.getElementById('font-select');
    if (fontSelect) fontSelect.value = savedFont;
    changeFont(savedFont);
  }
};

// ---- Optional: Add a "Reset" button in your HTML ----
// <button class="btn btn-secondary" onclick="clearSettings()">Reset Customizations</button>
function clearSettings() {
  localStorage.clear();
  window.location.reload();
}

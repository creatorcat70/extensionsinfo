const tabContents = {
  // ... same as in your HTML, not shown for brevity ...
};

function setBodyStyles({ bg, color, font }) {
  document.body.style.background = bg;
  document.body.style.color = color;
  document.body.style.fontFamily = font;
  document.querySelectorAll('.header h1, .header p, .header .byline').forEach(header => {
    header.style.color = color;
  });
}

function applyTheme(themeName, persist = true) {
  if (!themeName || themeName === "Default") {
    setBodyStyles({
      bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#333",
      font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif"
    });
    if (persist) localStorage.setItem('theme', 'Default');
    return;
  }
  const themes = {
    "Navy": { bg: "linear-gradient(135deg, #001f3f 0%, #003366 100%)", color: "#fff", font: "Arial, sans-serif" },
    "Wave": { bg: "linear-gradient(135deg, #89CFF0 0%, #4682B4 100%)", color: "#001F3F", font: "'Courier New', monospace" },
    "Dark blue": { bg: "linear-gradient(135deg, #0B3D91 0%, #1E3A8A 100%)", color: "#E6E6FA", font: "'Times New Roman', serif" },
    "Monument": { bg: "linear-gradient(135deg, #565051 0%, #2d2a2e 100%)", color: "#F5F5F5", font: "'Lucida Console', monospace" },
    "Magma": { bg: "linear-gradient(135deg, #FF4500 0%, #DC143C 100%)", color: "#fff", font: "'Comic Sans MS', cursive" }
  };
  const t = themes[themeName] || themes.Default;
  setBodyStyles(t);
  if (persist) localStorage.setItem('theme', themeName);
}

function changeBackgroundColor(color) {
  localStorage.setItem('bgColor', color);
  document.body.style.background = `linear-gradient(135deg, ${color} 0%, #764ba2 100%)`;
  adjustTextColorForBackground(color);
}

function adjustTextColorForBackground(hexColor) {
  hexColor = hexColor.replace('#', '');
  let r = parseInt(hexColor.substring(0,2),16);
  let g = parseInt(hexColor.substring(2,4),16);
  let b = parseInt(hexColor.substring(4,6),16);
  let luminance = 0.299*r + 0.587*g + 0.114*b;
  let textColor = (luminance > 186) ? "#222" : "#fff";
  document.body.style.color = textColor;
  document.querySelectorAll('.header h1, .header p, .header .byline').forEach(header => {
    header.style.color = textColor;
  });
  localStorage.setItem('textColor', textColor);
  let textColorPicker = document.getElementById('text-color-picker');
  if (textColorPicker) textColorPicker.value = rgbToHex(textColor);
}

function rgbToHex(rgb) {
  if (rgb[0]==="#") return rgb;
  rgb = rgb.replace(/[^\d,]/g, '').split(',');
  return "#" + rgb.map(x => {
    x = parseInt(x).toString(16);
    return (x.length==1 ? "0"+x : x);
  }).join('');
}

function changeTextColor(color) {
  localStorage.setItem('textColor', color);
  document.body.style.color = color;
  document.querySelectorAll('.header h1, .header p, .header .byline').forEach(header => { header.style.color = color; });
}

function restoreCustomizations() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    let themeSelect = document.getElementById('theme-select');
    if (themeSelect) themeSelect.value = savedTheme;
    applyTheme(savedTheme, false);
  }
  const savedBg = localStorage.getItem('bgColor');
  const bgColorPicker = document.getElementById('bg-color-picker');
  if (savedBg && bgColorPicker) {
    bgColorPicker.value = savedBg;
    changeBackgroundColor(savedBg);
  }
  const savedText = localStorage.getItem('textColor');
  const textColorPicker = document.getElementById('text-color-picker');
  if (savedText && textColorPicker) {
    textColorPicker.value = savedText;
    changeTextColor(savedText);
  }
  const savedFont = localStorage.getItem('fontFamily');
  const fontSelect = document.getElementById('font-select');
  if (savedFont && fontSelect) {
    fontSelect.value = savedFont;
    changeFont(savedFont);
  }
  const savedTab = localStorage.getItem('tabDisguise');
  const tabSelect = document.getElementById('customize-tab-select');
  if (savedTab && tabSelect) {
    tabSelect.value = savedTab;
    customizeTab(savedTab);
  }
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
    localStorage.setItem('tabDisguise', choice);
    document.title = configs[choice].title;
    document.getElementById('favicon').href = configs[choice].favicon;
  }
}

function changeFont(font) {
  localStorage.setItem('fontFamily', font);
  document.body.style.fontFamily = font;
}

function clearSettings() {
  localStorage.clear();
  window.location.reload();
}

function openProxyUrl(url) {
  if (!url) { alert("Please enter a valid URL."); return; }
  const win = window.open();
  const iframe = win.document.createElement('iframe');
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.src = url;
  win.document.body.style.margin = "0";
  win.document.body.style.height = "100vh";
  win.document.body.appendChild(iframe);
}

function openSelectedProxy() {
  const select = document.getElementById('proxy-select');
  const choice = select.value;
  if (!choice) { alert('Please select a proxy first.'); return; }
  const proxyUrls = {
    'interstellar': "https://quick-geometric-lessons.knr.cl",
    'vplaza': ["https://leave.reconectar.cl", "https://return.reconectar.cl"],
    'bolt': "https://zscaler.casarosalba.com/",
    'doge': [
      "https://ryan-chen-has-over-15-different-girlfriends.knr.cl/",
      "https://ryanchenistotallynotgaytrust.awhdaddyawh.knr.cl/",
      "https://ryan-chen-is-very-sigmafrfr.daddyawhawh.notsoskibidi.knr.cl/"
    ],
    'evadion': [
      "https://evadion.on-to.space/",
      "https://evadion.pages.dev/",
      "https://evadion.github.io/",
      "https://evadion.netlify.app/",
      "https://evadion.org/"
    ],
    'terbium': [
      "https://algebramasters.online/",
      "https://chempioneers.online/"
    ],
    'tide': [
      "https://tide-tau.vercel.app/",
      "https://tidev2.netlify.app/",
      "https://xxmizzeryxx.github.io/Tide/",
      "https://tide-git-main-xxmizzeryxxs-projects.vercel.app/",
      "https://tide-xxmizzeryxxs-projects.vercel.app/",
      "https://tide-psi.vercel.app/",
      "https://tide-mizzerys-projects.vercel.app/",
      "https://tide-xxmizzeryxx.wasmer.app/"
    ],
    'acorn': [
      "https://the-acornz.github.io/",
      "https://acornz.on-to.space/"
    ]
  };
  let url = proxyUrls[choice];
  if (Array.isArray(url)) url = url[Math.floor(Math.random() * url.length)];
  openProxyUrl(url);
}

function launchCustomUrl() {
  const input = document.getElementById('custom-proxy-url');
  let url = input.value.trim();
  if (!url) { alert('Please enter a URL first.'); return; }
  if (!/^https?:\/\//i.test(url)) url = 'http://' + url;
  openProxyUrl(url);
}

function showSecurlyExploitPage() {
  document.title = "Securly IndexedDB Exploit";
  document.getElementById('content-area').innerHTML = `
    <div class="blank-exploit-page">
      <h2>Securly IndexedDB Force Stop Exploit</h2>
      <div class="subtitle">TO DO THIS YOU NEED:</div>
      <ul>
        <li>Access to <code>chrome://indexeddb-internals</code></li>
        <li>A blocking extension that uses IndexedDB <b>(e.g. Securly)</b></li>
      </ul>
      <ol>
        <li>Go to <code>chrome://indexeddb-internals</code></li>
        <li>Scroll down till you see <code>chrome-extension://(securly extension id)</code></li>
      </ol>
      <div style="margin-bottom:8px;">
        <b>Typically:</b>
        <code>joflmkccibkooplaeoinecjbmdebglab</code> or 
        <code>iheobagjkfklnlikgihanlhcddjoihkg</code>
        <br>
        Also <code>ckecmkbnoanpgplccmnoikfmpcdladkc</code>
      </div>
      <ol start="3">
        <li>Click <b>force stop</b></li>
        <li>And boom, no more blocked websites</li>
      </ol>
      <div style="margin-bottom:8px;">
        <i>Securly sometimes does kick back in (although it takes awhile) but all you have to do is force stop it again</i>
      </div>
      <div style="margin-top:18px;">
        <span class="subtitle">EXTENSIONS CURRENTLY WORKING:</span><br>
        Securly <span class="badgex">works</span>
      </div>
      <div style="margin-top:10px;">
        <span class="subtitle">EXTENSIONS NOT WORKING:</span><br>
        GoGuardian, Lightspeed, Linewize, Blocksi, Iboss <span style="color:#c53030;">(not working)</span>
      </div>
    </div>
  `;
}

function setupExploitImageClicks() {
  const img1 = document.getElementById('securly-exploit-img');
  if (img1) {
    img1.addEventListener('click', showSecurlyExploitPage);
    img1.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') showSecurlyExploitPage();
    });
  }
  const img5 = document.getElementById('lightspeed-exploit-img');
  if (img5) {
    img5.addEventListener('click', function() {
      window.open('https://blobby-boi.github.io/LightSPED-Killer-Agent/', '_blank');
    });
    img5.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ')
        window.open('https://blobby-boi.github.io/LightSPED-Killer-Agent/', '_blank');
    });
  }
}

function switchTab(tabName, element) {
  document.querySelectorAll('.nav-tab').forEach(tab => tab.classList.remove('active'));
  if (element) element.classList.add('active');
  const contentArea = document.getElementById('content-area');
  if (tabContents[tabName]) {
    contentArea.innerHTML = tabContents[tabName];
    document.title = "Extension Info";
    if (tabName === 'exploits') setTimeout(setupExploitImageClicks, 0);
    if (tabName === 'customize') setTimeout(restoreCustomizations, 0);
  }
}

window.onload = () => {
  document.getElementById('content-area').innerHTML = tabContents.extensions;
  document.getElementById('tab-extensions').onclick = function() { switchTab('extensions', this); };
  document.getElementById('tab-customize').onclick = function() { switchTab('customize', this); };
  document.getElementById('tab-proxy').onclick = function() { switchTab('proxy', this); };
  document.getElementById('tab-exploits').onclick = function() { switchTab('exploits', this); };
  document.getElementById('tab-credits').onclick = function() { switchTab('credits', this); };
  restoreCustomizations();
};

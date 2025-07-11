// -------- Tab Contents --------
const tabContents = {
  extensions: `<h2>Extension Monitor</h2>
    <p class="mb-20">Information about extensions running on your device and tools to manage them.</p>
    <h3>Monitoring Extensions</h3>
    <div class="extension-grid">
      <div class="extension-card">
        <div class="extension-header">
          <img src="https://lh3.googleusercontent.com/OqjMJCR1HdLJzFst866W8Fn4F96l8E6z8RoGkdPkj5wOKLQKL7U8Fda4aeQxLjIRjWXMW2hNOQ=s640-w640-h400" alt="Gopher Buddy" class="extension-icon">
          <div>
            <div class="extension-title">Gopher Buddy</div>
            <span class="status-badge status-danger">Monitoring</span>
          </div>
        </div>
        <div class="extension-description">
          ID: <code>ipfchkohmimofadciefnbbdagkmgbipa</code><br>
          Captures IP addresses and monitors session duration. Forces ChromeOS updates.
        </div>
      </div>
      <div class="extension-card">
        <div class="extension-header">
          <img src="https://lh3.googleusercontent.com/PwQcarJTznbbXQyGjcOTLtAPKKGSiksluEjl-dJSJAEXlXqEJ15ogRNbBaMDCf01BDnFALLLgl5TcpQh1l_4skxL=s275-w275-h175" alt="Learnplatform" class="extension-icon">
          <div>
            <div class="extension-title">Learnplatform For Students</div>
            <span class="status-badge status-danger">Tracking</span>
          </div>
        </div>
        <div class="extension-description">
          ID: <code>ncbofnhmmfffmcdmbjfaigepkgmjnlne</code><br>
          Logs browsing history and tracks website visit frequency.
        </div>
      </div>
    </div>
    <h3 class="mt-20">Management Tools</h3>
    <div class="extension-grid">
      <div class="extension-card">
        <div class="extension-header">
          <img src="https://chrose.netlify.app/detail/exthang3r/assets/icon.png" alt="Exthang3r" class="extension-icon">
          <div>
            <div class="extension-title">Exthang3r</div>
            <span class="status-badge status-success">Available</span>
          </div>
        </div>
        <div class="extension-description">
          Creates multiple iframes to freeze monitoring extensions.<br>
          <a href="https://html.cafe/x5f8ca0af" target="_blank" class="btn btn-primary" style="margin-top: 10px; padding: 8px 16px; font-size: 12px;">Open Tool</a>
        </div>
      </div>
      <div class="extension-card">
        <div class="extension-header">
          <img src="https://docs.titaniumnetwork.org/img/rigtools1.png" alt="Rigtools" class="extension-icon">
          <div>
            <div class="extension-title">Rigtools</div>
            <span class="status-badge status-warning">Patched 129+</span>
          </div>
        </div>
        <div class="extension-description">
          Uses devtools:// to disable selected extensions.<br>
          <a href="https://docs.titaniumnetwork.org/kajigs/rigtools/" target="_blank" class="btn btn-secondary" style="margin-top: 10px; padding: 8px 16px; font-size: 12px;">Learn More</a>
        </div>
      </div>
    </div>`,
  customize: `<h2>Customize Experience</h2>
    <p class="mb-20">Personalize your page appearance and tab disguises.</p>
    <div class="form-group">
      <label class="form-label">Quick Themes</label>
      <select class="form-select" id="theme-select" onchange="applyTheme(this.value)">
        <option value="Default">Default</option>
        <option value="Navy">Navy</option>
        <option value="Wave">Wave</option>
        <option value="Dark blue">Dark Blue</option>
        <option value="Monument">Monument</option>
        <option value="Magma">Magma</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">Tab Disguise</label>
      <select class="form-select" id="customize-tab-select" onchange="customizeTab(this.value)">
        <option value="">Choose disguise</option>
        <option value="google-search-calculator">Calculator (Google Search)</option>
        <option value="google-classroom">Google Classroom</option>
        <option value="google-drive">Google Drive</option>
        <option value="google-docs">Google Docs</option>
        <option value="class-link">Class Link</option>
        <option value="schoology">Schoology</option>
      </select>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
      <div class="form-group">
        <label class="form-label">Background Color</label>
        <input type="color" class="form-control" id="bg-color-picker" value="#667eea" onchange="changeBackgroundColor(this.value)">
      </div>
      <div class="form-group">
        <label class="form-label">Text Color</label>
        <input type="color" class="form-control" id="text-color-picker" value="#333333" onchange="changeTextColor(this.value)">
      </div>
    </div>
    <div class="form-group">
      <label class="form-label">Font Family</label>
      <select class="form-select" id="font-select" onchange="changeFont(this.value)">
        <option value="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">System Default</option>
        <option value="Arial, sans-serif">Arial</option>
        <option value="'Courier New', monospace">Courier New</option>
        <option value="'Times New Roman', serif">Times New Roman</option>
        <option value="'Comic Sans MS', cursive">Comic Sans MS</option>
        <option value="'Lucida Console', monospace">Lucida Console</option>
      </select>
    </div>
    <button class="btn btn-secondary" onclick="clearSettings()">Reset Customizations</button>`,
  proxy: `<h2>Proxy Tools</h2>
    <p class="mb-20">Access proxy services and launch custom URLs safely.</p>
    <div class="form-group">
      <label class="form-label">Custom URL Launcher</label>
      <div class="proxy-row">
        <div class="form-group">
          <input type="text" class="form-control" id="custom-proxy-url" placeholder="Enter URL here">
        </div>
        <button class="btn btn-primary" onclick="launchCustomUrl()">Launch</button>
      </div>
      <p style="margin-top: 8px; color:#667eea; font-size:0.98rem;">Note: Many websites cannot be embedded due to browser and security restrictions. If the site opens blank, try the direct link instead.</p>
    </div>
    <div class="form-group">
      <label class="form-label">Select Proxy Service</label>
      <select class="form-select" id="proxy-select">
        <option value="">Choose proxy service</option>
        <option value="interstellar">Interstellar</option>
        <option value="vplaza">Vplaza</option>
        <option value="bolt">Bolt</option>
        <option value="doge">Doge</option>
        <option value="evadion">Evadion</option>
        <option value="terbium">Terbium</option>
        <option value="tide">Tide</option>
        <option value="acorn">Acorn</option>
      </select>
      <p> The passwords for Acorn, Tide, and Evadion are in their discord server. (On the credits page) </p>
    </div>
    <button class="btn btn-primary" onclick="openSelectedProxy()" style="width: 100%;">Open Selected Proxy</button>`,
  exploits: `<h1 style="text-align:center;margin-top:0;">Exploits for modern blockers</h1>
    <div class="exploit-logos-row">
      <img class="exploit-logo-img" id="securly-exploit-img" src="https://pbs.twimg.com/profile_images/1282532266535612416/ctwlOq45_400x400.png" alt="Securly" tabindex="0">
      <img class="exploit-logo-img" src="https://pbs.twimg.com/profile_images/1825612745296723968/y8IIQwO0_400x400.png" alt="GoGuardian">
      <img class="exploit-logo-img" src="https://media.licdn.com/dms/image/v2/C4D0BAQFax2qhFBl5Gw/company-logo_200_200/company-logo_200_200/0/1674567535151/blocksi_logo?e=2147483647&v=beta&t=vaEwFRCnAg9kL8gZsVFZF4cucE4mYb6sYrPHKeW1Rc8" alt="Blocksi">
      <img class="exploit-logo-img" src="https://www.iboss.com/storage/2022/09/500x144-logo-black@2x.png" alt="iBoss">
      <img class="exploit-logo-img" id="lightspeed-exploit-img" src="https://yt3.googleusercontent.com/f0c-GVnSn5iPqQFx8wyloq0kKv-yQISjkcWhD3ZVjeIxm5P1Xyod7zjtRAoQ7ib2yEIVzdgAbQ=s900-c-k-c0x00ffffff-no-rj" alt="Lightspeed" tabindex="0">
      <img class="exploit-logo-img" src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/f23cec1c-1e86-4dc3-9e77-ce04c063ef21.jpeg" alt="Cisco Umbrella">
      <img class="exploit-logo-img" src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_373119eef0e7e070946a2605069e12a7/webtitan-web-filter.png" alt="WebTitan">
      <img class="exploit-logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgnKe55CehjQp3lqViwR5yihXr1RbAYp36sw&s" alt="Fortinet/FortiGuard">
      <img class="exploit-logo-img" src="https://www.rhinonetworks.com/sites/default/files/2023-01/maxresdefault.jpeg" alt="Rhino Networks">
      <img class="exploit-logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7f8B0lDvS2BiqOk1_MAqWHdczyDSuiXDY6Q&s" alt="NetRef">
      <img class="exploit-logo-img" src="https://yt3.googleusercontent.com/0Es37cJKe44WHPgdoZ2_A4gEXswmtFwVdiHdAgm2HMjlojhCBvYhXYyjSDxzaeLUP0RjOhBMMw=s900-c-k-c0x00ffffff-no-rj" alt="ContentKeeper">
      <img class="exploit-logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkypvMKjSs_jGUWRTzW2kFHCZa1HlX6TK2Yg&s" alt="Linewize">
    </div>
    <a class="extprint3r-section" href="https://extprint3r.github.io" target="_blank" rel="noopener">
      <img class="extprint3r-img" src="https://avatars.githubusercontent.com/u/131911782?v=4" alt="ExtPrint3r Logo">
      <div class="extprint3r-content">
        <div class="extprint3r-title-row">
          <div class="extprint3r-title">ExtPrint3r</div>
          <span class="status-badge status-success">Available</span>
        </div>
        <div class="extprint3r-desc">The successor to ExtHang3r that prints iframes to freeze extensions</div>
      </div>
    </a>
    <div style="text-align:center;margin-top:32px;">
      <p style="font-size:1.1rem;max-width:600px;margin: 0 auto;">
        Click a blocker image above to learn more about possible exploits and bypasses for that platform (coming soon).
      </p>
    </div>`,
  credits: `<h2>Credits</h2>
    <p class="mb-20">Thanks to the contributors who made this project possible.</p>
    <div class="credits-grid">
      <div class="credit-card">
        <img src="https://i.pinimg.com/736x/d8/a9/f3/d8a9f34eed4cbfbf19261395d4166004.jpg" alt="Sydney" class="credit-avatar">
        <div class="credit-info">
          <h3>
            @thefakesydney
            <a href="https://github.com/creatorcat70" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png" alt="GitHub" class="github-logo">
            </a>
          </h3>
          <p>Created this website for fun and learning. Not widely known in the proxy community but passionate about web development.</p>
        </div>
      </div>
      <div class="credit-card">
        <img src="https://cdn.discordapp.com/avatars/919048341197819906/7420b4c183a39b1168795f33ad609af3?size=1024" alt="bebbybonkers" class="credit-avatar">
        <div class="credit-info">
          <h3>
            @bebbybonkers
            <a href="https://github.com/bebbybonkers" target="_blank" rel="noopener noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/250px-GitHub_Invertocat_Logo.svg.png" alt="GitHub" class="github-logo">
            </a>
          </h3>
          <p>Just existed. lol</p>
        </div>
      </div>
      <div class="credit-card">
        <img src="https://play-lh.googleusercontent.com/lmG9HlI0awHie0cyBieWXeNjpyXvHPwDBb8MNOVIyp0P8VEh95AiBHtUZSDVR3HLe3A=w600-h300-pc0xffffff-pd" alt="AI Assistant" class="credit-avatar">
        <div class="credit-info">
          <h3>AI Assistant</h3>
          <p>Provided development assistance and guidance for HTML, CSS, and JavaScript implementation.</p>
        </div>
      </div>
    </div>
    <hr class="credits-divider">
    <h2 style="margin-bottom:18px;">Partners</h2>
    <div class="credits-grid">
      <a href="https://dsc.gg/linewize" target="_blank" style="text-decoration:none;">
        <div class="credit-card" style="cursor:pointer;">
          <img src="https://cdn.discordapp.com/avatars/1211851118561329172/0ec92421b3193377a717691869e31bc2?size=1024" alt="Evadion/Elusion" class="credit-avatar">
          <div class="credit-info">
            <h3>Evadion/Elusion</h3>
            <p> Developers of the Evadion, Acorn, and Tide proxies. </p>
          </div>
        </div>
      </a>
      <a href="https://discord.gg/NwSjTp3DNF" target="_blank" style="text-decoration:none;">
        <div class="credit-card" style="cursor:pointer;">
          <img src="https://cdn.discordapp.com/avatars/1312086316439306280/bc16714687e41e09f3112a43bda8ef87?size=1024" alt="Unblockee" class="credit-avatar">
          <div class="credit-info">
            <h3>Unblockee</h3>
            <p> makers of a html file that you are able to play games on. Cool. </p>
          </div>
        </div>
      </a>
    </div>`
};

// --- Theme & Customization ---
function setContrastTextOnCards(textColor) {
  document.querySelectorAll('.content, .extension-card, .credit-card, .blank-exploit-page').forEach(card => {
    const bg = window.getComputedStyle(card).backgroundColor;
    if (
      bg === "rgb(255, 255, 255)" ||
      bg === "rgba(255, 255, 255, 1)" ||
      bg === "#fff" ||
      bg === "#ffffff" ||
      bg === "rgb(248, 249, 250)"
    ) {
      card.style.color = "#222";
    } else {
      card.style.color = textColor;
    }
  });
}

function setBodyStyles({ bg, color, font }) {
  document.body.style.background = bg;
  document.body.style.color = color;
  document.body.style.fontFamily = font;
  document.querySelectorAll('.header h1, .header p, .header .byline').forEach(header => {
    header.style.color = color;
  });
  setContrastTextOnCards(color);
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
  setContrastTextOnCards(textColor);
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
  setContrastTextOnCards(color);
}

function changeFont(font) {
  localStorage.setItem('fontFamily', font);
  document.body.style.fontFamily = font;
}

function clearSettings() {
  localStorage.clear();
  window.location.reload();
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

// --- Proxy and Custom Launcher, with Iframe Blanker ---
function openProxyUrl(url) {
  if (!url) { alert("Please enter a valid URL."); return; }
  // "Cloaked" about:blank with Google search disguise and iframe
  const win = window.open('about:blank', '_blank');
  if (win) {
    win.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Cloaked Proxy</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            html, body { height:100%; margin:0; padding:0; background: #fff; overflow:hidden; }
            iframe { width:100vw; height:100vh; border:none; display:block; }
            ::-webkit-scrollbar { width: 0 !important }
          </style>
          <script>
            document.addEventListener('DOMContentLoaded', function() {
              document.title = 'Calculator - Google Search';
              var link = document.createElement('link');
              link.rel = 'icon';
              link.href = 'https://www.google.com/favicon.ico';
              document.head.appendChild(link);
            });
          </script>
        </head>
        <body>
          <iframe src="${url.replace(/"/g, '&quot;')}" allowfullscreen sandbox="allow-scripts allow-forms allow-same-origin allow-popups"></iframe>
        </body>
      </html>
    `);
    win.document.close();
  }
}

function openSelectedProxy() {
  const select = document.getElementById('proxy-select');
  const choice = select.value;
  if (!choice) { alert('Please select a proxy first.'); return; }
  const proxyUrls = {
    'interstellar': [
      "https://quick-geometric-lessons.knr.cl"
    ],
    'vplaza': [
      "https://leave.reconectar.cl", "https://return.reconectar.cl"
    ],
    'bolt': [
      "https://zscaler.casarosalba.com/"
    ],
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

// --- Exploit Pages and Tab Switch ---
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

const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;
const UPLOAD_DIR = path.join(__dirname, 'uploads');

if (!fs.existsSync(UPLOAD_DIR)) {
  fs.mkdirSync(UPLOAD_DIR);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => cb(null, file.originalname)
});
const upload = multer({ storage });

app.use(express.json());

// API: List files
app.get('/api/files', (req, res) => {
  fs.readdir(UPLOAD_DIR, (err, files) => {
    if (err) return res.status(500).json({ error: 'Failed to read directory' });

    let totalSizeBytes = 0;
    const fileList = files.map(file => {
      const filePath = path.join(UPLOAD_DIR, file);
      const stats = fs.statSync(filePath);
      totalSizeBytes += stats.size;

      const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
      const displaySize = stats.size >= 1024 * 1024 ? `${sizeMB} MB` : `${(stats.size / 1024).toFixed(1)} KB`;

      return {
        name: file,
        size: displaySize,
        date: stats.mtime.toISOString().split('T')[0]
      };
    });

    const totalUsedMB = (totalSizeBytes / (1024 * 1024)).toFixed(2);
    res.json({ files: fileList, totalUsedMB });
  });
});

// API: Upload
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) return res.status(400).send('No file uploaded.');
  res.json({ message: 'File uploaded successfully' });
});

// API: Download
app.get('/download/:filename', (req, res) => {
  const filePath = path.join(UPLOAD_DIR, req.params.filename);
  res.download(filePath);
});

// API: Delete
app.delete('/api/files/:filename', (req, res) => {
  const filePath = path.join(UPLOAD_DIR, req.params.filename);
  fs.unlink(filePath, (err) => {
    if (err) return res.status(500).json({ error: 'Failed to delete file' });
    res.json({ message: 'File deleted' });
  });
});

// Serve UI
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>pCloud - Secure Cloud Storage</title>
  <style>
    :root {
      --primary: #1890ff;
      --primary-hover: #40a9ff;
      --bg-main: #f4f7fc;
      --sidebar-bg: #111c24;
      --sidebar-hover: #1e2d3b;
      --text-main: #2c3e50;
      --text-muted: #8c9ba5;
      --card-bg: #ffffff;
      --border-color: #e2e8f0;
      --danger: #ff4d4f;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
    body { display: flex; height: 100vh; background-color: var(--bg-main); color: var(--text-main); overflow: hidden; }
    .sidebar { width: 260px; background-color: var(--sidebar-bg); color: #fff; display: flex; flex-direction: column; justify-content: space-between; padding: 24px 16px; flex-shrink: 0; }
    .brand { display: flex; align-items: center; gap: 12px; font-size: 20px; font-weight: 700; margin-bottom: 32px; padding-left: 8px; }
    .brand-icon { width: 32px; height: 32px; background-color: var(--primary); border-radius: 8px; display: flex; align-items: center; justify-content: center; }
    .nav-menu { list-style: none; display: flex; flex-direction: column; gap: 4px; }
    .nav-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 8px; color: var(--text-muted); cursor: pointer; font-size: 14px; }
    .nav-item:hover, .nav-item.active { background-color: var(--sidebar-hover); color: #fff; }
    .nav-item.active { border-left: 4px solid var(--primary); }
    .storage-card { background: rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 16px; border: 1px solid rgba(255, 255, 255, 0.1); }
    .storage-title { font-size: 12px; color: var(--text-muted); margin-bottom: 8px; }
    .storage-bar-bg { width: 100%; height: 6px; background: rgba(255, 255, 255, 0.1); border-radius: 3px; overflow: hidden; margin-bottom: 8px; }
    .storage-bar-fill { height: 100%; width: 0%; background-color: var(--primary); border-radius: 3px; transition: width 0.4s ease; }
    .storage-text { font-size: 13px; color: #fff; font-weight: 600; }
    .main-content { flex: 1; display: flex; flex-direction: column; overflow: hidden; }
    .header { height: 70px; background: #fff; border-bottom: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; padding: 0 32px; }
    .search-box { width: 360px; position: relative; }
    .search-input { width: 100%; padding: 10px 16px 10px 40px; border-radius: 20px; border: 1px solid var(--border-color); background-color: #f8fafc; outline: none; }
    .search-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--text-muted); }
    .header-actions { display: flex; align-items: center; gap: 16px; }
    .btn-upload { background-color: var(--primary); color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 8px; }
    .user-profile { width: 36px; height: 36px; border-radius: 50%; background: #e2e8f0; display: flex; align-items: center; justify-content: center; font-weight: bold; }
    .content { padding: 32px; overflow-y: auto; flex: 1; }
    .section-title { font-size: 20px; font-weight: 700; margin-bottom: 20px; }
    .drop-zone { border: 2px dashed var(--primary); border-radius: 12px; padding: 24px; text-align: center; background: #f0f7ff; color: var(--primary); margin-bottom: 24px; cursor: pointer; }
    .file-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; }
    .file-card { background-color: var(--card-bg); border-radius: 12px; padding: 16px; border: 1px solid var(--border-color); display: flex; flex-direction: column; align-items: center; }
    .file-icon { font-size: 42px; margin-bottom: 12px; }
    .file-name { font-size: 14px; font-weight: 600; width: 100%; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 4px; }
    .file-meta { font-size: 12px; color: var(--text-muted); margin-bottom: 12px; }
    .file-actions { display: flex; gap: 8px; width: 100%; }
    .btn-action { flex: 1; padding: 6px 0; border: 1px solid var(--border-color); background: #fff; border-radius: 6px; font-size: 12px; cursor: pointer; text-decoration: none; text-align: center; color: var(--text-main); }
    .btn-action.delete { color: var(--danger); border-color: #ffa39e; }
    .empty-state { text-align: center; padding: 60px 0; color: var(--text-muted); grid-column: 1 / -1; }
  </style>
</head>
<body>
  <div class="sidebar">
    <div>
      <div class="brand"><div class="brand-icon">☁️</div><span>pCloud</span></div>
      <ul class="nav-menu">
        <li class="nav-item active">📁 My Drive</li>
        <li class="nav-item">⭐ Favorites</li>
        <li class="nav-item">👥 Shared</li>
        <li class="nav-item">🕒 Recent Files</li>
        <li class="nav-item">🗑️ Trash</li>
      </ul>
    </div>
    <div class="storage-card">
      <div class="storage-title">Storage Space</div>
      <div class="storage-bar-bg"><div class="storage-bar-fill" id="storageFill"></div></div>
      <div class="storage-text" id="storageText">0 MB / 10 GB</div>
    </div>
  </div>

  <div class="main-content">
    <div class="header">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input type="text" class="search-input" id="searchInput" placeholder="Search files and folders..." oninput="filterFiles()">
      </div>
      <div class="header-actions">
        <label class="btn-upload">
          <span>⬆️ Upload File</span>
          <input type="file" id="fileInput" hidden onchange="uploadFile()">
        </label>
        <div class="user-profile">U</div>
      </div>
    </div>

    <div class="content">
      <div class="drop-zone" id="dropZone" onclick="document.getElementById('fileInput').click()">
        📁 Drag & Drop files here or click to browse
      </div>
      <h2 class="section-title">All Files</h2>
      <div class="file-grid" id="fileGrid"><div class="empty-state">Loading storage files...</div></div>
    </div>
  </div>

  <script>
    const SERVER_URL = '';
    let localFiles = [];

    async function loadFiles() {
      try {
        const response = await fetch('/api/files');
        const data = await response.json();
        localFiles = data.files || [];
        updateStorageMeter(parseFloat(data.totalUsedMB || 0));
        renderFiles(localFiles);
      } catch (error) {
        document.getElementById('fileGrid').innerHTML = '<div class="empty-state" style="color: var(--danger);">Unable to connect to server.</div>';
      }
    }

    function renderFiles(files) {
      const grid = document.getElementById('fileGrid');
      grid.innerHTML = '';
      if (files.length === 0) {
        grid.innerHTML = '<div class="empty-state">No files uploaded yet. Drag or select a file to get started.</div>';
        return;
      }
      files.forEach(file => {
        const card = document.createElement('div');
        card.className = 'file-card';
        card.innerHTML = \`
          <div class="file-icon">\${getFileIcon(file.name)}</div>
          <div class="file-name" title="\${file.name}">\${file.name}</div>
          <div class="file-meta">\${file.size} • \${file.date}</div>
          <div class="file-actions">
            <a href="/download/\${encodeURIComponent(file.name)}" download class="btn-action">Download</a>
            <button onclick="deleteFile('\${file.name}')" class="btn-action delete">Delete</button>
          </div>
        \`;
        grid.appendChild(card);
      });
    }

    function updateStorageMeter(usedMB) {
      const totalGB = 10;
      const percent = Math.min(((usedMB / (totalGB * 1024)) * 100), 100).toFixed(1);
      document.getElementById('storageFill').style.width = \`\${percent}%\`;
      document.getElementById('storageText').innerText = \`\${usedMB} MB / \${totalGB} GB\`;
    }

    async function uploadFile(fileObj = null) {
      const input = document.getElementById('fileInput');
      const file = fileObj || input.files[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('file', file);

      try {
        const res = await fetch('/api/upload', { method: 'POST', body: formData });
        if (res.ok) { input.value = ''; loadFiles(); } else { alert('Upload failed.'); }
      } catch (err) { alert('Upload request failed.'); }
    }

    async function deleteFile(filename) {
      if (!confirm(\`Delete "\${filename}"?\`)) return;
      try {
        const res = await fetch(\`/api/files/\${encodeURIComponent(filename)}\`, { method: 'DELETE' });
        if (res.ok) loadFiles(); else alert('Delete failed.');
      } catch (err) { alert('Delete failed.'); }
    }

    function filterFiles() {
      const query = document.getElementById('searchInput').value.toLowerCase();
      renderFiles(localFiles.filter(f => f.name.toLowerCase().includes(query)));
    }

    function getFileIcon(filename) {
      const ext = filename.split('.').pop().toLowerCase();
      if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp'].includes(ext)) return '🖼️';
      if (['mp4', 'mkv', 'mov', 'avi'].includes(ext)) return '🎥';
      if (['mp3', 'wav', 'flac'].includes(ext)) return '🎵';
      if (['pdf'].includes(ext)) return '📕';
      if (['zip', 'rar', '7z', 'tar', 'gz'].includes(ext)) return '📦';
      if (['txt', 'md', 'doc', 'docx'].includes(ext)) return '📝';
      return '📄';
    }

    const dropZone = document.getElementById('dropZone');
    ['dragenter', 'dragover'].forEach(e => dropZone.addEventListener(e, (ev) => { ev.preventDefault(); dropZone.style.background = '#d0e4ff'; }));
    ['dragleave', 'drop'].forEach(e => dropZone.addEventListener(e, (ev) => { ev.preventDefault(); dropZone.style.background = '#f0f7ff'; }));
    dropZone.addEventListener('drop', (e) => {
      if (e.dataTransfer.files.length > 0) uploadFile(e.dataTransfer.files[0]);
    });

    loadFiles();
  </script>
</body>
</html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

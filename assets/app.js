

const SIDEBAR_MENU_DATA = [
  {
    groupTitle: "Informasi Umum",
    menus: [
      { label: "Home", icon: "ph ph-house", path: "index.html" },
      { label: "Panduan", icon: "ph ph-book-open", path: "panduan.html" }
    ]
  },
  {
    groupTitle: "Menu Akademik",
    menus: [
      { label: "Registrasi Matakuliah", icon: "ph ph-clipboard-text", path: "krs.html" },
      { label: "Jadwal Kuliah", icon: "ph ph-calendar-dots", path: "jadwal-absen.html" },
      { label: "Hasil Studi", icon: "ph ph-graduation-cap", path: "khs.html" },
      { label: "Transkrip Nilai", icon: "ph ph-file-text", path: "transkrip.html" }
    ]
  },
  {
    groupTitle: "Pengaturan Akun",
    menus: [
      { label: "Data Pribadi", icon: "ph ph-user", path: "profil.html" },
      { label: "Ganti Password", icon: "ph ph-key", path: "ganti-password.html" }
    ]
  }
];

function toggleSidebar(forceClose) {
  const sidebar = document.getElementById('sidebar-app');
  const overlay = document.getElementById('sidebar-overlay');
  if (!sidebar) return;
  const willOpen = forceClose === true ? false : !sidebar.classList.contains('open');
  sidebar.classList.toggle('open', willOpen);
  if (overlay) overlay.classList.toggle('show', willOpen);
}

function renderReusableSidebar() {
  const sidebarContainer = document.getElementById('sidebar-app');
  if (!sidebarContainer) return;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  let sidebarHTML = `
    <div class="sidebar-header">
      <img src="img/logo_1.png" alt="PortalKU" class="sidebar-logo-img">
    </div>
    <nav class="sidebar-menu">
  `;

  SIDEBAR_MENU_DATA.forEach(group => {
    sidebarHTML += `
      <div class="menu-group">
        <p class="menu-title">${group.groupTitle}</p>
        <ul>
    `;

    group.menus.forEach(menu => {
      const isActive = currentPage === menu.path ? 'active' : '';

      sidebarHTML += `
        <li class="menu-item ${isActive}" onclick="window.location.href='${menu.path}'">
          <span class="menu-icon"><i class="${menu.icon}"></i></span>
          <span class="menu-label">${menu.label}</span>
        </li>
      `;
    });

    sidebarHTML += `
        </ul>
      </div>
    `;
  });

  sidebarHTML += `
      <div class="menu-group">
        <ul>
          <li class="menu-item logout" onclick="logout()">
            <span class="menu-icon"><i class="ph ph-sign-out"></i></span>
            <span class="menu-label">Logout</span>
          </li>
        </ul>
      </div>
    </nav>
    <div class="online-users">
      <i class="ph ph-users"></i> 127 user online
    </div>
  `;

  sidebarContainer.innerHTML = sidebarHTML;

  // Inject mobile hamburger + overlay once — only on pages using the shared
  // shell stylesheet (style.css), which provides .nav-toggle styling.
  const usesSharedShell = !!document.querySelector('link[href*="style.css"]');
  if (usesSharedShell && !document.querySelector('.nav-toggle')) {
    const btn = document.createElement('button');
    btn.className = 'nav-toggle';
    btn.setAttribute('aria-label', 'Buka menu navigasi');
    btn.innerHTML = '<i class="ph ph-list"></i>';
    btn.onclick = () => toggleSidebar();
    document.body.appendChild(btn);

    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    overlay.id = 'sidebar-overlay';
    overlay.onclick = () => toggleSidebar(true);
    document.body.appendChild(overlay);
  }
}

const DEFAULT_USERS = [
  {
    nim: "11223344",
    password: "rahasia123",
    name: "Budi Santoso"
  },
  {
    nim: "11223345",
    password: "password456",
    name: "Ani Wijaya"
  }
];

const DEFAULT_COURSES = [
  { code: "MK001", name: "Algoritma & Pemrograman", sks: 3, day: "Senin", time: "08:00-10:00", room: "R.201", lecturer: "Dr. Andi" },
  { code: "MK002", name: "Basis Data", sks: 3, day: "Selasa", time: "10:00-12:00", room: "R.302", lecturer: "Dr. Sari" },
  { code: "MK003", name: "Kalkulus", sks: 2, day: "Rabu", time: "08:00-10:00", room: "R.101", lecturer: "Prof. Budi" },
  { code: "MK004", name: "Sistem Operasi", sks: 3, day: "Kamis", time: "13:00-15:00", room: "R.205", lecturer: "Dr. Rina" },
  { code: "MK005", name: "Jaringan Komputer", sks: 3, day: "Jumat", time: "10:00-12:00", room: "Lab.1", lecturer: "Dr. Ahmad" },
  { code: "MK006", name: "Pemrograman Web", sks: 3, day: "Senin", time: "13:00-15:00", room: "Lab.2", lecturer: "Dr. Maya" },
  { code: "MK007", name: "Kecerdasan Buatan", sks: 3, day: "Selasa", time: "08:00-10:00", room: "R.303", lecturer: "Prof. Dedi" },
  { code: "MK008", name: "Statistika", sks: 2, day: "Rabu", time: "10:00-12:00", room: "R.102", lecturer: "Dr. Lisa" }
];

const DEFAULT_PROFILE = {
  nim: "11223344",
  name: "Budi Santoso",
  address: "Jl. Diponegoro No. 12, Salatiga",
  phone: "081234567890",
  bank: "BCA",
  accountNumber: "1234567890",
  accountName: "Budi Santoso"
};

const DEFAULT_GRADES = [
  { code: "MK001", name: "Algoritma & Pemrograman", sks: 3, grade: "A", weight: 4.0 },
  { code: "MK003", name: "Kalkulus", sks: 2, grade: "B+", weight: 3.5 },
  { code: "MK005", name: "Jaringan Komputer", sks: 3, grade: "B", weight: 3.0 }
];

// Full academic transcript grouped by semester
const DEFAULT_TRANSCRIPT = [
  {
    semester: "Semester 1",
    period: "Ganjil 2024/2025",
    courses: [
      { code: "MKU101", name: "Pendidikan Pancasila", sks: 2, grade: "A", weight: 4.0 },
      { code: "MKU102", name: "Bahasa Indonesia", sks: 2, grade: "A-", weight: 3.7 },
      { code: "TIF101", name: "Algoritma & Pemrograman", sks: 3, grade: "A", weight: 4.0 },
      { code: "TIF102", name: "Matematika Diskrit", sks: 3, grade: "B+", weight: 3.5 },
      { code: "TIF103", name: "Pengantar Teknologi Informasi", sks: 2, grade: "A", weight: 4.0 },
      { code: "TIF104", name: "Logika Informatika", sks: 3, grade: "B+", weight: 3.5 }
    ]
  },
  {
    semester: "Semester 2",
    period: "Genap 2024/2025",
    courses: [
      { code: "MKU201", name: "Pendidikan Kewarganegaraan", sks: 2, grade: "A-", weight: 3.7 },
      { code: "TIF201", name: "Struktur Data", sks: 3, grade: "A", weight: 4.0 },
      { code: "TIF202", name: "Kalkulus", sks: 3, grade: "B+", weight: 3.5 },
      { code: "TIF203", name: "Organisasi & Arsitektur Komputer", sks: 3, grade: "B", weight: 3.0 },
      { code: "TIF204", name: "Basis Data", sks: 3, grade: "A-", weight: 3.7 },
      { code: "TIF205", name: "Pemrograman Berorientasi Objek", sks: 3, grade: "A", weight: 4.0 }
    ]
  },
  {
    semester: "Semester 3",
    period: "Ganjil 2025/2026 (Berjalan)",
    courses: [
      { code: "TIF301", name: "Jaringan Komputer", sks: 3, grade: "B", weight: 3.0 },
      { code: "TIF302", name: "Sistem Operasi", sks: 3, grade: "B+", weight: 3.5 },
      { code: "TIF303", name: "Pemrograman Web", sks: 3, grade: "A", weight: 4.0 },
      { code: "TIF304", name: "Statistika", sks: 2, grade: "A-", weight: 3.7 }
    ]
  }
];

function initMockData() {
  if (!localStorage.getItem('mock_users')) {
    localStorage.setItem('mock_users', JSON.stringify(DEFAULT_USERS));
  }
  if (!localStorage.getItem('available_courses')) {
    localStorage.setItem('available_courses', JSON.stringify(DEFAULT_COURSES));
  }
  if (!localStorage.getItem('student_profile')) {
    localStorage.setItem('student_profile', JSON.stringify(DEFAULT_PROFILE));
  }
  if (!localStorage.getItem('student_grades')) {
    localStorage.setItem('student_grades', JSON.stringify(DEFAULT_GRADES));
  }
  if (!localStorage.getItem('student_transcript')) {
    localStorage.setItem('student_transcript', JSON.stringify(DEFAULT_TRANSCRIPT));
  }
  if (!localStorage.getItem('my_krs')) {
    localStorage.setItem('my_krs', JSON.stringify(["MK001", "MK002", "MK003"]));
  }
  if (!localStorage.getItem('attendance_log')) {
    localStorage.setItem('attendance_log', JSON.stringify([]));
  }
  if (!localStorage.getItem('krs_status')) {
    localStorage.setItem('krs_status', JSON.stringify('Draft'));
  }
}

function login(nim, password) {
  const users = JSON.parse(localStorage.getItem('mock_users') || '[]');
  const user = users.find(u => u.nim === nim && u.password === password);

  if (user) {
    const session = {
      nim: user.nim,
      name: user.name,
      loginAt: new Date().toISOString()
    };
    localStorage.setItem('active_session', JSON.stringify(session));
    return true;
  }
  return false;
}

function logout() {
  localStorage.removeItem('active_session');
  window.location.href = 'login.html';
}

function checkSession() {
  const session = localStorage.getItem('active_session');
  if (session) {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'login.html' || currentPage === '') {
      window.location.href = 'index.html';
    }
    return JSON.parse(session);
  } else {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage !== 'login.html') {
      window.location.href = 'login.html';
    }
    return null;
  }
}

function getCurrentUser() {
  const session = localStorage.getItem('active_session');
  return session ? JSON.parse(session) : null;
}

function getKRS() {
  const krsCodes = JSON.parse(localStorage.getItem('my_krs') || '[]');
  const allCourses = JSON.parse(localStorage.getItem('available_courses') || '[]');
  return allCourses.filter(course => krsCodes.includes(course.code));
}

function getAvailableCourses() {
  return JSON.parse(localStorage.getItem('available_courses') || '[]');
}

function addCourse(courseCode) {
  const krs = JSON.parse(localStorage.getItem('my_krs') || '[]');
  const allCourses = JSON.parse(localStorage.getItem('available_courses') || '[]');
  const course = allCourses.find(c => c.code === courseCode);

  if (!course) return { success: false, message: 'Mata kuliah tidak ditemukan' };
  if (krs.includes(courseCode)) return { success: false, message: 'Mata kuliah sudah diambil' };

  const currentSKS = getTotalSKS();
  if (currentSKS + course.sks > 24) {
    return { success: false, message: 'Melebihi batas maksimal 24 SKS' };
  }

  const conflict = checkScheduleConflict(course);
  if (conflict.hasConflict) {
    return { success: false, message: `Jadwal bentrok dengan ${conflict.course}` };
  }

  krs.push(courseCode);
  localStorage.setItem('my_krs', JSON.stringify(krs));
  localStorage.setItem('krs_status', JSON.stringify('Draft'));
  return { success: true, message: 'Mata kuliah berhasil ditambahkan' };
}

function dropCourse(courseCode) {
  let krs = JSON.parse(localStorage.getItem('my_krs') || '[]');
  if (!krs.includes(courseCode)) {
    return { success: false, message: 'Mata kuliah tidak ditemukan di KRS' };
  }

  krs = krs.filter(code => code !== courseCode);
  localStorage.setItem('my_krs', JSON.stringify(krs));
  localStorage.setItem('krs_status', JSON.stringify('Draft'));
  return { success: true, message: 'Mata kuliah berhasil dibatalkan' };
}

function getTotalSKS() {
  const krs = getKRS();
  return krs.reduce((total, course) => total + course.sks, 0);
}

function checkScheduleConflict(newCourse) {
  const krs = getKRS();
  for (const course of krs) {
    if (course.day === newCourse.day && course.time === newCourse.time) {
      return { hasConflict: true, course: course.name };
    }
  }
  return { hasConflict: false };
}

function getKRSStatus() {
  return JSON.parse(localStorage.getItem('krs_status') || '"Draft"');
}

function approveKRS() {
  localStorage.setItem('krs_status', JSON.stringify('Disetujui'));
}

function doAbsen(courseCode) {
  const attendanceLog = JSON.parse(localStorage.getItem('attendance_log') || '[]');
  const today = new Date().toISOString().split('T')[0];

  const alreadyAttended = attendanceLog.some(
    log => log.courseCode === courseCode && log.date === today
  );

  if (alreadyAttended) {
    return { success: false, message: 'Anda sudah absen untuk mata kuliah ini hari ini' };
  }

  const newLog = {
    courseCode: courseCode,
    date: today,
    status: "Hadir"
  };

  attendanceLog.push(newLog);
  localStorage.setItem('attendance_log', JSON.stringify(attendanceLog));
  return { success: true, message: 'Absensi berhasil dicatat' };
}

function getAttendanceLog() {
  return JSON.parse(localStorage.getItem('attendance_log') || '[]');
}

function getAttendanceForCourse(courseCode) {
  const logs = getAttendanceLog();
  return logs.filter(log => log.courseCode === courseCode);
}

function getProfile() {
  return JSON.parse(localStorage.getItem('student_profile') || '{}');
}

function updateProfile(profileData) {
  const currentProfile = getProfile();
  const updatedProfile = { ...currentProfile, ...profileData };
  localStorage.setItem('student_profile', JSON.stringify(updatedProfile));
  return { success: true, message: 'Profil berhasil diperbarui' };
}

function getGrades() {
  return JSON.parse(localStorage.getItem('student_grades') || '[]');
}

function getTranscript() {
  return JSON.parse(localStorage.getItem('student_transcript') || '[]');
}

// Map a letter grade to a semantic badge color class
function gradeClass(grade) {
  const g = (grade || '').trim().toUpperCase();
  if (g === 'A' || g === 'A-') return 'grade-a';
  if (g === 'B+' || g === 'B' || g === 'B-') return 'grade-b';
  if (g === 'C+' || g === 'C' || g === 'C-') return 'grade-c';
  if (g === 'D') return 'grade-d';
  return 'grade-e';
}

// Cumulative IPK + total SKS across all transcript semesters
function getTranscriptSummary() {
  const transcript = getTranscript();
  let totalSks = 0;
  let totalWeighted = 0;
  transcript.forEach(sem => {
    sem.courses.forEach(c => {
      totalSks += c.sks;
      totalWeighted += c.weight * c.sks;
    });
  });
  return {
    totalSks,
    totalCourses: transcript.reduce((n, s) => n + s.courses.length, 0),
    ipk: totalSks > 0 ? (totalWeighted / totalSks).toFixed(2) : '0.00'
  };
}

function semesterIP(courses) {
  let sks = 0, weighted = 0;
  courses.forEach(c => { sks += c.sks; weighted += c.weight * c.sks; });
  return { sks, ip: sks > 0 ? (weighted / sks).toFixed(2) : '0.00' };
}

// Change the password of the currently logged-in user
function changePassword(currentPassword, newPassword) {
  const session = getCurrentUser();
  if (!session) return { success: false, message: 'Sesi tidak ditemukan, silakan login ulang.' };

  const users = JSON.parse(localStorage.getItem('mock_users') || '[]');
  const idx = users.findIndex(u => u.nim === session.nim);
  if (idx === -1) return { success: false, message: 'Akun tidak ditemukan.' };
  if (users[idx].password !== currentPassword) {
    return { success: false, message: 'Password saat ini salah.' };
  }
  if (newPassword.length < 6) {
    return { success: false, message: 'Password baru minimal 6 karakter.' };
  }
  if (newPassword === currentPassword) {
    return { success: false, message: 'Password baru tidak boleh sama dengan password lama.' };
  }

  users[idx].password = newPassword;
  localStorage.setItem('mock_users', JSON.stringify(users));
  return { success: true, message: 'Password berhasil diperbarui.' };
}

function calculateGPA() {
  const grades = getGrades();
  if (grades.length === 0) return 0;

  let totalWeightedPoints = 0;
  let totalCredits = 0;

  for (const grade of grades) {
    totalWeightedPoints += grade.weight * grade.sks;
    totalCredits += grade.sks;
  }

  return totalCredits > 0 ? (totalWeightedPoints / totalCredits).toFixed(2) : 0;
}

function getTotalPassedCredits() {
  const grades = getGrades();
  return grades.reduce((total, grade) => total + grade.sks, 0);
}

function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('id-ID', options);
}

function getCourseByCode(code) {
  const courses = getAvailableCourses();
  return courses.find(c => c.code === code);
}

function formatLongDate(date) {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

const NAV_GROUPS = [
  {
    title: 'Informasi Umum',
    items: [
      { key: 'home',     label: 'Home',     icon: 'ph ph-house',          href: 'index.html' },
      { key: 'panduan',  label: 'Panduan',  icon: 'ph ph-book-open',      href: 'panduan.html' }
    ]
  },
  {
    title: 'Menu Akademik',
    items: [
      { key: 'krs',       label: 'Registrasi Matakuliah', icon: 'ph ph-clipboard-text', href: 'krs.html' },
      { key: 'jadwal',    label: 'Jadwal Kuliah',         icon: 'ph ph-calendar-dots',  href: 'jadwal-absen.html' },
      { key: 'khs',       label: 'Hasil Studi',           icon: 'ph ph-graduation-cap', href: 'khs.html' },
      { key: 'transkrip', label: 'Transkrip Nilai',       icon: 'ph ph-file-text',      href: 'khs.html' }
    ]
  },
  {
    title: 'Pengaturan Akun',
    items: [
      { key: 'profil',   label: 'Data Pribadi',   icon: 'ph ph-user',  href: 'profil.html' },
      { key: 'password', label: 'Ganti Password', icon: 'ph ph-key',   href: '#' }
    ]
  }
];

function buildShell(opts) {
  const { active, title } = opts;
  const user = getCurrentUser();
  const name = (user && user.name) || 'Mahasiswa';

  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    let groupsHTML = NAV_GROUPS.map(group => {
      const items = group.items.map(item => `
        <a href="${item.href}" class="nav-item${item.key === active ? ' active' : ''}">
          <i class="${item.icon}"></i> ${item.label}
        </a>`).join('');
      return `<div class="nav-group">
        <div class="nav-group-title">${group.title}</div>
        ${items}
      </div>`;
    }).join('');

    sidebar.innerHTML = `
      <div class="sidebar-brand">
        <div class="logo-mark">PA</div>
        <div class="logo-text">
          <strong>Portal Mahasiswa</strong>
          <span>Administrasi Akademik</span>
        </div>
      </div>
      ${groupsHTML}
      <div class="nav-group" style="margin-top:8px;">
        <a href="#" class="nav-item logout" onclick="logout(); return false;">
          <i class="ph ph-sign-out"></i> Logout
        </a>
      </div>
      <div class="sidebar-footer">Cc: MieSo &middot; &copy; 2026</div>
    `;
  }

  const topbar = document.getElementById('topbar');
  if (topbar) {
    topbar.innerHTML = `
      <div class="topbar-left">
        <button class="menu-toggle" onclick="document.getElementById('sidebar').classList.toggle('open')">
          <i class="ph ph-list"></i>
        </button>
        <div>
          <h1>${title}</h1>
          <div class="greeting">Halo, selamat datang kembali <strong>${name}</strong> 👋</div>
        </div>
      </div>
      <div class="topbar-right">
        <span class="date-chip"><i class="ph ph-calendar-blank"></i> ${formatLongDate(new Date())}</span>
      </div>
    `;
  }
}

initMockData();
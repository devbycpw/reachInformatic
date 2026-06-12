/**
 * Student Administrative Portal - Main Logic
 * All data stored in localStorage
 */

// ============================================
// MOCK DATA INITIALIZATION
// ============================================
// Konfigurasi data menu: Struktur milikmu + Icon milik temanmu
const SIDEBAR_MENU_DATA = [
  {
    groupTitle: "Informasi Umum",
    menus: [
      { label: "Home", icon: "fas fa-home fa-xl", path: "index.html" },
      { label: "Panduan", icon: "fas fa-book fa-xl", path: "panduan.html" }
    ]
  },
  {
    groupTitle: "Menu Akademik",
    menus: [
      { label: "Registrasi Matakuliah", icon: "fas fa-clipboard-list fa-xl", path: "krs.html" },
      { label: "Jadwal Kuliah", icon: "fas fa-calendar-alt fa-xl", path: "jadwal-absen.html" },
      { label: "Hasil Studi", icon: "fas fa-graduation-cap fa-xl", path: "khs.html" },
      { label: "Transkrip Nilai", icon: "fas fa-file-alt fa-xl", path: "transkrip.html" }
    ]
  },
  {
    groupTitle: "Pengaturan Akun",
    menus: [
      { label: "Data Pribadi", icon: "fas fa-user fa-xl", path: "profil.html" },
      { label: "Ganti Password", icon: "fas fa-key fa-xl", path: "ganti-password.html" }
    ]
  }
];

// Fungsi penyusun komponen Sidebar
function renderReusableSidebar() {
  const sidebarContainer = document.getElementById('sidebar-app');
  if (!sidebarContainer) return;

  // OTOMATISASI: Mengambil nama file HTML yang sedang aktif di browser saat ini
  // Contoh: jika URL-nya localhost/krs.html, currentPage akan bernilai 'krs.html'
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  let sidebarHTML = `
    <div class="sidebar-header">
      <div class="sidebar-logo">
        <span class="logo-icon">★</span> 
        <span class="logo-text">PortalKU</span>
      </div>
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
      // Validasi kecocokan nama file untuk menentukan class active
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

  // Bagian Logout & Online Users
  sidebarHTML += `
      <div class="menu-group">
        <ul>
          <li class="menu-item logout" onclick="logout()">
            <span class="menu-icon"><i class="fas fa-sign-out-alt fa-xl"></i></span>
            <span class="menu-label">Logout</span>
          </li>
        </ul>
      </div>
    </nav>
    <div class="online-users">
      <i class="fas fa-users fa-xl"></i> 127 user online
    </div>
  `;

  sidebarContainer.innerHTML = sidebarHTML;
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

// ============================================
// INITIALIZATION FUNCTIONS
// ============================================

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

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================

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

// ============================================
// KRS FUNCTIONS
// ============================================

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
  
  // Check schedule conflict
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

// ============================================
// ATTENDANCE FUNCTIONS
// ============================================

function doAbsen(courseCode) {
  const attendanceLog = JSON.parse(localStorage.getItem('attendance_log') || '[]');
  const today = new Date().toISOString().split('T')[0];
  
  // Check if already attended today
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

// ============================================
// PROFILE FUNCTIONS
// ============================================

function getProfile() {
  return JSON.parse(localStorage.getItem('student_profile') || '{}');
}

function updateProfile(profileData) {
  const currentProfile = getProfile();
  const updatedProfile = { ...currentProfile, ...profileData };
  localStorage.setItem('student_profile', JSON.stringify(updatedProfile));
  return { success: true, message: 'Profil berhasil diperbarui' };
}

// ============================================
// GRADES FUNCTIONS
// ============================================

function getGrades() {
  return JSON.parse(localStorage.getItem('student_grades') || '[]');
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

// ============================================
// UTILITY FUNCTIONS
// ============================================

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

// ============================================
// APP SHELL (sidebar + topbar) — sesuai desain Figma
// ============================================

const NAV_GROUPS = [
  {
    title: 'Informasi Umum',
    items: [
      { key: 'home',     label: 'Home',     icon: 'fa-house',          href: 'index.html' },
      { key: 'panduan',  label: 'Panduan',  icon: 'fa-book-open',      href: 'panduan.html' }
    ]
  },
  {
    title: 'Menu Akademik',
    items: [
      { key: 'krs',       label: 'Registrasi Matakuliah', icon: 'fa-clipboard-list', href: 'krs.html' },
      { key: 'jadwal',    label: 'Jadwal Kuliah',         icon: 'fa-calendar-days',  href: 'jadwal-absen.html' },
      { key: 'khs',       label: 'Hasil Studi',           icon: 'fa-graduation-cap', href: 'khs.html' },
      { key: 'transkrip', label: 'Transkrip Nilai',       icon: 'fa-file-lines',     href: 'khs.html' }
    ]
  },
  {
    title: 'Pengaturan Akun',
    items: [
      { key: 'profil',   label: 'Data Pribadi',   icon: 'fa-user',  href: 'profil.html' },
      { key: 'password', label: 'Ganti Password', icon: 'fa-key',   href: '#' }
    ]
  }
];

/**
 * Render the app shell into a page.
 * Page markup only needs:
 *   <div class="app">
 *     <aside class="sidebar" id="sidebar"></aside>
 *     <div class="main">
 *       <div class="topbar" id="topbar"></div>
 *       <div class="content"> ...page content... </div>
 *     </div>
 *   </div>
 * @param {object} opts { active, title, greetingName }
 */
function buildShell(opts) {
  const { active, title } = opts;
  const user = getCurrentUser();
  const name = (user && user.name) || 'Mahasiswa';

  // ---- Sidebar ----
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    let groupsHTML = NAV_GROUPS.map(group => {
      const items = group.items.map(item => `
        <a href="${item.href}" class="nav-item${item.key === active ? ' active' : ''}">
          <i class="fas ${item.icon}"></i> ${item.label}
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
          <i class="fas fa-arrow-right-from-bracket"></i> Logout
        </a>
      </div>
      <div class="sidebar-footer">Cc: MieSo &middot; &copy; 2026</div>
    `;
  }

  // ---- Topbar ----
  const topbar = document.getElementById('topbar');
  if (topbar) {
    topbar.innerHTML = `
      <div class="topbar-left">
        <button class="menu-toggle" onclick="document.getElementById('sidebar').classList.toggle('open')">
          <i class="fas fa-bars"></i>
        </button>
        <div>
          <h1>${title}</h1>
          <div class="greeting">Halo, selamat datang kembali <strong>${name}</strong> 👋</div>
        </div>
      </div>
      <div class="topbar-right">
        <span class="date-chip"><i class="far fa-calendar"></i> ${formatLongDate(new Date())}</span>
      </div>
    `;
  }
}

// Initialize data on script load
initMockData();
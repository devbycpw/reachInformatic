const SIDEBAR_MENU_DATA = [
  {
    groupTitle: "Informasi Umum",
    menus: [
      { label: "Home", icon: "fas fa-home", path: "index.html" },
      { label: "Panduan", icon: "fas fa-book", path: "panduan.html" }
    ]
  },
  {
    groupTitle: "Menu Akademik",
    menus: [
      { label: "Registrasi Matakuliah", icon: "fas fa-clipboard-list", path: "krs.html" },
      { label: "Jadwal Kuliah", icon: "fas fa-calendar-alt", path: "jadwal-absen.html" },
      { label: "Hasil Studi", icon: "fas fa-graduation-cap", path: "khs.html" },
      { label: "Transkrip Nilai", icon: "fas fa-file-alt", path: "transkrip.html" }
    ]
  },
  {
    groupTitle: "Administrasi",
    menus: [
      { label: "Tagihan", icon: "fas fa-money-bill", path: "tagihan.html" },
    ]
  },
  {
    groupTitle: "Pengaturan Akun",
    menus: [
      { label: "Data Pribadi", icon: "fas fa-user", path: "profil.html" },
      { label: "Ganti Password", icon: "fas fa-key", path: "ganti-password.html" }
    ]
  }
];

function renderReusableSidebar() {
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
  { no: 1, code: 'TC511H', name: 'MATEMATIKA DISKRIT', sks: 3, grade: 'AB', weight: 3.5, ak: '10,5', tahun: '2024-2025/1' },
  { no: 2, code: 'TC513H', name: 'DASAR-DASAR PEMROGRAMAN', sks: 3, grade: 'A', weight: 4.0, ak: '12', tahun: '2024-2025/1' },
  { no: 3, code: 'TC512H', name: 'PENGANTAR TEKNOLOGI INFORMASI', sks: 3, grade: 'A', weight: 4.0, ak: '12', tahun: '2024-2025/1' },
  { no: 4, code: 'TC515C', name: 'SISTEM BASIS DATA', sks: 3, grade: 'A', weight: 4.0, ak: '12', tahun: '2024-2025/1' },
  { no: 5, code: 'TC514I', name: 'BAHASA INGGRIS', sks: 3, grade: 'A', weight: 4.0, ak: '12', tahun: '2024-2025/1' },
  { no: 6, code: 'MU116K', name: 'BAHASA INDONESIA', sks: 2, grade: 'A', weight: 4.0, ak: '8', tahun: '2024-2025/2' },
  { no: 7, code: 'TC521A', name: 'ALJABAR LINIER DAN MATRIX', sks: 2, grade: 'A', weight: 4.0, ak: '8', tahun: '2024-2025/2' },
  { no: 8, code: 'MU114G', name: 'PANCASILA', sks: 2, grade: 'A', weight: 4.0, ak: '8', tahun: '2024-2025/2' },
  { no: 9, code: 'MU117E', name: 'PENDIDIKAN AGAMA (KRISTEN)', sks: 2, grade: 'A', weight: 4.0, ak: '8', tahun: '2024-2025/2' },
  { no: 10, code: 'TC534F', name: 'ALGORITMA DAN STRUKTUR DATA', sks: 3, grade: 'A', weight: 4.0, ak: '12', tahun: '2024-2025/3' },
  { no: 11, code: 'TC532B', name: 'STATISTIKA DAN PROBABILITAS', sks: 2, grade: 'A', weight: 4.0, ak: '8', tahun: '2024-2025/3' },
  { no: 12, code: 'TC533A', name: 'JARINGAN KOMPUTER', sks: 3, grade: 'AB', weight: 3.5, ak: '10,5', tahun: '2024-2025/3' },
  { no: 13, code: 'TC535G', name: 'INTERAKSI MANUSIA DAN KOMPUTER', sks: 3, grade: 'A', weight: 4.0, ak: '12', tahun: '2024-2025/3' },
  { no: 14, code: 'TC531E', name: 'TEORI BAHASA DAN AUTOMATA', sks: 3, grade: 'A', weight: 4.0, ak: '12', tahun: '2024-2025/3' },
  { no: 15, code: 'MU115N', name: 'KEWARGANEGARAAN', sks: 2, grade: 'A', weight: 4.0, ak: '8', tahun: '2025-2026/1' },
  { no: 16, code: 'TC212C', name: 'PEMROGRAMAN BERORIENTASI OBJEK', sks: 3, grade: 'A', weight: 4.0, ak: '12', tahun: '2025-2026/1' },
  { no: 17, code: 'TC223E', name: 'PEMROGRAMAN WEB', sks: 3, grade: 'A', weight: 4.0, ak: '12', tahun: '2025-2026/1' },
  { no: 18, code: 'TC614F', name: 'DASAR PEMROGRAMAN JARINGAN', sks: 3, grade: 'A', weight: 4.0, ak: '12', tahun: '2025-2026/1' },
  { no: 19, code: 'TC611E', name: 'KECERDASAN BUATAN', sks: 3, grade: 'A', weight: 4.0, ak: '12', tahun: '2025-2026/1' },
  { no: 20, code: 'MU118C', name: 'PENGEMBANGAN KEPRIBADIAN ENTREPRENEURIAL', sks: 3, grade: 'A', weight: 4.0, ak: '12', tahun: '2025-2026/2' },
  { no: 21, code: 'TC615H', name: 'ARSITEKTUR DAN ORGANISASI KOMPUTER', sks: 3, grade: 'A', weight: 4.0, ak: '12', tahun: '2025-2026/2' }
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
  localStorage.setItem('student_grades', JSON.stringify(DEFAULT_GRADES));
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


function initAppLayout() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPage === 'login.html') {
    return;
  }

  const user = checkSession();
  if (!user) return;

  const contentArea = document.querySelector('main.content-area');
  if (!contentArea) return;

  const mainContainer = document.createElement('div');
  mainContainer.className = 'main-container';

  const mainContentWrapper = document.createElement('div');
  mainContentWrapper.className = 'main-content-wrapper';

  const body = document.body;
  
  const legacyBars = document.querySelectorAll('.top-date-bar, .header-bar, .sidebar, .footer, footer');
  legacyBars.forEach(el => el.remove());

  body.appendChild(mainContainer);
  mainContainer.appendChild(mainContentWrapper);
  mainContentWrapper.appendChild(contentArea);

  const sidebar = document.createElement('aside');
  sidebar.className = 'sidebar';
  sidebar.id = 'sidebar-app';
  mainContainer.insertBefore(sidebar, mainContentWrapper); // Insert sidebar before content wrapper

  let sidebarHTML = `
    <div class="sidebar-header">
      <div class="sidebar-logo">
        <img src="img/Logo-01.png" alt="Logo" style="width: auto; height: 80px; margin-right: 10px;">
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
            <span class="menu-icon"><i class="fas fa-sign-out-alt"></i></span>
            <span class="menu-label">Logout</span>
          </li>
        </ul>
      </div>
    </nav>
    <div class="online-users">
      127 user online
    </div>
  `;
  sidebar.innerHTML = sidebarHTML;

  const topbar = document.createElement('div');
  topbar.className = 'topbar';
  mainContentWrapper.insertBefore(topbar, contentArea); 

  const now = new Date();
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
  const formattedDate = days[now.getDay()] + ', ' + now.getDate() + ' ' + months[now.getMonth()] + ' ' + now.getFullYear();

  topbar.innerHTML = `
    <div class="topbar-left">
      <button class="mobile-menu-btn" onclick="toggleMobileSidebar()" aria-label="Toggle Menu">
        <i class="fas fa-bars"></i>
      </button>
      <div class="topbar-date">
        <i class="fas fa-calendar-alt"></i>
        <span>${formattedDate}</span>
      </div>
    </div>
    <div class="topbar-right">
      <div class="user-academic-badge">
        <span class="user-name">${user.name}</span>
        <span class="user-meta">NIM <strong>${user.nim}</strong> | FTI - Teknik Informatika | Sem 8 (Akhir)</span>
      </div>
    </div>
  `;

  const overlay = document.createElement('div');
  overlay.className = 'sidebar-overlay';
  overlay.id = 'sidebar-overlay';
  overlay.onclick = toggleMobileSidebar;
  body.appendChild(overlay);

  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <p>&copy; ${now.getFullYear()} Portal Administratif Mahasiswa. Bagian Administrasi Akademik tidak bertanggung jawab apabila data yang anda berikan salah.</p>
  `;
  mainContentWrapper.appendChild(footer);
}

window.toggleMobileSidebar = function() {
  const sidebar = document.getElementById('sidebar-app');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar && overlay) {
    sidebar.classList.toggle('mobile-active');
    overlay.classList.toggle('mobile-active');
  }
};

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

function syncSessionName(newName) {
  const session = getCurrentUser();
  if (session && session.name !== newName) {
    session.name = newName;
    localStorage.setItem('active_session', JSON.stringify(session));
  }
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

//ABSEN 

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
  
  if (profileData.name) {
    syncSessionName(profileData.name);
  }
  
  return { success: true, message: 'Profil berhasil diperbarui' };
}


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


function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('id-ID', options);
}

function getCourseByCode(code) {
  const courses = getAvailableCourses();
  return courses.find(c => c.code === code);
}

initMockData();


function initGlobalAnimations() {
  const selectors = [
    '.welcome-box', '.dashboard-title', '.stat-card', '.panel-card', 
    '.info-box-siakad', '.slider-container', '.quick-nav-box', 
    '.table-card', '.alert', '.form-group', '.login-card', '.content-area > h2', '.content-area > h3'
  ];
  
  let elements = document.querySelectorAll(selectors.join(', '));
  
  let delayIndex = 0;
  elements.forEach((el) => {
    if (!el.classList.contains('animate-on-scroll')) {
      el.classList.add('animate-on-scroll');
      let delay = (delayIndex % 5) * 100 + 100;
      el.classList.add(`delay-${delay}`);
      delayIndex++;
    }
  });

  const animElements = document.querySelectorAll('.animate-on-scroll');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  animElements.forEach(el => observer.observe(el));
}


initAppLayout();
initGlobalAnimations();
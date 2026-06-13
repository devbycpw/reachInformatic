/**
 * Controller Khusus modul Tagihan Keuangan Mahasiswa
 * Terintegrasi dengan Mock Data LocalStorage SIAKAD
 */

const DEFAULT_INVOICE_DATA = {
    semesterInfo: "SEMESTER 8 TA 2025 - 2026",
    dueDate: "2026-04-01",
    finalDueDate: "2026-06-12",
    items: [
        { no: 1, name: "Uang Kuliah", amount: 5500000 },
        { no: 2, name: "Denda", amount: 0 },
        { no: 3, name: "SPP / BPP", amount: 1500000 },
        { no: 4, name: "Layanan Kemahasiswaan", amount: 3340000 } // Diubah ke 3,34jt agar total klop 10.340.000 atau sesuaikan kebutuhan
    ],
    amountPaid: 10340000 // Simulasi Lunas sesuai total utang item di atas
};

// Fungsi inisiasi data khusus modul tagihan
function initInvoiceMockData() {
    if (!localStorage.getItem('student_invoice')) {
        localStorage.setItem('student_invoice', JSON.stringify(DEFAULT_INVOICE_DATA));
    }
}

// Format IDR Currency Utility
function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'decimal',
        minimumFractionDigits: 0
    }).format(number);
}

function renderInvoicePage() {
    const invoice = JSON.parse(localStorage.getItem('student_invoice'));
    if (!invoice) return;

    // 1. Render Judul Semester
    const titleEl = document.getElementById('invoiceTitleSemester');
    if (titleEl) {
        titleEl.innerHTML = `<i class="fas fa-file-invoice-dollar"></i> Rincian Kewajiban Pembayaran - ${invoice.semesterInfo}`;
    }

    // 2. Kalkulasi Akumulasi Tagihan
    let totalUtang = 0;
    const tbody = document.getElementById('invoiceItemsBody');
    if (tbody) {
        tbody.innerHTML = '';
        invoice.items.forEach(item => {
            totalUtang += item.amount;
            tbody.innerHTML += `
                <tr>
                    <td class="text-center">${item.no}</td>
                    <td style="font-weight: 500;">${item.name}</td>
                    <td class="text-right" style="font-weight: 600;">${formatRupiah(item.amount)}</td>
                </tr>
            `;
        });
    }

    const sisaBayar = totalUtang - invoice.amountPaid;

    // 3. Render Status Badge Utama (Paid / Unpaid)
    const badgeContainer = document.getElementById('invoiceStatusBadge');
    if (badgeContainer) {
        if (sisaBayar <= 0) {
            badgeContainer.innerHTML = `
                <div class="invoice-status-pill paid">
                    <i class="fas fa-check-circle"></i> Terbayar Lunas
                </div>
            `;
        } else {
            badgeContainer.innerHTML = `
                <div class="invoice-status-pill unpaid">
                    <i class="fas fa-exclamation-circle"></i> Belum Lunas
                </div>
            `;
        }
    }

    // 4. Render Bagian Summary Card Kanan
    document.getElementById('summaryTotalUtang').innerText = `Rp ${formatRupiah(totalUtang)}`;
    document.getElementById('summaryTerbayar').innerText = `Rp ${formatRupiah(invoice.amountPaid)}`;
    document.getElementById('summarySisaBayar').innerText = `Rp ${formatRupiah(sisaBayar <= 0 ? 0 : sisaBayar)}`;

    // 5. Render Konversi Format Tanggal Indonesia (memanfaatkan fungsi formatDate dari app.js bawaanmu)
    if (typeof formatDate === 'function') {
        document.getElementById('dateJatuhTempo').innerText = formatDate(invoice.dueDate);
        document.getElementById('datePelunasan').innerText = formatDate(invoice.finalDueDate);
    } else {
        document.getElementById('dateJatuhTempo').innerText = invoice.dueDate;
        document.getElementById('datePelunasan').innerText = invoice.finalDueDate;
    }
}

// Simulasi Trigger Download PDF
window.downloadInvoicePDF = function() {
    alert("Sistem menggenerasi berkas PDF Dokumen Tagihan Resmi Resmi... Silahkan tunggu.");
    // Kode integrasi library eksport PDF (seperti window.print atau jsPDF) bisa diletakkan di sini
};

// Jalankan ketika dokumen siap
document.addEventListener("DOMContentLoaded", () => {
    initInvoiceMockData();
    renderInvoicePage();
    
    // Panggil ulang animasi global bawaan SIAKAD milikmu agar efek fade-in-up berjalan mulus
    if (typeof initGlobalAnimations === 'function') {
        initGlobalAnimations();
    }
});
# CRM SETUP — Hafi Digital

Panduan memasang `hafi-crm.csv` menjadi CRM siap pakai di **Google Sheets** (atau Excel/Notion), plus **Overdue view** dan **Dashboard metrics** dengan formula.

> Baris `P-0001` di CSV hanyalah **contoh** — hapus setelah import.

---

## 1. Import

1. Google Sheets → **File → Import → Upload → `hafi-crm.csv`** → **Replace spreadsheet**.
2. Rename sheet menjadi `CRM`.
3. Sheet `CRM` menggunakan **baris 1 sebagai header**; data mulai **baris 2**.

Kolom (A–T):
```
A  ID                   K  Opportunity
B  Business Name        L  Priority
C  Industry             M  Source
D  City                 N  Date Found
E  Website              O  Last Contact
F  Instagram            P  Next Action
G  Contact              Q  Next Action Date
H  Decision Maker       R  Status
I  Website Status       S  Potential Value
J  Main Problem         T  Notes
```

---

## 2. Data Validation (dropdown)

Pilih kolom lalu **Data → Data validation → Dropdown**.

| Kolom | Opsi |
|---|---|
| **I — Website Status** | `Tidak ada`, `Outdated`, `Tidak responsif`, `Cukup`, `Bagus` |
| **L — Priority** | `PRIORITY`, `NURTURE`, `SKIP` |
| **M — Source** | `Google`, `Google Maps`, `Instagram`, `LinkedIn`, `Direktori`, `Marketplace`, `Website Perusahaan`, `Networking`, `Referral` |
| **R — Status** | `NEW`, `RESEARCHED`, `CONTACTED`, `REPLIED`, `QUALIFIED`, `CALL`, `CONSULTATION`, `PROPOSAL`, `NEGOTIATION`, `WON`, `LOST`, `FOLLOW-UP LATER` |

---

## 3. Conditional Formatting

Format → Conditional formatting (terapkan ke **R2:R**):

| Warna | Ketentuan |
|---|---|
| Abu | `=R2="NEW"` |
| Biru muda | `=R2="RESEARCHED"` |
| Biru | `=R2="CONTACTED"` |
| Oranye | `=R2="REPLIED"` |
| Kuning | `=R2="QUALIFIED"` |
| Hijau muda | `=R2="CONSULTATION"` |
| Hijau | `=R2="PROPOSAL"` |
| Ungu | `=R2="NEGOTIATION"` |
| **Hijau tua + bold** | `=R2="WON"` |
| Merah | `=R2="LOST"` |
| Abu-abu | `=R2="FOLLOW-UP LATER"` |

Baris **Overdue** (format ke seluruh baris, custom formula):
```
=AND($Q2<>"", $Q2<=TODAY(), $R2<>"WON", $R2<>"LOST")
```
→ beri background merah muda agar langsung terlihat.

---

## 4. Tab "OVERDUE VIEW"

Buat sheet baru bernama `OVERDUE`, di sel **A1** tempel:

```
=QUERY(CRM!A2:T,
 "select A,B,C,E,G,L,P,Q,R
  where Q is not null
    and Q <= date '"&TEXT(TODAY(),"yyyy-mm-dd")&"'
    and R <> 'WON'
    and R <> 'LOST'
  order by Q asc", 0)
```

Kolom hasil: `ID · Business Name · Industry · Website · Contact · Priority · Next Action · Next Action Date · Status`.

Tambahkan header manual di baris 1 bila perlu. Sheet ini otomatis menampilkan **semua lead yang Next Action-nya jatuh tempo/lewat** dan belum WON/LOST. Buka setiap hari.

---

## 5. Tab "DASHBOARD"

Buat sheet `DASHBOARD`. Kolom A = label, kolom B = formula. Pastikan sheet bernama tepat `CRM`.

**Input (funnel):**
```
Prospects Found        =COUNTA(CRM!B2:B)
Prospects Qualified    =SUMPRODUCT(COUNTIF(CRM!R2:R,{"QUALIFIED","CALL","CONSULTATION","PROPOSAL","NEGOTIATION","WON"}))
Messages Sent          =COUNTA(CRM!B2:B)-COUNTIF(CRM!R2:R,"NEW")-COUNTIF(CRM!R2:R,"RESEARCHED")
Replies                =SUMPRODUCT(COUNTIF(CRM!R2:R,{"REPLIED","QUALIFIED","CALL","CONSULTATION","PROPOSAL","NEGOTIATION","WON"}))
Consultations          =SUMPRODUCT(COUNTIF(CRM!R2:R,{"CALL","CONSULTATION","PROPOSAL","NEGOTIATION","WON"}))
Proposals              =SUMPRODUCT(COUNTIF(CRM!R2:R,{"PROPOSAL","NEGOTIATION","WON"}))
Deals Won              =COUNTIF(CRM!R2:R,"WON")
Deals Lost             =COUNTIF(CRM!R2:R,"LOST")
```

**Rasio (rate):**
```
Reply Rate         =IFERROR(B4/B3,0)      ' Replies ÷ Messages Sent
Qualification Rate =IFERROR(B2/B4,0)      ' Qualified ÷ Replies
Consultation Rate  =IFERROR(B5/B2,0)      ' Consultations ÷ Qualified
Proposal Rate      =IFERROR(B6/B5,0)      ' Proposals ÷ Consultations
Close Rate         =IFERROR(B7/B6,0)      ' Won ÷ Proposals
```

> Sesuaikan referensi sel (B2, B3, …) dengan urutan baris aktual di sheet Anda. Format sel rate sebagai **persen**.

**Tambahan berguna:**
```
Avg Project Value (WON)  =IFERROR(AVERAGEIF(CRM!R2:R,"WON",CRM!S2:S),0)
WON by Source            =QUERY(CRM!A2:T,"select M, count(A) where R='WON' group by M label count(A) 'Won'",0)
Overdue Count            =COUNTA(OVERDUE!A2:A)
```

> **Penting:** pastikan kolom **S — Potential Value** berisi angka (mis. `3999000`) agar `AVERAGEIF` bekerja. Untuk sel kosong biarkan kosong.

---

## 6. Disiplin Harian

- Setiap lead **wajib** punya **Next Action** + **Next Action Date**. Tidak boleh kosong.
- Buka tab `OVERDUE` setiap hari.
- Lead `CONTACTED` tanpa update >7 hari → follow-up atau ubah ke `FOLLOW-UP LATER`.
- `LOST` wajib diisi alasan di **Notes** (harga/timing/tidak butuh/kompetitor) untuk Learning Loop.

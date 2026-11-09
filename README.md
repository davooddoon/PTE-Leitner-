# PTE Core

اپلیکیشن یادگیری لغات PTE با روش لایتنر (جعبه‌های مرور).
کاملاً در یک صفحهٔ وب اجرا می‌شود و روی موبایل مثل یک برنامه نصب می‌شود.

A Leitner-box vocabulary trainer for PTE. A single static web page that installs on mobile as a PWA.

---

## فایل‌های پروژه

```
index.html            خود اپلیکیشن
pte_words.xlsx        لیست لغات (جدا از برنامه)
xlsx.full.min.js      کتابخانهٔ خواندن اکسل (برای کار آفلاین)
sw.js                 سرویس‌ورکر (برای کار آفلاین)
README.md             همین فایل
```

> لغات داخل `index.html` جاسازی نشده‌اند و فقط با دکمهٔ «Load official APEUni deck» از `pte_words.xlsx` خوانده می‌شوند. به همین دلیل حجم برنامه کم می‌ماند.

## راه‌اندازی روی GitHub Pages

1. همهٔ فایل‌های بالا را در ریشهٔ یک مخزن (repository) آپلود کنید.
2. به **Settings → Pages** بروید.
3. در بخش **Source** گزینهٔ **Deploy from a branch** را انتخاب کنید، شاخهٔ `main` و پوشهٔ `/ (root)` را بزنید و ذخیره کنید.
4. بعد از یکی دو دقیقه آدرس برنامه این شکل است:
   `https://USERNAME.github.io/REPO-NAME/`

## استفاده

1. آدرس بالا را روی گوشی با `https://` باز کنید.
2. دکمهٔ **Load official APEUni deck** را یک بار بزنید تا لغات وارد برنامه شوند.
3. از منوی مرورگر گزینهٔ **Add to Home Screen** را بزنید تا برنامه نصب شود.

لغات و پیشرفت شما فقط روی همان دستگاه ذخیره می‌شوند.

## کار آفلاین

- بار اول باید آنلاین باشید تا `index.html` و `xlsx.full.min.js` کش شوند.
- بعد از آن برنامه آفلاین هم باز می‌شود.
- این بخش‌ها نیاز به اینترنت دارند: تلفظ صوتی، تعریف لغت، ترجمهٔ خودکار و فونت‌های Vazirmatn / Inter / JetBrains Mono (آفلاین فونت سیستم نمایش داده می‌شود).

## ویرایش لغات

فایل `pte_words.xlsx` سه ستون دارد:

| Word | Meaning | Category |
|------|---------|----------|
| electric | | L-FIB |

دسته‌ها: `PTE-Basic`، `WFD`، `R-FIB`، `L-FIB`.
ستون Meaning اختیاری است. بعد از تغییر فایل و آپلود دوباره، دکمهٔ Load را در برنامه بزنید.

## دانلود کتابخانهٔ اکسل

فایل `xlsx.full.min.js` را از آدرس زیر دانلود کنید و بدون تغییر نام کنار `index.html` بگذارید:

```
https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js
```

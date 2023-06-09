# Rast Mobile App

### Check The Live Website ➡️ [Live Website](https://rastmobileapp.netlify.app/)

## Açıklamalar

- Bu Projede ile Sosyal medya linki, adı ve açıklamalarını barındıran Datagrid uygulaması yapmak hedeflenmiştir.

## Projenin Oluşturulmasında izlenilen Adımlar

- Öncelikle bir navbar oluşturularak Belirli linklere ve sosyal medya url'lerine hızlı erişim sağlanmıştır.
- Datagrid tablosuna Sosyal medya linki, adı ve açıklamalarını eklemek için bir buton ve bu butona tıklandığında belirtilen girişlerin sağlanabilmesi için gerekli form yapısı oluşturulmuştur.
- Oluşturulan ve Tablo içeriğinde kullanılan field'ler 'socialMedia' key'i ile bir array içerisinde local storage'da saklanmıştır.
- Search bar ile local storage'de depolanan ve Tablo içeriğinde kullanılan field'ler filtrelenerek istetilen harf - kelimeye göre kullanıcıya gösterim sağlanmıştır.
- https://js.devexpress.com/Overview/DataGrid/ Kütüphanesinden Datagrid kullanılmış, verilerin kullanıcıya anlaşılır, filtrelenebilir ve sıralanabilir bir halde sunulması hedeflenmiştir.
- Datagrid altında kullanıcıyı yormamak için belirli satır sayısı ve birden fazla sayfa arasında gezinme için filtreleme yapılmıştır.
- Projenin tamamındaki kodlar anlaşılabilir olabilmesi için uygun isimlerde dosyalanarak component haline getirilmiştir.
- Yeni veri nesneleri için model yapısı kullanılmış, Karmaşık kod bloklarınız için yorumlar eklenmiştir.

### Visualization of the Website

![image](https://github.com/Sekunev/dataGridApp/blob/main/src/assest/Projectimage.png)

## Project Skeleton

```
Data Grid App (folder)
|
|----readme.md
|
├── public
│     └── index.html
├── src
│    ├── assest
│    │     └── Icon ve Logo'lar.
│    ├── components
│    │     ├── charts
│    │     │     ├── DataDridObje.jsx
│    │     │     └── DataDridObje.style.jsx
│    │     ├── modals
│    │     │     ├── YeniHesapEkle.jsx
│    │     │     └── YeniHesapEkle.style.jsx
│    │     ├── nav
│    │     │     ├── Navbar.jsx
│    │     │     └── Navbar.style.jsx
│    ├── pages
│    │     ├── RastMobil.jsx
│    │     └── RastMobil.style.jsx
│    ├── router
│    │     └── AppRouter.js
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
└── yarn.lock
```

### Used in this project

👉 ReactJS, bootstrap, devextreme, styled-components.

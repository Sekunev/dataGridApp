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

### Visualization of the Website

![image](https://github.com/Sekunev/movie-app/blob/main/Animation.gif)

## Project Skeleton

```
Movie App (folder)
|
|----readme.md
SOLUTION
├── public
│     └── index.html
├── src
│    ├── assest
│    │     ├── avatar.png
│    │     └── ToastMessage.jsx
│    ├── auth
│    │     └── firebase.js
│    ├── components
│    │     ├── footer
│    │     │     ├── footer.jsx
│    │     │     └── footer.css
│    │     ├── search.jsx
│    │     ├── MovieCard.js
│    │     ├── VideoSection.js
│    │     └── Navbar.js
│    ├── context
│    │     └── AuthContext.jsx
│    ├── pages
│    │     ├── Login.js
│    │     ├── Register.js
│    │     ├── Main.js
│    │     └── MovieDetail.js
│    ├── router
│    │     ├── PrivateRouter.js
│    │     └── Router.js
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
├── Animation.gif
├── .env
└── yarn.lock
```

### Used in this project

👉 I mastered ReactJS, firebase, Material UI, react-toastify, features in this project. You can see the visual representation of the website above.

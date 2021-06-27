
<p align="center">
  <img width="60%" src="./.github/letmeask-no-bkg.svg">
</p>
<p align="center">Respond to your audience in real time through live Q&A rooms</p>
<a href="https://an-letmeask.vercel.app"><img src="./.github/animation.gif"></a>
<h6 align="center"><b>Click on the image to visit the site</b></h6>

<br>
<p align="center">
  <a href="#dependencies"><img src="https://shields.io/badge/-🚧%20dependencies-ff5500"/></a>
  <a href="#install"><img src="https://shields.io/badge/-🚀%20install-5cff43"/></a>
  <a href="#recommendations"><img src="https://shields.io/badge/-👍%20recomendations-aaffff"/></a>
  <a href="#technology"><img src="https://shields.io/badge/-🛰️%20technology-4800d7"/></a>
  <a href="#features"><img src="https://shields.io/badge/-🛸%20features-ffff7f"/></a>
  <a href="#structure"><img src="https://shields.io/badge/🗃️%20project%20structure-ffff7f"/></a>
  <a href="#screenshot"><img src="https://shields.io/badge/-🖥️%20screenshot-ffffff"/></a>
  <a href="#prototyping"><img src="https://shields.io/badge/-🏎%20prototyping-ffffff"/></a>
  <br>
  <img alt="GitHub repo size" title="GitHub repo size" src="https://img.shields.io/github/repo-size/AntonioNarcilio/letmeask?color=50fa7b&labelColor=282a36&" />

  <a href="https://github.com/AntonioNarcilio/letmeask/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/AntonioNarcilio/letmeask?label=license&color=ff5555&labelColor=282a36" alt="licença"/>
  </a>

  <img alt="GitHub last commit" title="GitHub last commit" src="https://img.shields.io/github/last-commit/AntonioNarcilio/letmeask?&color=50fa7b&labelColor=282a36" />
  <br>

  <a href="https://www.linkedin.com/in/antonionarcilio/"  target="_blank">
  <img alt="linkedin" align="center" title="linkedin" src="https://img.shields.io/badge/Antonio%20Narcilio-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/antonionarcilio/" />
  </a>
  <br><br>
  <a href="./docs/README-PT_BR.md">Português Brasileiro 🇧🇷</a>
</p>


---

<br>
<h2 id="description"><b>📝 Description</b></h2>
<p align="justify">

</p>

---

<br>
<h2 id="dependencies"><b>🚧 Dependencies</b></h2>
<p align="justify">

</p>

---

<br>
<h2 id="structure"><b>🗃️ Project structure</b></h2>
The project is currently in the following structure.
<br/><br/>
<details>
<summary>
👈 Click to expand
</summary>

```
.
├── docs
│   └── README-PT_BR.md
├── public
│   ├── favicon.svg
│   └── index.html
├── src
│   ├── assets
│   │   ├── animations
│   │   │   └── 404-space-error.json
│   │   └── images
│   │       ├── answer.svg
│   │       ├── check.svg
│   │       ├── copy.svg
│   │       ├── delete.svg
│   │       ├── empty-questions.svg
│   │       ├── google-icon.svg
│   │       ├── illustration.svg
│   │       ├── like.svg
│   │       ├── logo-dark.svg
│   │       ├── logo-white.svg
│   │       ├── moon.svg
│   │       ├── profile.svg
│   │       └── sun.svg
│   ├── components
│   │   ├── Button
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── CustomToast
│   │   │   └── index.tsx
│   │   ├── Header
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── Modal
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── ProfileDropdown
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── Question
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   └── RoomCode
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── contexts
│   │   ├── AuthContext.tsx
│   │   ├── ModalYesNoContext.tsx
│   │   └── ThemeSwitchContext.tsx
│   ├── hooks
│   │   ├── useAuth.ts
│   │   ├── useRoom.ts
│   │   └── useTheme.ts
│   ├── pages
│   │   ├── Error
│   │   │   └── 404.tsx
│   │   ├── Others
│   │   │   └── Contact.tsx
│   │   ├── Room
│   │   │   ├── AdminRoom.tsx
│   │   │   ├── NewRoom.tsx
│   │   │   └── Room.tsx
│   │   └── Home.tsx
│   ├── services
│   │   └── firebase.ts
│   ├── styles
│   │   ├── pages
│   │   │   ├── auth.ts
│   │   │   ├── contact.ts
│   │   │   ├── notfound.ts
│   │   │   └── room.ts
│   │   ├── themes
│   │   │   ├── dracula.ts
│   │   │   └── nlw.ts
│   │   └── global.ts
│   ├── @types
│   │   ├── auth-context.d.ts
│   │   ├── button.d.ts
│   │   ├── firebase-questions.d.ts
│   │   ├── header.d.ts
│   │   ├── profile-dropdown.d.ts
│   │   ├── question.d.ts
│   │   ├── room-code.d.ts
│   │   ├── room.d.ts
│   │   ├── styled.d.ts
│   │   └── theme-switch-context.d.ts
│   ├── utils
│   │   └── usePersistedState.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── react-app-env.d.ts
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

</details>

---

<br>
<h2 id="recommendations"><b>👍 Recommendations</b></h2>

---

<br>
<h2 id="features"><b>🛸 Features</b></h2>

---

<br>
<h2 id="technology"><b>🛰️ Technology</b></h2>

---

<br>
<h2 id="screenshot"><b>🖥️ Screenshot</b></h2>

---

<br>
<h2 id="prototyping"><b>🏎 Prototyping</b></h2>

---

<br>
<h2 id="install"><b>🚀 Install</b></h2>

---

<br>
<h2 id="license"><b>📜 License</b></h2>

This project is under license [MIT](./LICENSE)

---

<br><br>

<p align="center">
created by <a href="https://linkedin.com/in/antonionarcilio">@antonionarcilio</a>
</p>






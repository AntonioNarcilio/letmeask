
<p align="center">
  <img width="60%" src="./.github/letmeask-no-bkg.svg">
</p>
<p align="center">Respond to your audience in real time through live Q&A rooms</p>
<a href="https://an-letmeask.vercel.app"><img src="./.github/animation.gif"></a>
<h6 align="center"><b>click on the image ☝️ to visit the site</b></h6>

<br>
<p align="center">
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

<br>
<h2 id="features"><b>🛸 Features</b></h2>


<br>
<h2 id="technology"><b>🛰️ Tecnologias</b></h2>
<p align="justify">
This project was developed using the following technologies 👇.</p>
<br/>
<a href="https://reactjs.org">
<img alt="reactjs" title="reactjs" src="https://img.shields.io/static/v1?label=React&message=Library%20javascript&style=social&logo=React&logoColor=0088CC" />
</a>

<br/>

<a href="https://firebase.google.com/">
<img alt="Firebase" title="Firebase" src="https://img.shields.io/static/v1?label=Firebase&message=Development%20platform&style=social&logo=firebase&logoColor=FFCA28" />
</a>

<br/>

<a href="https://www.typescriptlang.org/download">
<img alt="typescript" title="typescript" src="https://img.shields.io/static/v1?label=TypeScript&message=Typed%20javaScript&style=social&logo=typescript&logoColor=27609E" />
</a>

<br/>

<a href="https://an-letmeask.vercel.app">
<img alt="vercel" title="vercel" src="https://img.shields.io/static/v1?label=vercel&message=Deploy%20&&style=social&logo=Vercel" />
</a>

<br/>

<a href="https://styled-components.com">
<img alt="styled-components" title="styled-components" src="https://img.shields.io/static/v1?label=Styled%20Components&message=Library%20CSS%20in%20JS&&style=social&logo=styled-components" />
</a>

<br>

<a href="https://www.figma.com/file/cniET9Xo3ZIwoqJ4PWcovu/Move.it-1.0?node-id=160%3A2761">
<img alt="figma" title="figma" src="https://img.shields.io/static/v1?label=Figma&message=Vector%20graphic%20editor%20and&20prototyping&style=social&logo=Figma&logoColor=F24E1E" />
</a>

<br>

<a href="https://www.framer.com/motion/">
<img alt="framer-motion" title="framer-motion" src="https://img.shields.io/static/v1?label=Framer-Motion&message=React%20animation%20library&style=social&logo=Framer&logoColor=0055FF" />
</a>

<br>

<a href="https://lottiefiles.com">
<img alt="Lottie Files" title="Lottie Files" src="https://img.shields.io/static/v1?label=Lottie%20Files&message=Animations&style=social&logo=&logoColor=F24E1E" />
</a>

<br>
<h2 id="screenshot"><b>🖥️ Screenshot</b></h2>
<p align="justify">
Below are some screenshots that demonstrate certain features of the `letmeask` web application.
</p>


<table>
  <tr align="center">
    <td><h5>Authentication and room creation</h5></td>
    <td><h5>Accessing a room</h5></td>
  </tr>
  <tr>
    <td><img src="./.github/auth-and-new_room.gif"></td>
    <td><img src="./.github/enter-in-the-room.gif"></td>
  </tr>
  <tr align="center">
    <td><h5>Themes dark / light</h5></td>
    <td><h5>Admin room</h5></td>
  </tr>
  <tr>
    <td><img src="./.github/themes.gif"></td>
    <td><img src="./.github/admin-room.gif"></td>
  </tr>
  <tr align="center">
    <td><h5>Sending a question</h5></td>
    <td><h5>Authentication within the room</h5></td>
  </tr>
  <tr>
    <td><img src="./.github/questions.gif"></td>
    <td><img src="./.github/login-in-the-room.gif"></td>
  </tr>
</table>

<br>
<h2 id="prototyping"><b>🏎 Prototipagem</b></h2>
<p align="justify">
This project was developed "based" on the prototype defined below, found in figma.</p><br>
<a href="https://www.figma.com/file/0OpBWgGPkoUxdc5AzPcifs/NLW-06-Letmeask?node-id=0%3A1"><img src="./.github/letmeask-prototype.png" /></a>
<h6 align="center"><b>click on the image ☝️ to see the prototype in figma.</b></h6>

<br>
<h2 id="license"><b>📜 License</b></h2>

This project is under license [MIT](./LICENSE)

---

<br><br>

<p align="center">
created by <a href="https://linkedin.com/in/antonionarcilio">@antonionarcilio</a>
</p>






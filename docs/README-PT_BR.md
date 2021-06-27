
<p align="center">
 <img width="50%" src="../.github/letmeask-no-bkg.svg">
</p>
<p align="center">Tire as dúvidas de suas audiências em tempo-real!</p>
<a href="https://an-letmeask.vercel.app"><img src="../.github/animation.gif"></a>
<h6 align="center"><b>clique na imagem ☝️ para visitar o site.</b></h6>

<br/>
<p align="center">
 <a href="#technology"><img src="https://shields.io/badge/-🛰️%20tecnologias-4800d7"/></a>
 <a href="#features"><img src="https://shields.io/badge/-🛸%20funcionalidades-ffff7f"/></a>
 <a href="#structure"><img src="https://shields.io/badge/🗃️%20estrutura%20do%20projeto-ffff7f"/></a>
 <a href="#screenshot"><img src="https://shields.io/badge/-🖥️%20captura%20de%20telas-ffffff"/></a>
 <a href="#prototyping"><img src="https://shields.io/badge/-🏎%20prototipagem-ffffff"/></a>
 <br>
 <img alt="GitHub repo size" title="GitHub repo size" src="https://img.shields.io/github/repo-size/AntonioNarcilio/letmeask?color=50fa7b&labelColor=282a36&" />

 <a href="https://github.com/AntonioNarcilio/letmeask/blob/master/LICENSE">
   <img src="https://img.shields.io/github/license/AntonioNarcilio/letmeask?label=license&color=ff5555&labelColor=282a36" alt="licença"/>
 </a>

 <img alt="GitHub last commit" title="GitHub last commit" src="https://img.shields.io/github/last-commit/AntonioNarcilio/letmeask?&color=50fa7b&labelColor=282a36" />
 <br/>
 <a href="https://www.linkedin.com/in/antonionarcilio/"  target="_blank">
 <img alt="linkedin" align="center" title="linkedin" src="https://img.shields.io/badge/Antonio%20Narcilio-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/antonionarcilio/" />
 </a>
 <br><br>
</p>

<br>
<h2 id="description"><b>📝 Descrição</b></h2>
<p align="justify">
Projeto desenvolvido durante a semana NLW (Next Level Week) #06 da Rocketseat, Aplicação que tem o intuito de tirar as dúvidas de suas audiências em tempo-real por meio de salas de perguntas e respostas (Q&A).
</p>

<br>
<h2 id="structure"><b>🗃️ Estrutura do projeto</b></h2>
<p align="justify">
O projeto atualmente se encontra na seguinte estrutura definida abaixo 👇.
</p>
<br/>
<details>
<summary>
👈 Clique para expandir
</summary>

```text-plain
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
<h2 id="features"><b>🛸 Funcionalidades</b></h2>
<p align="justify">
Quais as funcionalidades que a aplicação `letmeask` possui 🤔 atualmente?
</p>

- [x] Opção de login por meio da conta do google;
- [x] Opção de escolha entre temas dia 🌕 / noite 🌑;
- [x] Opção de criação de sala;
- [x] Opção de adentrar em uma sala existem por meio do código da sala **(usuário não precisa estar logado)**;
- [x] Opção de copiar o código da sala;
- [x] Opção de adicionar perguntas **(apenas para usuário comum e precisa estar logado)**;
- [x] Deixar um gostei em uma pergunta **(apenas usuário comum e precisa estar logado)**;
- [x] Opção de destacar pergunta(s) **(apenas o administrador da sala tem esta opção)**;
- [x] Opção de marcação de pergunta(s) como respondida **(apenas o administrador da sala tem esta opção)**;
- [x] Opção de remoção de pergunta(s) **(apenas o administrador da sala tem esta opção)**;
- [x] Opção de fechar a sala **(apenas o administrador tem esta opção)**;

<br>
<h2 id="technology"><b>🛰️ Tecnologias</b></h2>
<p align="justify">
Este projeto foi desenvolvido utilizando as seguintes tecnologias 👇.</p>
<br/>
<a href="https://reactjs.org">
<img alt="reactjs" title="reactjs" src="https://img.shields.io/static/v1?label=React&message=Biblioteca%20javascript&style=social&logo=React&logoColor=0088CC" />
</a>

<br/>

<a href="https://firebase.google.com/">
<img alt="Firebase" title="Firebase" src="https://img.shields.io/static/v1?label=Firebase&message=Plataforma%20de%20desenvolvimento&style=social&logo=firebase&logoColor=FFCA28" />
</a>

<br/>

<a href="https://www.typescriptlang.org/download">
<img alt="typescript" title="typescript" src="https://img.shields.io/static/v1?label=TypeScript&message=Tipagem%20no%20JavaScript&style=social&logo=typescript&logoColor=27609E" />
</a>

<br/>

<a href="https://an-letmeask.vercel.app">
<img alt="vercel" title="vercel" src="https://img.shields.io/static/v1?label=vercel&message=Deploy%20/%20Hospedagem&&style=social&logo=Vercel" />
</a>

<br/>

<a href="https://styled-components.com">
<img alt="styled-components" title="styled-components" src="https://img.shields.io/static/v1?label=Styled%20Components&message=Biblioteca%20CSS%20dentro%20do%20JS&&style=social&logo=styled-components" />
</a>

<br>

<a href="https://www.figma.com/file/cniET9Xo3ZIwoqJ4PWcovu/Move.it-1.0?node-id=160%3A2761">
<img alt="figma" title="figma" src="https://img.shields.io/static/v1?label=Figma&message=Prototipo%20do%20projeto&style=social&logo=Figma&logoColor=F24E1E" />
</a>

<br>

<a href="https://www.framer.com/motion/">
<img alt="framer-motion" title="framer-motion" src="https://img.shields.io/static/v1?label=Framer-Motion&message=Biblioteca%20de%20animação%20para%20React&style=social&logo=Framer&logoColor=0055FF" />
</a>

<br>

<a href="https://lottiefiles.com">
<img alt="Lottie Files" title="Lottie Files" src="https://img.shields.io/static/v1?label=Lottie%20Files&message=Animações&style=social&logo=&logoColor=F24E1E" />
</a>

<br>
<h2 id="screenshot"><b>🖥️ Captura de telas</b></h2>
<p align="justify">
Mais abaixo encontra-se algumas capturas de telas demostrando certas funcionalidades da aplicação.
</p>

<table>
  <tr align="center">
    <td><h5>Autenticação e criação de sala</h5></td>
    <td><h5>Entrando em uma sala</h5></td>
  </tr>
  <tr>
    <td><img src="../.github/auth-and-new_room.gif"></td>
    <td><img src="../.github/enter-in-the-room.gif"></td>
  </tr>
  <tr align="center">
    <td><h5>Temas escuro (dracula) / claro (nlw)</h5></td>
    <td><h5>Sala do administrador</h5></td>
  </tr>
  <tr>
    <td><img src="../.github/themes.gif"></td>
    <td><img src="../.github/admin-room.gif"></td>
  </tr>
  <tr align="center">
    <td><h5>Mandando uma pergunta</h5></td>
    <td><h5>Autenticação dentro da sala</h5></td>
  </tr>
  <tr>
    <td><img src="../.github/questions.gif"></td>
    <td><img src="../.github/login-in-the-room.gif"></td>
  </tr>
</table>

<br>
<h2 id="prototyping"><b>🏎 Prototipagem</b></h2>
<p align="justify">
Este projeto foi desenvolvido se "baseando" no protótipo definido abaixo, encontrado no figma.</p><br>
<a href="https://www.figma.com/file/0OpBWgGPkoUxdc5AzPcifs/NLW-06-Letmeask?node-id=0%3A1"><img src="../.github/letmeask-prototype.png" /></a>
<h6 align="center"><b>clique na imagem ☝️ para visualizar o protótipo no figma.</b></h6>


<br>
<h2 id="license"><b>📜 Licença</b></h2>

Este projeto está sob a licença [MIT](./LICENSE)

<br><br>

<p align="center">
criado por <a href="https://linkedin.com/in/antonionarcilio">@antonionarcilio</a>
</p>


<script>
    import {Navbar, NavBrand, NavHamburger, NavUl, NavLi, Card, DarkMode} from 'flowbite-svelte';
</script>

<svelte:head>
  <title>❤️ Arif Zakuan</title>
  <meta property="og:title" content="❤️ Arif Zakuan" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</svelte:head>

<div class="relative">
<Navbar fluid="true" navClass="z-40 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b " color='light' let:hidden let:toggle>
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Zakuan
      </span>
    </NavBrand>
    
    <NavHamburger on:click={toggle} />
    <NavUl {hidden} activeClass="text-red" class="content-center">
      <NavLi href="#about" class="font-medium dark:text-white">About me</NavLi>
      <NavLi href="#projects" class="font-medium dark:text-white">Projects</NavLi>
      <NavLi href="#contact" class="font-medium dark:text-white">Contact</NavLi>
    </NavUl>
    <div class="rounded-lg w-auto h-auto bg-slate-100 dark:bg-slate-700">
      <DarkMode class="text-sm hover:bg-transparent"/>
    </div>
  </Navbar>
  
<div class="py-32 text-gray-900 ">
<h1 class="lg:text-5xl text-3xl text-center font-sans py-5">Arif Zakuan</h1>
<p class="text-2xl text-center font-sans px-10"> I'm an aspiring software developer building stuff for mobile and the web</p>
</div>
<div class="" id="about">
    <div class=" bg-slate-100 dark:bg-gray-800 p-20 lg:px-36 space-y-5 lg:flex max-sm:px-8">
      <img src="assets/profile-pic.jpeg" alt="" class="lg:w-80 lg:h-h-80"/>
      <div>
        <h1 class="text-center lg:text-left font-sans text-gray-900 text-2xl font-bold py-5 lg:px-20">A bit about me!</h1>
        <p class="lg:leading-relaxed  lg:text-2xl lg:px-20 font-sans text-gray-800 text-justify">Hello, I'm Arif Zakuan. I'm currently a final year student majoring in computer science
            at Universiti Putra Malaysia. Throughout most of my education, I've developed a variety of projects for my coursework. Among them, mobile apps, cryptographic algorithms, APIs, and chatbots. I'm an enthusiast for new technologies and love learning about them to build amazing software systems and applications. 
            I'm also currently interested in finding new opportunities to shape my career. 👉 <a href="cv-zakuan.pdf">cv</a></p>
          </div>
    </div>
    <div class=" bg-white p-10 lg:px-52 space-y-5" id="profile">
        <div class="flex-row space-y-10">
          <div class="flex space-x-5 justify-center">
            <img src="assets/dart.png" class="w-10 h-10 lg:w-24 lg:h-24" alt=""/>
            <img src="assets/python.png" class="w-10 h-10 lg:w-24 lg:h-24" alt=""/>
            <img src="assets/js.png" class="w-10 h-10 lg:w-24 lg:h-24" alt=""/>
            <img src="assets/php.png" class="w-14 h-10 lg:w-32 lg:h-24" alt=""/>
            <img src="assets/kotlin.png" class="w-10 h-10 lg:w-24 lg:h-24" alt=""/>
          </div>
          <div class="flex space-x-5  justify-center">
            <!-- svelte-ignore a11y-missing-attribute -->
            <img src="assets/flutter.png" class="w-10 h-10 lg:w-24 lg:h-24" alt=""/>
            <img src="assets/react.png" class="w-10 h-10 lg:w-24 lg:h-24" alt=""/>
            
            <img src="assets/laravel.png" class="w-10 h-10 lg:w-24 lg:h-24" alt=""/>
            <img src="assets/svelte.png" class="w-15 h-10 lg:w-24 lg:h-28" alt=""/>
        </div>
        
     </div>
    </div>
    <div id="projects" class=" bg-slate-100 p-10 lg:px-36 space-y-5">
      <h1 class="text-center font-sans text-gray-900 text-2xl font-bold">Projects & Work</h1>

      <div class="lg:flex justify-center lg:space-x-10 space-y-8 lg:space-y-0">
      <Card href="https://github.com/tehcanai/SoalUndi" img="assets/undi.png">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SoalUndi</h5>
        <p class="font-bold text-gray-800 dark:text-gray-800 leading-normal text-left py-2">
         Python · Tensorflow · Postgresql · Grafana
        <p class="font-normal text-gray-700 dark:text-gray-700 leading-normal text-left ">
          SoalUndi is a telegram chatbot that is able to answer questions about the Malaysian election. It was developed for my bachelor's thesis project. Features implemented include text classification, question answering, and performance monitoring.
        </p>
      </Card>
      <Card href="https://github.com/tehcanai/SimpleLogin-App" img="assets/login.png" >
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">SimpleLogin</h5>
        <p class="font-bold text-gray-800 leading-normal text-left py-2 dark:text-white ">
         Flutter · Laravel · Postgresql
        <p class="font-normal text-gray-700 leading-normal text-left dark:text-white  ">
          SimpleLogin is a simple login app that uses Laravel as the backend. The app allows users to register and authenticates users via Passport when logging in.
        </p>
      </Card>
    </div>
  </div>
  <div id="contact" class="bg-white text-center px-10">
    <div class="font-sans text-gray-900 font-bold lg:text-2xl py-5">
      <span >reach me here: <a class="hover:text-red-500" href = "mailto:arif.zakuan@gmail.com">arif.zakuan@gmail.com</a> or via my socials below:</span>
    </div>
    <div class="font-sans text-gray-900 font-bold lg:text-2xl py-5 space-x-5">
    <span><a  class="hover:text-red-500" href="https://www.linkedin.com/in/arif-zakuan-99460820b/">Linkedin</a></span>
    <span ><a class="hover:text-red-500" href="https://www.instagram.com/ar.ifzk/">Instagram</a></span>
    <span ><a class="hover:text-red-500" href="https://github.com/tehcanai">Github</a></span>
  </div>
  <p class="lg:text-right font-thin text-sm text-gray-500 py-2">© 2023 Arif Zakuan. Built with svelte and tailwind</p>
  </div>
</div>
</div>




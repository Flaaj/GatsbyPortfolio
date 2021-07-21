---
projects_page_title: My projects
projects_page_description: Below I present some of the things I built to let you
  know about the level of my current abilities. These projects are made purely
  for the purpose of training.
project_list:
  - name: Calendar
    description: This is an app written in React. It's purpose is to let
      users schedule events or meetings, called 'reservations' in the app. You
      can add reservations, edit them, or remove. If more than one person is
      using the app, there is an option to quickly send messages that everybody
      can read. The app also checks for closest free teems in or closest
      upcoming reservations, on which you can doubleclick, or tap in mobile
      version, and quickly move into the view of clicked reservation, or create
      a new one if you click on free term. In the original app there is an
      authentication and login screen with additional tab for personal settings
      in the sidebar, but I stripped them off from the portfolio version of the
      app for the sake of simplicity of the user that just wants to quickly look
      into the app
    link: https://flaaj-calendar.netlify.app/
    github: https://github.com/flaaj/calendar
    technologies: JavaScript, React, Redux, Sass, Firebase
    thumbnail: /calendar.png
  - name: Watch Tuna
    description: This is Watch Tuna, a web app that helps watch owners with
      no professional tools to tune their watches or at least determine how much
      their watches miss the actual time. It uses microphone to record the
      soundwave of balance wheel, then seeks for peaks in the soundwave,
      calculates frequency of ticking as accurately as possible, then compares
      it to actual required frequency of a watch and calculates how many seconds
      per day will the watch lose or gain.
    thumbnail: /watchtuna.png
    link: https://watch-tuna.web.app/tune
    github: https://github.com/flaaj/watch-tuna-react
    technologies: JavaScript, React, Sass, Firebase, sound wave filtering, peak
      finding algorithm
  - name: Image search app
    thumbnail: /imagesearch.png
    description: This is the applet made while learning Angular, without
      following any tutorial, using just offical Angular documentation and Stack
      Overflow. I used Unsplash api to search for images, get the total amount
      of pages with the search results, display clickable related searches and
      display images in way that the next picture is always placed in the
      shortest of 3 columns. Although It wasn't necessary here, because the app
      is small and uncomplicated, I used Ngrx store for storing image addresses
      and the informations about last query and amount of pages, for the purpose
      of getting to know how to use Angular store.
    technologies: JavaScript, Angular, Ngrx, sass, interacting with REST API
    github: https://github.com/Flaaj/AngularImageSearch
    link: https://flaaj-angularimagesearch.netlify.app/
  - name: Best Shop
    thumbnail: /bestshop.png
    description: A responsive web page written using HTML, Sass for styling
      and a little JavaScript. The page was recreated based on AdobeXD project
      with almost pixel-perfect precision"
    github: https://github.com/flaaj/bestshop
    link: https://flaaj-bestshop.netlify.app/
    technologies: HTML, Sass, Responsive Web Design, JavaScript
  - name: Pathfinder
    thumbnail: /pathfinder.png
    description: A mini-game, where you can draw and remove walls on the
      grid using your mouse to create a labirynth. Then, a demonstration of
      breadth first search alrogithm in work is displayed and using this
      algorithm, the shortest path between entrance (top left corner) and exit
      (bottom right corner) is found. The elements are displayed using CSS Grid
    github: https://github.com/flaaj/pathfinder
    link: https://flaaj-pathfinder.netlify.app
    technologies: HTML, CSS, CSS Grid, JavaScript (ES6), Depth first search algorithm
  - name: Tetris
    thumbnail: /tetris.png
    description: A simple tetris game written in ES6, using canvas to
      display the blocks. The game's little 'engine' was written by myself
    technologies: HTML Canvas, Javascript
    github: https://github.com/flaaj/tetris
    link: https://flaaj-tetris.netlify.app/
---

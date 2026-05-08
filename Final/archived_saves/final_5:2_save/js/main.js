


//HOME INTRO
    //wait for content to load
    document.addEventListener("DOMContentLoaded", () => {


      //fade-in content on load
      gsap.from('body', 0.5, {opacity: 0})

      //assigning work and about buttons to variables
      const work_btn_home = document.getElementById('work_btn_home');
      const abt_btn_home = document.getElementById('abt_btn_home');

      //verifying work_btn_home exists:
      if (!work_btn_home) {
        return;
      } else {

      //slide the work and about buttons in from off-screen
      gsap.from(work_btn_home, 0.5, {left: -500, delay: 0.2})
      gsap.from(abt_btn_home, 0.5, {right: -500, delay: 0.2})

      // //assigning data-scrollpos to work section
      // work_btn_home.setAttribute('data-scrollpos', document.querySelector('main').getClientRects()[0].top);

      // work_btn_home.addEventListener('click', function(){
      //   //pull out the number from each data attribute
      //   const myScrollPos = this.getAttribute('data-scrollpos');
      //   console.log('POSITION', myScrollPos);

      //   //scroll to myScrollPos using gsap
      //   gsap.to(window, 1, {scrollTo: myScrollPos});
      // })




   

      } //end if/else (!work_btn_home)
    })//end DOMContentLoaded





//WORK PAGE TABS
    document.addEventListener('DOMContentLoaded', function(){

    //by default, intro1 should be up
    show_intro1();

    // assigning 'tab' articles to variables
        var tab1 = document.getElementById('tab1');
        var tab2 = document.getElementById('tab2');
        var tab3 = document.getElementById('tab3');
        var tab4 = document.getElementById('tab4');
        var tab5 = document.getElementById('tab5');
    
      //only run if the tabs exist on the html
      if (!tab1){
        return;
      } else {

    // there's definitely a more efficient way to do this
    // when tab is hovered over, activates corresponding funct
      tab1.addEventListener('mouseover',show_intro1);
      tab2.addEventListener('mouseover',show_intro2);
      tab3.addEventListener('mouseover',show_intro3);
      tab4.addEventListener('mouseover',show_intro4);
      tab5.addEventListener('mouseover',show_intro5);
      }})

      function show_intro1(){
        // removing any previous show
        if (document.querySelector(".show")){
            var hasShow = document.querySelector(".show");
            hasShow.classList.remove('show');
        } else {
          return;
        }
        // assigning 'intro' article to variable
        var intro = document.getElementById('intro1');
        // showing article
        intro.classList.add('show');
      }

      function show_intro2(){
        // removing any previous show
        if (document.querySelector(".show")){
            var hasShow = document.querySelector(".show");
            hasShow.classList.remove('show');
        } else {
          return;
        }
        // assigning 'intro' article to variable
        var intro = document.getElementById('intro2');
        // showing article
        intro.classList.add('show');
      }

      function show_intro3(){
        // removing any previous show
        if (document.querySelector(".show")){
            var hasShow = document.querySelector(".show");
            hasShow.classList.remove('show');
        } else {
          return;
        }
        // assigning 'intro' article to variable
        var intro = document.getElementById('intro3');
        // showing article
        intro.classList.add('show');
      }

      function show_intro4(){
        // removing any previous show
        if (document.querySelector(".show")){
            var hasShow = document.querySelector(".show");
            hasShow.classList.remove('show');
        } else {
          return;
        }
        // assigning 'intro' article to variable
        var intro = document.getElementById('intro4');
        // showing article
        intro.classList.add('show');
      }

      function show_intro5(){
        // removing any previous show
        if (document.querySelector(".show")){
            var hasShow = document.querySelector(".show");
            hasShow.classList.remove('show');
        } else {
          return;
        }
        // assigning 'intro' article to variable
        var intro = document.getElementById('intro5');
        // showing article
        intro.classList.add('show');
      }
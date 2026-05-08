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
      gsap.from(work_btn_home, 0.5, {left: -1000, delay: 1})
      gsap.from(abt_btn_home, 0.5, {right: -1000, delay: 1})
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


    // assign tab_li to variables
    var tab1_li = document.getElementById('tab1_li');
    var tab2_li = document.getElementById('tab2_li');
    var tab3_li = document.getElementById('tab3_li');
    var tab4_li = document.getElementById('tab4_li');
    var tab5_li = document.getElementById('tab5_li');

    //only run if the tabs exist on the html
    if (!tab1 || !tab1_li){
        return;
    } else {

    // when tab is hovered over, activates corresponding funct
    tab1.addEventListener('mouseover',show_intro1);
    tab2.addEventListener('mouseover',show_intro2);
    tab3.addEventListener('mouseover',show_intro3);
    tab4.addEventListener('mouseover',show_intro4);
    tab5.addEventListener('mouseover',show_intro5);

    // when tab is hovered over, also changes width of corresponding tab
    // when mouse leaves, tab returns to normal width
    // TAB 1
    tab1_li.addEventListener('mouseover', function(){
      gsap.to(tab1_li, 0.000001, {width: "100%"}) // removes clipping that happens on first mouseover
      gsap.to(tab1_li, 0.5, {width: "120%"});
    })

    tab1_li.addEventListener('mouseleave',function(){
      gsap.to(tab1_li, 0.5, {width: "100%"})
    })

    // TAB 2
    tab2_li.addEventListener('mouseover', function(){
      gsap.to(tab2_li, 0.000001, {width: "100%"}) // removes clipping that happens on first mouseover
      gsap.to(tab2_li, 0.5, {width: "120%"});
    })

    tab2_li.addEventListener('mouseleave',function(){
      gsap.to(tab2_li, 0.5, {width: "100%"})
    })

    // TAB 3
    tab3_li.addEventListener('mouseover', function(){
      gsap.to(tab3_li, 0.000001, {width: "100%"}) // removes clipping that happens on first mouseover
      gsap.to(tab3_li, 0.5, {width: "125%"});
    })

    tab3_li.addEventListener('mouseleave',function(){
      gsap.to(tab3_li, 0.5, {width: "100%"})
    })
    
    // TAB 4
    tab4_li.addEventListener('mouseover', function(){
      gsap.to(tab4_li, 0.000001, {width: "100%"}) // removes clipping that happens on first mouseover
      gsap.to(tab4_li, 0.5, {width: "125%"});
    })

    tab4_li.addEventListener('mouseleave',function(){
      gsap.to(tab4_li, 0.5, {width: "100%"})
    })

    // TAB 5
    tab5_li.addEventListener('mouseover', function(){
      gsap.to(tab5_li, 0.000001, {width: "100%"}) // removes clipping that happens on first mouseover
      gsap.to(tab5_li, 0.5, {width: "125%"});
    })

    tab5_li.addEventListener('mouseleave',function(){
      gsap.to(tab5_li, 0.5, {width: "100%"})
    })
  }}) //end if/else !tab


  // functions when mouseover tabs
  function show_intro1(){
      // SHOW ARTICLE
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
    // SHOW ARTICLE
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
    // SHOW ARTICLE
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
    // SHOW ARTICLE
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
    // SHOW ARTICLE
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
    
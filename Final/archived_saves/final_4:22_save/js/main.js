    document.addEventListener('DOMContentLoaded', function(){

    //by default, intro1 should be up
    show_intro1();

    // assigning 'tab' articles to variables
        var tab1 = document.getElementById('tab1');
        var tab2 = document.getElementById('tab2');
        var tab3 = document.getElementById('tab3');
        var tab4 = document.getElementById('tab4');
        var tab5 = document.getElementById('tab5');
    

    // there's definitely a more efficient way to do this
    // when tab is hovered over, activates corresponding funct
      tab1.addEventListener('mouseover',show_intro1);
      tab2.addEventListener('mouseover',show_intro2);
      tab3.addEventListener('mouseover',show_intro3);
      tab4.addEventListener('mouseover',show_intro4);
      tab5.addEventListener('mouseover',show_intro5);
      })

      function show_intro1(){
        // removing any previous show
        if (document.querySelector(".show")){
            var hasShow = document.querySelector(".show");
            hasShow.classList.remove('show');
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
        }
        // assigning 'intro' article to variable
        var intro = document.getElementById('intro5');
        // showing article
        intro.classList.add('show');
      }

    // function show_intro1(){
    //     var intro1 = document.getElementById('intro1');

    //     intro1.classList.add('show');
    // }

    // function show_intro2(){
    //     var intro2 = document.getElementById('intro2');
    //     intro2.classList.add('show');


    // }

    // function show_intro3(){
    //     intro3.classList.add('show');
    // }

    // function show_intro4(){
    //     intro4.classList.add('show');
    // }

    // function show_intro5(){
    //     intro5.classList.add('show');
    // }

    // function hidePrevShow(){
    //     intro1.classList.remove('show');
    //     intro2.classList.remove('show');
    //     intro3.classList.remove('show');
    //     intro4.classList.remove('show');
    //     intro5.classList.remove('show');
    // }
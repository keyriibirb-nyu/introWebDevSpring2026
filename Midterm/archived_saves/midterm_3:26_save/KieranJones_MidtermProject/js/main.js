   // nav toggle
    document.addEventListener('DOMContentLoaded', function(){
         var hamburger = document.getElementById('mobile_menu')
         hamburger.addEventListener('click',toggleShow_nav)
      })

    function toggleShow_nav(){
        var menu = document.getElementById('mobile_nav_dropdown') 
        menu.classList.toggle('show');
      }

    // a1 toggle
    document.addEventListener('DOMContentLoaded', function(){
         var a1 = document.getElementById('aside_arrow_1')
         a1.addEventListener('click',toggleShow_a1)
      })

    function toggleShow_a1(){
        var menu = document.getElementById('aside_menu_1') 
        menu.classList.toggle('show');
     }

    // a2 toggle
    document.addEventListener('DOMContentLoaded', function(){
         var a2 = document.getElementById('aside_arrow_2')
         a2.addEventListener('click',toggleShow_a2)
      })

    function toggleShow_a2(){
        var menu = document.getElementById('aside_menu_2') 
        menu.classList.toggle('show');
     }

    // my attempt at making these toggles into one function
    // to no avail

    //   document.addEventListener('DOMContentLoaded', function(){
    //      var arrow1 = document.getElementById('aside_arrow_1')
    //      var arrow2 = document.getElementById('aside_arrow_2')
         
    //      arrow1.addEventListener('click',toggleShow(aside_arrow_1));
    //      arrow2.addEventListener('click',toggleShow(aside_arrow_2));      
    //     })

    // function toggleShow(input_id){

    //     if (input_id == aside_arrow_1){
    //         var menu = document.getElementById('aside_menu_1')
    //         menu.classList.toggle('show');
    //     } else if (input_id == aside_arrow_2){
    //         var menu = document.getElementById('aside_menu_2')
    //         menu.classList.toggle('show');
    //     }
    //     // } else if( input_id)
    // }
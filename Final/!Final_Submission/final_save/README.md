*** goals after presentation: ***

1. implement more gsap -- when hoving over tabs on work page, tabs will extend out.

done:
- change tabs:hover -- changed from color to z-index change
- gsap: added event listeners for when user hovers over tab, will change tab width. when mouse leaves, returns back to normal width
- gsap width change is in-frame for 768-1440px: chagne from color to z-index makes the transition a lot smoother and more pleasant


2. media queries -- make project pages look nicer in 768 and 1024px

done:
- changed gsap.from x to work with screens from 768-1440
- changed padding on the top of project_wrapper class -- so there is an appropriate amt of space between navbar at top and project header
- changed width of contact form, made two modules. modules change to flex-dir: column when width is 768px


3. fill in more content in project pages, about page

about page:
- were previously blank, added placeholder content
- added contact form, currently unconnected to formspree but should be pretty easy to set up.

project pages:
- were previously blank, added placeholder content
- filled a little bit of project 2

*** ambitious goals: ***

1. js: change colors of tabs based on which is being hovered over, cascading color to other tabs based on proximity to the active tab
- didn't get to this one. a good thing to work on in the future, though.

# Academic Asthetics Organizer 

## FEATURES 
-Switching Content between semester within the same page 

-Aesthetics dropdown-menu using html , css and javascript 

-Responsive design for all device using css flex box, grid and media queries 

## EXTRA 
-all anchor tags are opened in new tab except width class = "current-tab" 

-javascript functions are run within window.onload 



window.onload = () => { 

functionA();

functionB();

openInNewTab(); 

} 




function openInNewTab() { 

  const anchors = document.querySelectorAll('anchor:not(.current-tab)'); 

  anchors.forEach((anchor)=> { 

    anchor.setAttribute('target','_blank'); 
    
  });

}

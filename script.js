//drop down menu 

document.addEventListener('click', (event) => {
    const isDropdown = event.target.matches('[data-dropdown-button]');
    const currentDropdown = event.target.closest('[data-dropdown]');// return null if outside of dropdown


    if (isDropdown) {
        if (currentDropdown) {
            currentDropdown.classList.toggle('active');
        }
    }

    // let the dropdown-menu stay on click 

    if (!isDropdown && currentDropdown != null) {
        return
    }

    document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
        if (dropdown === currentDropdown) {
            return
        }

        dropdown.classList.remove('active');
        
    })
});


// set the clock 

window.onload = () =>{   
    
    setInterval(displayTimeAndDate, 1000);
    openLinkInNewTab(); 

}


// functions 
var dateandtime = new Date(); // taking outside to access everywhere
var day = dateandtime.getDay();


function displayTimeAndDate() 
{

    var dateandtime = new Date();
 

    var time = dateandtime.toLocaleTimeString(undefined, 
    {
        hour: "2-digit",
        minute: "2-digit", 
        second: "2-digit",

    });

    var date = dateandtime.toLocaleDateString('en-GB',
        {
            year: 'numeric',
            month:'2-digit',
            day:'2-digit'
        });

        
        displaydateandtime();
       /*  datetimecheck(); */

       function displaydateandtime() 
        {
            var day = dateandtime.getDay();
            var actualday = dayconvert(day);
        
            function dayconvert(d) 
            {
        
                d+= 1; 
                switch (d)
                {
        
        
                    case 1: d = 'Sun'
        
                    break; 
        
                    case 2: d = 'Mon' 
                    break;
        
                    case 3: d= 'Tues'
                    break; 
        
                    case 4: d = 'Wed'
                    break; 
        
                    case 5: d = 'Thurs'
                    break; 
        
                    case 6: d= 'Fri'
                    break; 
        
                    case 7: d = 'Sat'
                    break;
        
                }
        
                return d; 
        
             
            }
        
            document.getElementById('time').innerHTML = time;
           document.getElementById('date').innerHTML = date + '\xa0\xa0\xa0\xa0\xa0' + '(' + actualday + ')'; 
        }  
    
};

// open link in new  tab 

 function openLinkInNewTab() {
    
     const anchor = document.querySelectorAll('a:not(.current-tab)');
     
       anchor.forEach((each) => {
         each.setAttribute("target", "_blank");
     });   
     
     
};







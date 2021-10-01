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

    var date = dateandtime.toLocaleDateString(undefined,
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
            document.getElementById('date').innerHTML = date + '\xa0\xa0\xa0\xa0\xa0' + '(' + actualday +')' ;
        }

       /*  function datetimecheck() 
        { 
            var hournow = document.getElementById('time').innerHTML.substr(0,2); 
            var minutenow = document.getElementById('time').innerHTML.substr(3,2); 
            var AMPM = document.getElementById('time').innerHTML.substr(9,2); 
            var daynow = document.getElementById('date').innerHTML.substr(9,2)
            
            var getchceckingelement = document.getElementById('fortextpaste').innerHTML;

            if ( daynow == getchceckingelement.substr(0,3) && hournow == getchceckingelement.substr(4,2)  && minutenow == getchceckingelement.substr(7,2) && AMPM == getchceckingelement.substr(10,2))
            {
                document.getElementById('subjectonemeet').click();
            }
        } */

   
    
}

// dunno 

class subject 
{ 
    constructor(time,day) // need to get day and time of lecture hour ?? 
    {
        this.time = time; 
        this.day = day; 
    }

}


function subjecttime() 
{ 
    var text = document.getElementById('text').value;
    document.getElementById('fortextpaste').innerHTML = text;
   
}

//dunno 

// open link in new  tab 

 function openLinkInNewTab() {
    
     const anchor = document.querySelectorAll('a:not(.current-tab)');
     
       anchor.forEach((each) => {
         each.setAttribute("target", "_blank");
     });   
    

   
    
     
}







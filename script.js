

 function getWorkingDays(month){

  var date = new Date();
  var startDate = new Date(date.getFullYear(), (month-1), 21);
  var endDate = new Date(date.getFullYear(), month, 20);

     var result = {};
     var i = 0;

    var currentDate = startDate;
    while (currentDate <= endDate)  {  

        var weekDay = currentDate.getDay();
        if(weekDay != 0 && weekDay != 6)
            result[i] = currentDate.getDate();
            i++;

         currentDate.setDate(currentDate.getDate()+1); 
    }

    return result;
 }

//pull projects here 
 var projects = ['APHIA Plus','Conrad Hilton'];
 var projectids = ['99-0155D','25-004D'];




 function createTable(dys,projects,projectids){
    var k = 0;
    var l = 0;
    var m = 0;
    var o = 0;

    $( "#table" ).empty();
    var days = $.map(dys, function(value, index) {
    return [value];
    });

   
    var table =  document.getElementById("table");

    var tbl  = document.createElement('table');
    tbl.style.width = '100%';
    tbl.style.border ='1px solid black';
    var tbdy = document.createElement('tbody');
     var p = 0;
      for(var i = 0; i  < (projects.length + 8);i++ ){
         
        var n = 0;
    

        var  tr = document.createElement('tr');
      tr.style.border ='1px solid gray';

       

      for (var j = 0 ; j < (days.length + 4) ; j++ ){
          var td = document.createElement('td');
          if(i > 1  &&j == 1 && l < projects.length){
             td.appendChild(document.createTextNode(""+projects[l]));
             l++;
          }
          if(i > 1 &&j == 0 && m < projectids.length){
             td.appendChild(document.createTextNode(""+projectids[m]));
             m++;
            }
        

          if(i == 0 && j == 0){

             td.appendChild(document.createTextNode("Project Code"));
              
            }
    
          if(i == 0 && j == 1){

             td.appendChild(document.createTextNode("Description"));
              
            }

          if(i == 1 && j == 0){

             td.appendChild(document.createTextNode(""));
              
            }
          if(i == 1 && j == 1){

             td.appendChild(document.createTextNode(""));
              
            }
          if(j == 1 && i == (projects.length+2) ){

             td.appendChild(document.createTextNode("Holiday"));
              
            }
            if(j == 1 && i == (projects.length+3) ){

             td.appendChild(document.createTextNode(" Annual Leave"));
              
            }
          if(j == 1 && i == (projects.length+4) ){

             td.appendChild(document.createTextNode("  Sick Leave"));
              
            }
          if(j == 1 && i == (projects.length+5) ){

             td.appendChild(document.createTextNode("Leave Without Pay"));
              
            }
           if(j == 1 && i == (projects.length+6) ){

             td.appendChild(document.createTextNode(" Training"));
              
            }
              if(j == 1 && i == (projects.length+7) ){

             td.appendChild(document.createTextNode(" Total Hours"));
              
            }

           if(j == (days.length+3) && i == 0 ){

             td.appendChild(document.createTextNode(" Total"));
              
            }

          if(i == 0 && j > 2 && k < days.length){

             td.appendChild(document.createTextNode(""+days[k]));
              k++;

          }

          if(i > 1 && j > 2 && n < (days.length)){
            
           td.innerHTML = '<input type="text" style="width:70px;" id="'+days[n]+'" name="'+projects[i]+'"></input>';
          
            n++;


            }

          


            tr.appendChild(td);
            
      }

         tbdy.appendChild(tr);

 
    }
    tbl.appendChild(tbdy);

     $( "#table" ).append(tbl);


 }


  $('#cmonth').change(function(){
       var month = $(this).val();
       var days = getWorkingDays(month);
       createTable(days,projects,projectids);


  });
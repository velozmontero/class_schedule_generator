$(document).ready(function(){
     
     var totalDays = 0;
     
     moment().format();
     
     $('#startDAte').datepicker({
         beforeShow: function (input, inst) {
               setTimeout(function () {
                    inst.dpDiv.css({
                         position: "absolute",
                         margin: "0 auto",
                         left: 0,
                         right: 0,
                         top: "91px",
                         "z-index": "1000"
                    });
               }, 0);
          },
          beforeShowDay: $.datepicker.noWeekends, 
          numberOfMonths: [3,4],
     });
     
     var today = new Date();
     var y = today.getFullYear();
     
     $("#nonWorkingD").multiDatesPicker({
          beforeShow: function (input, inst) {
               setTimeout(function () {
                    inst.dpDiv.css({
                         position: "absolute",
                         margin: "0 auto",
                         left: 0,
                         right: 0,
                         top: "91px",
                         "z-index": "1000"
                    });
               }, 0);
          },
          beforeShowDay: $.datepicker.noWeekends, 
          numberOfMonths: [3,4],
     });
     
     $('select').material_select();

     $('#action').click(postInfo);
     
     $('#clear').click(function(){
         $('#response').addClass('hide'); 
         $('#info').html("");
         $('#startDAte').val("");
     });
  
     // medical assistant ---------------------->
     
     var COM01= {
          courseCode: "COM01",
          hours: 78,
          days: Math.ceil(78/4)
     };
     
     var ECPS01= {
          courseCode: "ECPS01",
          hours: 20,
          days: Math.ceil(20/4)
     };
     
     var CPR01= {
          courseCode: "CPR01",
          hours: 4,
          days: Math.ceil(4/4)
     };
     
     var PCT02= {
          courseCode: "PCT02",
          hours: 50,
          days: Math.ceil(50/4)
     };
     
     var HAE01= {
          courseCode: "HAE01",
          hours: 4,
          days: Math.ceil(4/4)
     };
     
     var MAT01= {
          courseCode: "MAT01",
          hours: 40,
          days: Math.ceil(40/4)
     };
     
     var MAT02= {
          courseCode: "MAT02",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var MAS01= {
          courseCode: "MAS01",
          hours: 84,
          days: Math.ceil(84/4)
     };
     
     var MAS02= {
          courseCode: "MAS02",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var MAS03= {
          courseCode: "MAS03",
          hours: 60,
          days: Math.ceil(60/4)
     };
     
     var MAS04= {
          courseCode: "MAS04",
          hours: 40,
          days: Math.ceil(40/4)
     };
     
     var MAS05= {
          courseCode: "MAS05",
          hours: 140,
          days: Math.ceil(140/4)
     };
     
     var MAS06= {
          courseCode: "MAS06",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var MAS07= {
          courseCode: "MAS07",
          hours: 100,
          days: Math.ceil(100/4)
     };
     
     var mdArr1= [MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01];
     var mdArr2= [CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01, MAS01];
     var mdArr3= [PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01, MAS01, CPR01];
     var mdArr4= [HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01, MAS01, CPR01, PCT02];
     var mdArr5= [MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01, MAS01, CPR01, PCT02, HAE01];
     var mdArr6= [MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01];
     var mdArr7= [MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01, MAT02];
     var mdArr8= [MAS03, MAS04, MAS05, MAS06, MAS07, COM01, ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02];
     var mdArr9= [MAS04, MAS05, MAS06, MAS07, COM01, ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03];
     var mdArr10= [MAS05, MAS06, MAS07, COM01, ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04];
     var mdArr11= [MAS06, MAS07, COM01, ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05];
     var mdArr12= [MAS07, COM01, ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06];
     var mdArr13= [COM01, ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07];
     var mdArr14= [ECPS01, MAS01, CPR01, PCT02, HAE01, MAT01, MAT02, MAS02, MAS03, MAS04, MAS05, MAS06, MAS07, COM01 ];
     
     function checkMA() {
          if ($('#startClass').val() == "MAS01") {
               arr= mdArr1;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "CPR01") {
               arr= mdArr2;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PCT02") {
               arr= mdArr3;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "HAE01") {
               arr= mdArr4;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAT01") {
               arr= mdArr5;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAT02") {
               arr= mdArr6;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS02") {
               arr= mdArr7;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS03") {
               arr= mdArr8;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS04") {
               arr= mdArr9;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS05") {
               arr= mdArr10;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS06") {
               arr= mdArr11;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "MAS07") {
               arr= mdArr12;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "COM01") {
               arr= mdArr13;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "ECPS01") {
               arr= mdArr14;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else{
               arr= mdArr1;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
     }
     
     // medical assitant end ---------------------------------------------------------------------------------------------------->
     
     // Pharmacy Technician start ---------------------->
     
     var PHA01= {
          courseCode: "PHA01",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var PHB02= {
          courseCode: "PHB02",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var PHC03= {
          courseCode: "PHB02",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var PHD04= {
          courseCode: "PHD04",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var PHE05= {
          courseCode: "PHE05",
          hours: 76,
          days: Math.ceil(76/4)
     };
     
     var PHF06= {
          courseCode: "PHF06",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var PHG07= {
          courseCode: "PHG07",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var CPR01= {
          courseCode: "CPR01",
          hours: 4,
          days: Math.ceil(4/4)
     };
     
     var PHH08= {
          courseCode: "PHH08",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var PHI09= {
          courseCode: "PHI09",
          hours: 80,
          days: Math.ceil(80/4)
     };
     
     var phArr1= [PHA01, PHB02, PHC03, PHD04, PHE05, PHF06, PHG07, CPR01, PHH08, PHI09];
     var phArr2= [PHB02, PHC03, PHD04, PHE05, PHF06, PHG07, CPR01, PHH08, PHI09, PHA01];
     var phArr3= [PHC03, PHD04, PHE05, PHF06, PHG07, CPR01, PHH08, PHI09, PHA01, PHB02];
     var phArr4= [PHD04, PHE05, PHF06, PHG07, CPR01, PHH08, PHI09, PHA01, PHB02, PHC03];
     var phArr5= [PHE05, PHF06, PHG07, CPR01, PHH08, PHI09, PHA01, PHB02, PHC03, PHD04];
     var phArr6= [PHF06, PHG07, CPR01, PHH08, PHI09, PHA01, PHB02, PHC03, PHD04, PHE05];
     var phArr7= [PHG07, CPR01, PHH08, PHI09, PHA01, PHB02, PHC03, PHD04, PHE05, PHF06];
     var phArr8= [CPR01, PHH08, PHI09, PHA01, PHB02, PHC03, PHD04, PHE05, PHF06, PHG07];
     var phArr9= [PHH08, PHI09, PHA01, PHB02, PHC03, PHD04, PHE05, PHF06, PHG07, CPR01];
     var phArr10= [PHI09, PHA01, PHB02, PHC03, PHD04, PHE05, PHF06, PHG07, CPR01, PHH08];
     
     function checkPHT() {
          if ($('#startClass').val() == "PHA01") {
               arr= phArr1;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PHB02") {
               arr= phArr2;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PHC03") {
               arr= phArr3;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PHD04") {
               arr= phArr4;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PHE05") {
               arr= phArr5;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PHF06") {
               arr= phArr6;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PHG07") {
               arr= phArr7;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "CPR01") {
               arr= phArr8;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PHH08") {
               arr= phArr9;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else if ($('#startClass').val() == "PHI09") {
               arr= phArr10;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
          else{
               arr= phArr1;
               for (var t in arr){
                    totalDays+= arr[t].days;
               }
          }
     }
     
     // Pharmacy Technician end ------------------------------------------------------------------------------------------------->
     
     var dates= [];
     var arr= [];

     $('#course').change(getActiveCourse);
     function getActiveCourse(){
          if ($('#course').val() == "ma"){
               $('#startClass').html("");
               $('#startClass').append('<option value="" disabled selected>Starting Class</option>');
               for (var t in mdArr1){
                    console.log("working");
                    $('#startClass').append('<option value="'+mdArr1[t].courseCode+'">'+mdArr1[t].courseCode+'</option>');
               }
               $('#startClass').material_select();
          }
          if ($('#course').val() == "pht"){
               $('#startClass').html("");
               $('#startClass').append('<option value="" disabled selected>Starting Class</option>');
               for (var t in phArr1){
                    console.log("working");
                    $('#startClass').append('<option value="'+phArr1[t].courseCode+'">'+phArr1[t].courseCode+'</option>');
               }
               $('#startClass').material_select();
          }
     }
     
     function postInfo(){
          var tt= document.getElementById('startDAte').value;
  
          var sDatett= new Date(tt);
          var stt= new Date(sDatett);
          
          stt.setDate(stt.getDate());
          var wDaytt= stt.getDay();
          
          while (
               (stt.getDate() == 24 && parseInt(stt.getMonth()+1) == 12) ||
               (stt.getDate() == 25 && parseInt(stt.getMonth()+1) == 12) ||
               (stt.getDate() == 26 && parseInt(stt.getMonth()+1) == 12) ||
               (stt.getDate() == 27 && parseInt(stt.getMonth()+1) == 12) ||
               (stt.getDate() == 28 && parseInt(stt.getMonth()+1) == 12) ||
               (stt.getDate() == 29 && parseInt(stt.getMonth()+1) == 12) ||
               (stt.getDate() == 30 && parseInt(stt.getMonth()+1) == 12) ||
               (stt.getDate() == 31 && parseInt(stt.getMonth()+1) == 12) ||
               (stt.getDate() == 1 && parseInt(stt.getMonth()+1) == 1) ||
               (stt.getDate() == 4 && parseInt(stt.getMonth()+1) == 7) 
               ) { 
                    stt.setDate(stt.getDate() + 1);
                    wDaytt= stt.getDay();
          }
          
          while (wDaytt === 0 || wDaytt === 6) {
               stt.setDate(stt.getDate() + 1);
               wDaytt= stt.getDay();
          }
          
          var ttdd = stt.getDate();
          var ttmm = stt.getMonth() + 1;
          var tty = stt.getFullYear();
          
          tt= ttmm + '/' + ttdd + '/' + tty;

          for (var z in dates) {
               
               var nonWDtt= new Date(dates[z]);
               var nWorkingDtt= new Date(nonWDtt);
               
               nWorkingDtt.setDate(nWorkingDtt.getDate());
               
               var nwttdd = nWorkingDtt.getDate();
               var nwttmm = nWorkingDtt.getMonth() + 1;
               var nwtty = nWorkingDtt.getFullYear();
               
               var nonWorkingDaytt= nwttmm + '/' + nwttdd + '/' + nwtty;
               
               console.log("var o in dates is "+nonWorkingDay);
               while(nonWorkingDaytt == tt || wDaytt === 0 || wDaytt === 6 ||
                    (stt.getDate() == 24 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 25 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 26 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 27 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 28 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 29 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 30 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 31 && parseInt(stt.getMonth()+1) == 12) ||
                    (stt.getDate() == 1 && parseInt(stt.getMonth()+1) == 1) ||
                    (stt.getDate() == 4 && parseInt(stt.getMonth()+1) == 7)   
                    ) {
                    stt.setDate( stt.getDate() + 1);
                    wDaytt=  stt.getDay();
                    ttdd = stt.getDate();
                    ttmm = stt.getMonth() + 1;
                    tty = stt.getFullYear();
                    
                    tt= ttmm + '/' + ttdd + '/' + tty;
               }
          }
          
          // medical assistant checking start---------------------->
          
          if ($('#course').val() == "ma"){
               checkMA();
          }
          
          // medical assistant checking end--------------------------------------------------------------------------------------------------->
          
          // Pharmacy Technician checking start------------------------------->
          
          if ($('#course').val() == "pht"){
               checkPHT();
          }
          
         // Pharmacy Technician checking end ------------------------------------------------------------------------------------------------->
          
          console.log("total days "+totalDays);
          event.preventDefault();
          
          $('#response').removeClass('hide');
          
          dates = $('#nonWorkingD').multiDatesPicker('getDates');
          var lastDayInClass;
          var course= $('#course').val();
          var group= $('#group').val();
          
          function getStartAndEndDate() {
               
               var c= 1;
    
               for (var x in arr){
                    
                    var hrs= arr[x].hours;
                    var courseCode= arr[x].courseCode;
                    var startD= new Date(tt);
                    var sDate= new Date(startD);
                    
                    sDate.setDate(sDate.getDate());
                    var wDay= sDate.getDay();
                    
                    while (
                         (sDate.getDate() == 24 && parseInt(sDate.getMonth()+1) == 12) ||
                         (sDate.getDate() == 25 && parseInt(sDate.getMonth()+1) == 12) ||
                         (sDate.getDate() == 26 && parseInt(sDate.getMonth()+1) == 12) ||
                         (sDate.getDate() == 27 && parseInt(sDate.getMonth()+1) == 12) ||
                         (sDate.getDate() == 28 && parseInt(sDate.getMonth()+1) == 12) ||
                         (sDate.getDate() == 29 && parseInt(sDate.getMonth()+1) == 12) ||
                         (sDate.getDate() == 30 && parseInt(sDate.getMonth()+1) == 12) ||
                         (sDate.getDate() == 31 && parseInt(sDate.getMonth()+1) == 12) ||
                         (sDate.getDate() == 1 && parseInt(sDate.getMonth()+1) == 1) ||
                         (sDate.getDate() == 4 && parseInt(sDate.getMonth()+1) == 7) 
                         ) { 
                              sDate.setDate(sDate.getDate() + 1);
                              wDay= sDate.getDay();
                    }
                    
                    while (wDay === 0 || wDay === 6) {
                         sDate.setDate(sDate.getDate() + 1);
                         wDay= sDate.getDay();
                    }
                    
                    var sdd = sDate.getDate();
                    var smm = sDate.getMonth() + 1;
                    var sy = sDate.getFullYear();
                    
                    var startDate= smm + '/' + sdd + '/' + sy;

                    for (var o in dates) {
                         
                         var nonWD= new Date(dates[o]);
                         var nWorkingD= new Date(nonWD);
                         
                         nWorkingD.setDate(nWorkingD.getDate());
                         
                         var nwdd = nWorkingD.getDate();
                         var nwmm = nWorkingD.getMonth() + 1;
                         var nwy = nWorkingD.getFullYear();
                         
                         var nonWorkingDay= nwmm + '/' + nwdd + '/' + nwy;
                         
                         console.log("var o in dates is "+nonWorkingDay);
                         while(nonWorkingDay == startDate || wDay === 0 || wDay === 6 ||
                              (sDate.getDate() == 24 && parseInt(sDate.getMonth()+1) == 12) ||
                              (sDate.getDate() == 25 && parseInt(sDate.getMonth()+1) == 12) ||
                              (sDate.getDate() == 26 && parseInt(sDate.getMonth()+1) == 12) ||
                              (sDate.getDate() == 27 && parseInt(sDate.getMonth()+1) == 12) ||
                              (sDate.getDate() == 28 && parseInt(sDate.getMonth()+1) == 12) ||
                              (sDate.getDate() == 29 && parseInt(sDate.getMonth()+1) == 12) ||
                              (sDate.getDate() == 30 && parseInt(sDate.getMonth()+1) == 12) ||
                              (sDate.getDate() == 31 && parseInt(sDate.getMonth()+1) == 12) ||
                              (sDate.getDate() == 1 && parseInt(sDate.getMonth()+1) == 1) ||
                              (sDate.getDate() == 4 && parseInt(sDate.getMonth()+1) == 7)   
                              ) {
                              sDate.setDate(sDate.getDate() + 1);
                              wDay= sDate.getDay();
                              sdd = sDate.getDate();
                              smm = sDate.getMonth() + 1;
                              sy = sDate.getFullYear();
                              startDate= smm + '/' + sdd + '/' + sy;
                         }
                    }
       
                    //---------------->
                    
                    var date = new Date(tt);
                    var newdate = new Date(date);
               
                    for (var i= 1; i < arr[x].days; i++) {
                         
                         newdate.setDate(newdate.getDate() + 1);
                         var weekDay= newdate.getDay();
                         
                         while (
                              (newdate.getDate() == 24 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 25 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 26 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 27 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 28 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 29 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 30 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 31 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() ==  1 && parseInt(newdate.getMonth()+1) ==  1) ||
                              (newdate.getDate() ==  4 && parseInt(newdate.getMonth()+1) ==  7) 
                              ) {
                                   console.log(newdate.getDate()+" "+parseInt(newdate.getMonth()+1));
                                   newdate.setDate(newdate.getDate() + 1);
                                   weekDay= newdate.getDay();
                         }
                         
                         while (weekDay === 0 || weekDay === 6) {
                             newdate.setDate(newdate.getDate() + 1);
                             weekDay= newdate.getDay();
                         }
                         
                         var dd = newdate.getDate();
                         console.log(newdate.getDate()+" "+parseInt(newdate.getMonth()+1));
                         var mm = newdate.getMonth() + 1;
                         var y = newdate.getFullYear();
                    
                         var endDate = mm + '/' + dd + '/' + y;
                         
                         for (var c in dates) {
                         
                              var nonWDE= new Date(dates[c]);
                              var nWorkingDE= new Date(nonWDE);
                              
                              nWorkingDE.setDate(nWorkingDE.getDate());
                              
                              var nwddE = nWorkingDE.getDate();
                              var nwmmE = nWorkingDE.getMonth() + 1;
                              var nwyE = nWorkingDE.getFullYear();
                              
                              var nonWorkingDayE= nwmmE + '/' + nwddE + '/' + nwyE;
                              
                              console.log("var c in dates is "+ nonWorkingDayE);
                              while(nonWorkingDayE == endDate || wDay === 0 || wDay === 6 ||
                                   (newdate.getDate() == 24 && parseInt(newdate.getMonth()+1) == 12) ||
                                   (newdate.getDate() == 25 && parseInt(newdate.getMonth()+1) == 12) ||
                                   (newdate.getDate() == 26 && parseInt(newdate.getMonth()+1) == 12) ||
                                   (newdate.getDate() == 27 && parseInt(newdate.getMonth()+1) == 12) ||
                                   (newdate.getDate() == 28 && parseInt(newdate.getMonth()+1) == 12) ||
                                   (newdate.getDate() == 29 && parseInt(newdate.getMonth()+1) == 12) ||
                                   (newdate.getDate() == 30 && parseInt(newdate.getMonth()+1) == 12) ||
                                   (newdate.getDate() == 31 && parseInt(newdate.getMonth()+1) == 12) ||
                                   (newdate.getDate() ==  1 && parseInt(newdate.getMonth()+1) ==  1) ||
                                   (newdate.getDate() ==  4 && parseInt(newdate.getMonth()+1) ==  7) 
                                   ) {
                                   newdate.setDate(newdate.getDate() + 1);
                                   wDay= newdate.getDay();
                                   dd = newdate.getDate();
                                   mm = newdate.getMonth() + 1;
                                   y = newdate.getFullYear();
                              
                                   endDate = mm + '/' + dd + '/' + y;
                              }
                         }
                         
                         console.log(" date after loop: "+newdate.getDate()+" "+parseInt(newdate.getMonth()+1));
                    }
                 
                    dd = newdate.getDate();
                    mm = newdate.getMonth() + 1;
                    y = newdate.getFullYear();
               
                    endDate = mm + '/' + dd + '/' + y;
                    
                    console.log(newdate.getDate()+" "+parseInt(newdate.getMonth()+1));
                    
                    console.log("course days "+arr[x].days);
                    console.log(c+" Start Date for course "+arr[x].courseCode+": "+startDate);
                    console.log(c+" End Date for course "+arr[x].courseCode+": "+endDate);
                    console.log("week day is: "+ weekDay);
                    
                    lastDayInClass= startDate;
                    
                    //---------------------------------------------------------------------------------------------->
                    
                    var lastDay= new Date(lastDayInClass);
                    var lastD= new Date(lastDay);
                    
                    for (var i= 1; i < totalDays; i++) {
                         lastD.setDate(lastD.getDate() + 1);
                         var dOFDW= lastD.getDay();
                         
                         while (
                              (lastD.getDate() == 24 && parseInt(lastD.getMonth()+1) == 12) ||
                              (lastD.getDate() == 25 && parseInt(lastD.getMonth()+1) == 12) ||
                              (lastD.getDate() == 26 && parseInt(lastD.getMonth()+1) == 12) ||
                              (lastD.getDate() == 27 && parseInt(lastD.getMonth()+1) == 12) ||
                              (lastD.getDate() == 28 && parseInt(lastD.getMonth()+1) == 12) ||
                              (lastD.getDate() == 29 && parseInt(lastD.getMonth()+1) == 12) ||
                              (lastD.getDate() == 30 && parseInt(lastD.getMonth()+1) == 12) ||
                              (lastD.getDate() == 31 && parseInt(lastD.getMonth()+1) == 12) ||
                              (lastD.getDate() ==  1 && parseInt(lastD.getMonth()+1) ==  1) ||
                              (lastD.getDate() ==  4 && parseInt(lastD.getMonth()+1) ==  7) 
                              ) {
                                   console.log(lastD.getDate()+" "+parseInt(lastD.getMonth()+1));
                                   lastD.setDate(lastD.getDate() + 1);
                                   dOFDW= lastD.getDay();
                         }
                         
                         while (dOFDW === 0 || dOFDW === 6) {
                              lastD.setDate(lastD.getDate() + 1);
                              dOFDW= lastD.getDay();
                         }
                         
                         var ldd = lastD.getDate();
                         var lmm = lastD.getMonth() + 1;
                         var ly = lastD.getFullYear();
                         
                         lastDayInClass= lmm + '/' + ldd + '/' + ly;
                         
                         for (var l in dates) {
                              
                              var lastDin= new Date(dates[l]);
                              var lDC= new Date(lastDin);
                              
                              lDC.setDate(lDC.getDate());
                              
                              var lDCdd = lDC.getDate();
                              var lDCmm = lDC.getMonth() + 1;
                              var lDCy = lDC.getFullYear();
                              
                              var lDCInClass= lDCmm + '/' + lDCdd + '/' + lDCy;
                              
                              console.log("var l in dates is "+ lDCInClass);
                              while(lDCInClass == lastDayInClass || dOFDW === 0 || dOFDW === 6 ||
                                   (lastD.getDate() == 24 && parseInt(lastD.getMonth()+1) == 12) ||
                                   (lastD.getDate() == 25 && parseInt(lastD.getMonth()+1) == 12) ||
                                   (lastD.getDate() == 26 && parseInt(lastD.getMonth()+1) == 12) ||
                                   (lastD.getDate() == 27 && parseInt(lastD.getMonth()+1) == 12) ||
                                   (lastD.getDate() == 28 && parseInt(lastD.getMonth()+1) == 12) ||
                                   (lastD.getDate() == 29 && parseInt(lastD.getMonth()+1) == 12) ||
                                   (lastD.getDate() == 30 && parseInt(lastD.getMonth()+1) == 12) ||
                                   (lastD.getDate() == 31 && parseInt(lastD.getMonth()+1) == 12) ||
                                   (lastD.getDate() ==  1 && parseInt(lastD.getMonth()+1) ==  1) ||
                                   (lastD.getDate() ==  4 && parseInt(lastD.getMonth()+1) ==  7) 
                                   ) {
                                   lastD.setDate(lastD.getDate() + 1);
                                   ldd = lastD.getDate();
                                   lmm = lastD.getMonth() + 1;
                                   ly = lastD.getFullYear();
                                   
                                   lastDayInClass= lmm + '/' + ldd + '/' + ly;
                                   dOFDW= lastD.getDay();
                              }
                         }    
                    }
                    
                    //---------------------------------------------------------------------------------------------->
                    
                    var graduationDay= new Date(lastDayInClass);
                    var gDate= new Date(graduationDay);
                    
                    for (var i= 1; i < 20; i++) {
                         gDate.setDate(gDate.getDate() + 1);
                         var dayOFDW= gDate.getDay();
                         
                         while (
                              (gDate.getDate() == 24 && parseInt(gDate.getMonth()+1) == 12) ||
                              (gDate.getDate() == 25 && parseInt(gDate.getMonth()+1) == 12) ||
                              (gDate.getDate() == 26 && parseInt(gDate.getMonth()+1) == 12) ||
                              (gDate.getDate() == 27 && parseInt(gDate.getMonth()+1) == 12) ||
                              (gDate.getDate() == 28 && parseInt(gDate.getMonth()+1) == 12) ||
                              (gDate.getDate() == 29 && parseInt(gDate.getMonth()+1) == 12) ||
                              (gDate.getDate() == 30 && parseInt(gDate.getMonth()+1) == 12) ||
                              (gDate.getDate() == 31 && parseInt(gDate.getMonth()+1) == 12) ||
                              (gDate.getDate() ==  1 && parseInt(gDate.getMonth()+1) ==  1) ||
                              (gDate.getDate() ==  4 && parseInt(gDate.getMonth()+1) ==  7) 
                              ) {
                                   console.log(gDate.getDate()+" "+parseInt(gDate.getMonth()+1));
                                   gDate.setDate(gDate.getDate() + 1);
                                   dayOFDW= gDate.getDay();
                         }
                         
                         while (dayOFDW === 0 || dayOFDW === 6) {
                              gDate.setDate(gDate.getDate() + 1);
                              dayOFDW= gDate.getDay();
                         }
                         
                         var gdd = gDate.getDate();
                         var gmm = gDate.getMonth() + 1;
                         var gy = gDate.getFullYear();
                         
                         gradDay= gmm + '/' + gdd + '/' + gy;
                         
                         for (var c in dates) {
                              
                              var gradD= new Date(dates[c]);
                              var graduationD= new Date(gradD);
                              
                              graduationD.setDate(graduationD.getDate());
                              
                              var gradd = graduationD.getDate();
                              var gramm = graduationD.getMonth() + 1;
                              var gray = graduationD.getFullYear();
                              
                              var graduDay= gramm + '/' + gradd + '/' + gray;
                              
                              console.log("var c in dates is "+graduDay);
                              while(graduDay == gradDay || dayOFDW === 0 || dayOFDW === 6 ||
                                   (gDate.getDate() == 24 && parseInt(gDate.getMonth()+1) == 12) ||
                                   (gDate.getDate() == 25 && parseInt(gDate.getMonth()+1) == 12) ||
                                   (gDate.getDate() == 26 && parseInt(gDate.getMonth()+1) == 12) ||
                                   (gDate.getDate() == 27 && parseInt(gDate.getMonth()+1) == 12) ||
                                   (gDate.getDate() == 28 && parseInt(gDate.getMonth()+1) == 12) ||
                                   (gDate.getDate() == 29 && parseInt(gDate.getMonth()+1) == 12) ||
                                   (gDate.getDate() == 30 && parseInt(gDate.getMonth()+1) == 12) ||
                                   (gDate.getDate() == 31 && parseInt(gDate.getMonth()+1) == 12) ||
                                   (gDate.getDate() ==  1 && parseInt(gDate.getMonth()+1) ==  1) ||
                                   (gDate.getDate() ==  4 && parseInt(gDate.getMonth()+1) ==  7)  
                                   ) {
                                   gDate.setDate(gDate.getDate() + 1);
                                   gdd = gDate.getDate();
                                   gmm = gDate.getMonth() + 1;
                                   gy = gDate.getFullYear();
                                   
                                   gradDay= gmm + '/' + gdd + '/' + gy;
                                   dayOFDW= gDate.getDay();
                              }
                         }    
                    }
                         
                    console.log("the last day in class is "+ lastDayInClass);
                    console.log("the graduation day is "+ gradDay);
                    
                    //-------------------------------------------------------------------------------------------------->
                    console.log(course+' '+courseCode+' '+startDate+' '+endDate+' '+hrs+' '+gradDay+' '+lastDayInClass+' '+group);
                    
                     $('#info').append(
                        '<tr>'+'<td>'+courseCode+'</td>'+
                        '<td>'+startDate+'</td>'+
                        '<td>'+endDate+'</td>'+
                        '<td>'+hrs+'</td>'+
                        '<td>'+lastDayInClass+'</td>'+
                        '<td>'+gradDay+'</td>'+
                        '</tr>'
                    );
                   
                    /*$.ajax({
          
                         url: 'http://159.203.70.55:5255/'+course+'/'+courseCode+'/'+startDate+'/'+endDate+'/'+hrs+'/'+gradDay+'/'+lastDayInClass+'/'+group,
                          
                         type:"POST",
                          
                         success: function(res){
                             console.log(res);
                         },
                         error: function(request,errortype,errorMessage){
                             console.log("it is not working");
                         }
                    });*/
                    
                    newdate.setDate(newdate.getDate() + 1);
                    
                    weekDay= newdate.getDay();
                         
                    while (
                         (newdate.getDate() == 24 && parseInt(newdate.getMonth()+1) == 12) ||
                         (newdate.getDate() == 25 && parseInt(newdate.getMonth()+1) == 12) ||
                         (newdate.getDate() == 26 && parseInt(newdate.getMonth()+1) == 12) ||
                         (newdate.getDate() == 27 && parseInt(newdate.getMonth()+1) == 12) ||
                         (newdate.getDate() == 28 && parseInt(newdate.getMonth()+1) == 12) ||
                         (newdate.getDate() == 29 && parseInt(newdate.getMonth()+1) == 12) ||
                         (newdate.getDate() == 30 && parseInt(newdate.getMonth()+1) == 12) ||
                         (newdate.getDate() == 31 && parseInt(newdate.getMonth()+1) == 12) ||
                         (newdate.getDate() ==  1 && parseInt(newdate.getMonth()+1) ==  1) ||
                         (newdate.getDate() ==  4 && parseInt(newdate.getMonth()+1) ==  7) 
                         ) {
                              console.log(newdate.getDate()+" "+parseInt(newdate.getMonth()+1));
                              newdate.setDate(newdate.getDate() + 1);
                              weekDay= newdate.getDay();
                    }
                    
                    while (weekDay === 0 || weekDay === 6) {
                        newdate.setDate(newdate.getDate() + 1);
                        weekDay= newdate.getDay();
                    }
                    
                    var dd = newdate.getDate();
                    console.log(newdate.getDate()+" "+parseInt(newdate.getMonth()+1));
                    var mm = newdate.getMonth() + 1;
                    var y = newdate.getFullYear();
               
                    var endDate = mm + '/' + dd + '/' + y;
                    
                    for (var c in dates) {
                    
                         var nonWDE= new Date(dates[c]);
                         var nWorkingDE= new Date(nonWDE);
                         
                         nWorkingDE.setDate(nWorkingDE.getDate());
                         
                         var nwddE = nWorkingDE.getDate();
                         var nwmmE = nWorkingDE.getMonth() + 1;
                         var nwyE = nWorkingDE.getFullYear();
                         
                         var nonWorkingDayE= nwmmE + '/' + nwddE + '/' + nwyE;
                         
                         console.log("var c in dates is "+ nonWorkingDayE);
                         while(nonWorkingDayE == endDate || wDay === 0 || wDay === 6 ||
                              (newdate.getDate() == 24 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 25 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 26 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 27 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 28 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 29 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 30 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() == 31 && parseInt(newdate.getMonth()+1) == 12) ||
                              (newdate.getDate() ==  1 && parseInt(newdate.getMonth()+1) ==  1) ||
                              (newdate.getDate() ==  4 && parseInt(newdate.getMonth()+1) ==  7) 
                              ) {
                              newdate.setDate(newdate.getDate() + 1);
                              wDay= newdate.getDay();
                              dd = newdate.getDate();
                              mm = newdate.getMonth() + 1;
                              y = newdate.getFullYear();
                         
                              endDate = mm + '/' + dd + '/' + y;
                         }
                    }
                    
                    c++; 
                    tt= endDate;
               }
          }
          getStartAndEndDate();
          $('#startDAte').val(tt);
     };
});
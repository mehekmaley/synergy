$(document).ready(function(){
  $("#myInput").on("click", function() {
      document.getElementById("fourblock").style.display = "none";
  });
  $("#myInput").on("keyup", function() {
      
    var value = $(this).val().toLowerCase();
    $("#title-list li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});




var idd;
const titleList = document.querySelector('#title-list');
const menu = document.querySelector('#menu');





function renderTitle(doc){
  
  let div = document.createElement('div');
  
  
  let li = document.createElement('li');
  //let title = document.createElement('a');
  let domain = document.createElement('span');
 
  let guide = document.createElement('span');
  let dept = document.createElement('span');
  let cless = document.createElement('span');
  let acadyear = document.createElement('span');
  let score = document.createElement('span');
  let rsp = document.createElement('span');
  li.setAttribute('data-id',doc.id);
  li.setAttribute('class',"docData");
  jQuery('<a/>', {
    href: '#',
    name: 'title',
    id: doc.id,
    html: doc.data().title,
    
    }).bind('click', function(){
      console.log(this.id);
      document.getElementById("fourblock").style.display = "none";
      document.getElementById("section-counter").style.display = "none";
      
      jQuery('<form/>', {
        name: 'detail',
        id: "detail",
        // html: doc.data().title,        
        }).appendTo(div);
        menu.appendChild(div);
        // jQuery('<h2/>', {
        //   name: "he",
        //   id: 'domain',
        //   html: doc.data().domain,
        // }).appendTo(detail);
        $('#detail').append("" + "<b>Title :: </b>  " + doc.data().title);
        $('#detail').append("<br/>" +"<b>Project Developer:: </b> "+ "  "+doc.data().name);
        $('#detail').append("<br/>" + "<b>DOMAIN::</b>  "+ doc.data().domain);
//        $('#detail').append("<br/>" + doc.data().guide);
        $('#detail').append("<br/>" +"<b>Department::</b>"+ doc.data().dept);
        $('#detail').append("<br/>" +"<b>Class::</b>"+ doc.data().class);
        $('#detail').append("<br/>" +"<b>Score Achieved::</b>"+ doc.data().score);
        $('#detail').append("<br/>" +"<b>Research Paper Published::</b>"+ doc.data().researchpaper);
        $('#detail').append("<br/>" +"<b>Academic Year::</b>"+ doc.data().acadyear)
        $('#detail').append("<br/>");
        jQuery('<a/>',{
          name: 'video',
          id: "video",
          html: '<b>View Video<b>',
          href: doc.data().video,
        }).appendTo(detail);
        $('#detail').append("<br/>");
        jQuery('<a/>',{
          name: 'video',
          id: "video",
          html: '<b>View Report</b>',
          href: doc.data().report,
        }).appendTo(detail);
        $('#detail').append("<br/>");
        jQuery('<a/>',{
          name: 'video',
          id: "video",
          html: '<b>View Presentation</b>',
          href: doc.data().presentation,
        }).appendTo(detail);


    }).appendTo(li);

    
  // title.textContent = doc.data().title;
  domain.textContent = doc.data().domain;
  guide.textContent = doc.data().guide;
  dept.textContent = doc.data().dept;
  cless.textContent = doc.data().class;
  score.textContent = doc.data().score;
  acadyear.textContent = doc.data().acadyear;
 
  
  
  // title.setAttribute('class',"tlink");
  // title.setAttribute('href',"#");
  
  
  
  
  // li.appendChild(title);
  li.appendChild(domain);
  li.appendChild(guide);
  li.appendChild(dept);
  li.appendChild(cless);
  li.appendChild(score);
  li.appendChild(acadyear);
  

  titleList.appendChild(li);



  

}
var lii = document.getElementsByClassName("docData");
console.log(lii);
// $("#myInput").on("click", function() {
//   document.getElementById("fourblock").style.display = "none";
// });



firebase.firestore().collection("project").get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.id);
    renderTitle(doc);
    
  })
});
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
    let branch = document.createElement('span');
    let cless = document.createElement('span');
    let year = document.createElement('span');
    let score = document.createElement('span');
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
          html: doc.data().title,
          
          }).appendTo(div);
          menu.appendChild(div);

      }).appendTo(li);


    // title.textContent = doc.data().title;
    domain.textContent = doc.data().domain;
    guide.textContent = doc.data().guide;
    branch.textContent = doc.data().branch;
    cless.textContent = doc.data().class;
    score.textContent = doc.data().score;
    year.textContent = doc.data().year;
    
    
    
    // title.setAttribute('class',"tlink");
    // title.setAttribute('href',"#");
    
    
    
    
    // li.appendChild(title);
    li.appendChild(domain);
    li.appendChild(guide);
    li.appendChild(branch);
    li.appendChild(cless);
    li.appendChild(score);
    li.appendChild(year);
    

    titleList.appendChild(li);



    

}
var lii = document.getElementsByClassName("docData");
console.log(lii);
// $("#myInput").on("click", function() {
//   document.getElementById("fourblock").style.display = "none";
// });



firebase.firestore().collectionGroup("project").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
      console.log(doc.id);
      renderTitle(doc);
      
    })
  });
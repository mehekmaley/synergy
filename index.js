
  
    var uploader = document.getElementById('uploader');
    var fileButton = document.getElementById('fileButton');
    var tit1 = document.getElementById('tit');
    var sub = document.getElementById('subm');
    var storage1 = firebase.storage();
    var storageRef1 = storage1.ref();
    var url1;
    sub.addEventListener('click',submi);

    function submi()  {
        
        console.log("submi")
        firebase.firestore().collection("mehek").doc("project").set({
            title: tit1.value,
            
        });
        storageRef1.child('filess/today').listAll().then(function(result) {
            console.log("yoo");
            result.items.forEach(function(dataRef){
                console.log("img" + dataRef.toString());
                dataRef.getDownloadURL().then(function(url){
                    
                    url1 = url;
                    console.log(url1);
                    seturl1(url1);

                })
                
        
            })
        });

        
        

        console.log("submi")

    }

    function seturl1(tt) {
        firebase.firestore().collection("mehek").doc("project").set({
            url1: url1,
            
        },{merge: true});
    }

    fileButton.addEventListener('change',function(e) {
        var file = e.target.files[0];
        
        var storageRef = firebase.storage().ref('filess/'+'today/'+file.name);

        var task = storageRef.put(file);

        task.on('state_changed',function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;

        },
        
        function error(err) {
            console.log("errrror");
        },

        function complete() { 
            console.log("completeee");

        }

        )
    })

    //tag code
    var $form,
	$input,
    $list;
    
var i = 0;
var a = [];
var submit1 = document.getElementById("submit1");
var display = document.getElementById("display");

submit1.addEventListener("click",chalbc);
display.addEventListener("click",chaldisplay);
function chalbc() {

    console.log("submit start")
    firebase.firestore().collection("mehek").doc("project").set({
        tag: a
        
    });
    console.log("submit")
}
function chaldisplay() {
    console.log("display start");
    firebase.firestore().collection("mehek").where("tag","array-contains","css").get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          console.log(doc.id);
          
          
        })
      });
}

document.addEventListener("DOMContentLoaded", start);

function start() {
	$form = document.querySelector(".tag-form");
	$list = document.querySelector(".tag-list");
	$input = document.querySelector(".tag-input");
	
	
	$form.onsubmit = onSubmit;
	
	// keypress
	// $input.addEventListener("keypress", onKeyInput);
}

function onSubmit() {
	addTagFromInput();
	return false;
}

function onKeyInput(event) {
	console.log(event);
	if (event.key != "Enter") return;
	addTagFromInput();
}

function addTagFromInput() {
	var name = $input.value.replace(/^\s+/, "");
	if (name.length < 1) return;
    addTag(name);
    console.log(name);
    addArray(name);
	 $input.value = "";
}

function addArray(name) {
    a[i]=name;
    console.log(a[i]);
    i++;
}




function addTag(name) {
	var $tag_li = document.createElement("li"),
		$tag_a = document.createElement("a");
	
	$tag_a.innerText = name;
	$tag_a.href = "#";
	$tag_a.addEventListener("click", function (event) {
		event.preventDefault();
		$tag_li.remove();
		return false;
	});
	
	$tag_li.appendChild($tag_a);
	
	
	var len = $list.children.length;
	$list.insertBefore($tag_li, $list.children[len-1]);
}
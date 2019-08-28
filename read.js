var storage = firebase.storage();
var storageRef = storage.ref();
//var pathReference = storage.ref('filess/csb1.pdf');
var gsReference = storage.refFromURL('gs://bucket/filess/csb1.pdf')
console.log(gsReference);

var List = document.getElementById("List");
List.innerHTML = "";

storageRef.child('filess/').listAll().then(function(result) {
    result.items.forEach(function(dataRef){
        console.log("img" + dataRef.toString());
        display(dataRef);

    })
});

function display(data){
    data.getDownloadURL().then(function(url){
        console.log(url);
    })
}
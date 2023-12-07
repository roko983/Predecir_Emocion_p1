
var prediccion1
var prediccion2
camera = document.getElementById("camera")
Webcam.attach(camera)
Webcam.set({
    width: 350,
    height: 300,
    image_format : 'png',
    png_quality:90
})


function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image' + '"src="'+data_uri+'"/>';
        
    });
}
classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/SXbAakvwg/model.json', modelLoaded);
function modelLoaded() {
    console.log("cargo el API")
}
function check() {
    img = document.getElementById('captured_image')
    classifier.classify(img, goResult)
    console.log("entro a check")
}

function goResult(error, results) {
    console.log("entro a goresult")
    if(error){
        
        console.error(error)
    }
    else {
        console.info(results)
        document.getElementById("result_emotion_name").innerHTML = results[0].label
        document.getElementById("result_emotion_name2").innerHTML = results[1].label
        prediccion1 = results[0].label
        prediccion2 = results[1].label
        if (prediccion1 == "feliz") {
            document.getElementById("update_emoji").innerHTML = "&#128512"
        }  
        if (prediccion1 == "triste") {
            document.getElementById("update_emoji").innerHTML = "&#128542"
        }
        if (prediccion1 == "enojado") {
            document.getElementById("update_emoji").innerHTML = "&#128545"
        }
        if (prediccion2 == "feliz") {
            document.getElementById("update_emoji").innerHTML = "&#128512"
        }  
        if (prediccion2 == "triste") {
            document.getElementById("update_emoji").innerHTML = "&#128542"
        }
        if (prediccion2 == "enojado") {
            document.getElementById("update_emoji").innerHTML = "&#128545"
        }
    }
}
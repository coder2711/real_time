//https://teachablemachine.withgoogle.com/models/bn96QA1ez/model.json

function preload(){

}

function setup(){
    canvas = createCanvas(250 , 250);
    canvas.center();
    videooo = createCapture(VIDEO);
    videooo.hide();
    moodel = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/bn96QA1ez/model.json' , got_results);

}

function got_results(){
    console.log("Model is loaded");
}

function draw(){
    image(videooo , 0 , 0 , 250 , 250);
    moodel.classify(videooo , gotResults);
}

function gotResults(error , result){
    if(error){
        console.error(error);
    }
     else{
         console.log(result);
         document.getElementById("Person").innerHTML = result[0].label;
         document.getElementById("Accuracy").innerHTML = result[0].confidence.toFixed(2)*100 + "%";
     }
}
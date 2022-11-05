gotResults_array=results;

function draw()
{
   image(img2,0,0, 640, 400);

 if(load_status!="")
 {
   for(i=0; i<object.length;i++)
   {
      percentage=floor(object[i].confidence*100);

      fill("#f0e589");
      text(object[i].label+" "+ percentage +"%", object[i].x+15, object[i].y+15);
      noFill();
      stroke("#f0e589")
      rect(object[i].x, object[i].y, object[i].width, object[i].height);
   }
 }
///////////////////////

}

function setup()
{
 canvas=createCanvas(640,400);
 canvas.center();


 object_detector=ml5.objectDetector("cocossd", modelLoaded);
 document.getElementById("status").innerHTML="status: detecting objects";

}

function modelLoaded()
{ 
    console.log("model is loaded");
    load_status="true";
    object_detector.detect( img2, gotResult);
}

function gotResult(error, results)
{
 if(error)
 {
    console.error(error);
 }
 else
 {
    console.log(results);
    object=results;
 }

 
}





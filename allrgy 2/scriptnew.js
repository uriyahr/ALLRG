$(document).ready(function(){
//    console.log("here");
});

var filter;
var printFood;
var ourData; 
var restaurant;


// tabletop code that turns the file into a json object called data
document.addEventListener('DOMContentLoaded', function() {
    var URL = "1beX_EbJAX2n4wFHuLdFHEk1vlxSPdbirjovCc2ZRK8o";
    Tabletop.init( { key: URL, callback: saveData, simpleSheet: true } )
});

//function called by the tabletop code: converts their json object to geoJSON format that we want
function saveData(data){
    ourData=data;
    console.log(ourData);
    showAppleMenu();
}



function filterData(){
    
    for(var i = 0; i< ourData.length; i++)
    {
        if(ourData[i][filter] === "FALSE") {
            //document.write(ourData[i]["entreename"]);
            var filtered = '<p>' + ourData[i]["entreename"] + '</p>'
            $("#filter").append(filtered);
            // document.getElementById("food").innerHTML.append(printFood);
        }
    }
} 

function filterRestaurants()
{
    for(var i =0; i <ourData.length; i++)
    {
        if("restaurantname"=== "BJ's Brewhouse")
        {
            if(ourData[i][filter] === "FALSE")
            {
                document.write(ourData[i]["entreename"])
            }
        }
        else
        {
            if(ourData[i][filter] === "FALSE")
            {
                document.write(ourData[i]["entreename"])
            }
        }
    }
}

function showAppleMenu()
{
     $("#apple").empty();
    for(var i =0; i < ourData.length; i++)
    {
        if(ourData[i]["restaurantname"]==="Applebee's ")
        {
             console.log(ourData[i]["entreename"]); 
            var lineItem = '<p>' + ourData[i]["entreename"] + '</p>';
            $("#apple").append(lineItem);
//            document.getElementById("apple").innerHTML= ourData[i]["entreename"];
//            document.write(ourData[i]["entreename"]);
           
//            document.write("<br>");
        }
    }
}

function showBJMenu()
{
    console.log(ourData);
    for(var i =0; i< ourData.length; i++)
    {
        if(ourData[i]["restaurantname"]==="BJ's Brewhouse")
        {
            console.log(ourData[i]["entreename"]);
            var lineItem = '<p>' + ourData[i]["entreename"] + '</p>';
            $("#bj").append(lineItem);

        }
    }
}



function filterDairy() {
  filter = "dairy";

}

function filterEggs() {
    filter = "eggs";
}

function filterNuts() {
    filter = "nuts";
}

function filterSoy() {
    filter = "soy";
      
}

function filterWheat() {
    filter = "wheat";
}


function filterFish() {
   filter = "fish";
}


function filterApplebees()
{
    restaurant = "Applebee's";
}

function filterBJs()
{
    restaurant = "BJ's Brewhouse";
}

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
    //console.log(ourData);
    var url = window.location.href;
    var lastPart = url.substr(url.lastIndexOf('/') + 1);
    if (lastPart === "filterBJ.html") 
        {
            showBJMenu();
        }
    else
        {
            showAppleMenu();
        }
   
}



function filterData(){
    
    for(var i = 0; i< ourData.length; i++)
    {
        if(ourData[i][filter] === "FALSE") {
            //document.write(ourData[i]["entreename"]);
            var filtered = '<p>' + ourData[i]["entreename"] + '</p>';
            $("#filter").append(filtered);
            // document.getElementById("food").innerHTML.append(printFood);
        }
    }
} 



function filterRestaurantsandData()
{   
    //goes through all the data from tabletop
    for(var i =0; i <ourData.length; i++)
    {
        //checks which restaurant the user chooses  
        if(ourData[i]["restaurantname"]=== "BJ's Brewhouse")
        {
            //empties out the all the menu items that showed up 
            $("#bj").empty();
            //checks if the allergen is in the dish
            if(ourData[i][filter] === "FALSE")
            {
                console.log(ourData[i]["entreename"]);
                //prints all menu items that do not contain the specific menu item chosen 
                var filtered = '<p>' + ourData[i]["entreename"] + '</p>';
                $("#filter").append(filtered);
            }
        }
        else
        {
            //checks which restaurant the user chooses 
            if(ourData[i]["restaurantname"]==="Applebee's ")
            {
                //empties out all the menu items that showed up 
                $("#apple").empty();
                //checks if the allergen is contained in the dish 
                if(ourData[i][filter] === "FALSE")
                {
                    console.log(ourData[i]["entreename"]);
                    //prints all menu items that do not contain the specific menu item chosen 
                    var filtered2 = '<p>' + ourData[i]["entreename"] + '</p>'; 
                    $("#filter2").append(filtered2);
                }
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
            //console.log(ourData[i]["entreename"]); 
            var lineItem = '<p>' + ourData[i]["entreename"] + '</p>';
            $("#apple").append(lineItem);

        }
    }
}


function showBJMenu()
{
     $("#bj").empty();
    for(var i =0; i< ourData.length; i++)
    {
        if(ourData[i]["restaurantname"]==="BJ's Brewhouse")
        {
             //console.log(ourData[i]["entreename"]); 
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

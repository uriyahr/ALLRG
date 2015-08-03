var filter;
var printFood;var ourData; 
var restaurant;

// tabletop code that turns the file into a json object called data
document.addEventListener('DOMContentLoaded', function() {
    var URL = "1beX_EbJAX2n4wFHuLdFHEk1vlxSPdbirjovCc2ZRK8o";
    Tabletop.init( { key: URL, callback: saveData, simpleSheet: true } )
})

//function called by the tabletop code: converts their json object to geoJSON format that we want
function saveData(data){
    ourData=data; 

    // document.getElementById("food") = ourData; 
}
function filterData(){
    for(var i = 0; i< ourData.length; i++)
    {
        if(ourData[i][filter] === "FALSE") {
            document.write(ourData[i]["entreename"]);
            // document.getElementById("food").innerHTML.append(printFood);
        }
    }
} 


function filterRestaurants()
{
            for(var i = 0; i <ourData.length; i++)
            {
                if(restaurant === "BJ's Brewhouse")
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



/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/

document.getElementById("name1").innerHTML = "Tay-Tay";



/*2. Replace the n/a with the following: 

Project Manager*/
document.getElementById('position2').innerHTML = "Project Manager";


/*3. Replace the n/a with the following:

Concatenation*/

document.getElementById('alias3').innerHTML = "Concatenation";



/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

document.getElementsByClassName('profile')[0].innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus non sapiente accusantium ex, modi aperiam iste aspernatur ipsum fuga consequuntur quas reprehenderit enim maxime laborum a minima quos ratione aliquid.';

/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/
document.getElementsByClassName('profile')[0].innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum unde quo et, quos aspernatur ullam earum facere beatae consequuntur officia assumenda laboriosam consectetur minus quae tempora, inventore blanditiis nostrum porro.';



/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/
var divElement = document.createElement("div");
divElement.id = "name7";
divElement.innerHTML = 'Chuck Norris';
nameBox.appendChild(divElement);
// document.appendChild('profile')[4].innerHTML = 
 
/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/

var grimDivElement = document.createElement("div");
grimDivElement.id = "alias8";
grimDivElement.innerHTML = 'The Purple Monster';
aliasBox.appendChild(grimDivElement);


//Final Boss5
/*8. Create your own profile.*/
var myName = document.createElement("div");
myName.id = "name9";
myName.innerHTML = "Rhaynedel Oclit";
document.getElementsByClassName('block3 col-sm-4')[2].appendChild(myName);

var myPosition = document.createElement("div");
myPosition.id = "position9";
myPosition.innerHTML = "The Bride";
document.getElementsByClassName('block3 col-sm-4')[2].appendChild(myPosition);

var myAlias = document.createElement("div");
myAlias.id = "alias9";
myAlias.innerHTML = "Miss McSassy";
document.getElementsByClassName('block3 col-sm-4')[2].appendChild(myAlias);var myAlias = document.createElement("div");

var myProfile = document.createElement("p");
myProfile.id = "profile9";
myProfile.innerHTML = "A member of the Deadly Viper Assassination Squad, led by my lover, out for revenge for the child I lost to betrayal.";
document.getElementsByClassName('block3 col-sm-4')[2].appendChild(myProfile);


 


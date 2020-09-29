
//console.log('mon message');
//console.error('mon message erreur');
/*document.addEventListener('click',function(){
   alert("message");
});
*/
const myButton = document.getElementById('bouton-bleu');
if(myButton != null){
myButton.addEventListener ('click',function()
{
    const table = document.querySelector('table');
    table.style.display ="none"; 
});
}

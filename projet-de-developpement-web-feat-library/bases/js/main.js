// console.log('Mon message');
// console.error('Mon message erreur');
//document.addEventListener('click', function() {
//    alert('MESSAGE');
//});

const myButton = document.getElementById('bouton-bleu');

    myButton.addEventListener('click', function(){
       const table = document.querySelector('table');
       table.style.display = 'none';
    });
    else 
    {

        table.style.display = 'block';
    }
     };
}


const mysupbt = document.getElementById('bouton-rouge');
    mysupbt.addEventListener('click', function(){
       const table = document.getElementsByTagName('tr').length;
       for i=1;i<taille;i++{
           document.querySelectorAll('tr')[i].lastElementChild.innerHTML = '';
       }
    });

/*const btns = document.getElementsByClassName('btn');

btns[0].addEventListener('click', function(){
    alert('MESSAGE');
});
*/
/*$('#bouton-bleu').on('click',function()
{
    $('table').find('tr').last().remove();
});
*/

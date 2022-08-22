

document.getElementById('selected-btn1').addEventListener('click',function(){

    

    //length check
    const selectedPlayerlength= document.querySelectorAll('#selected-player li');
    if(selectedPlayerlength.length < 5){
        //playerName get
     const name = document.getElementById('selected-name1');
    const elemet= name.innerText;
        //add hobe
    const selectedPlayer= document.getElementById('selected-player');
    const createElement= document.createElement('li');
    createElement.innerText=elemet;

    selectedPlayer.appendChild(createElement);
    // console.log(createElement);
    
    }else{
    alert('besi ache');
    }

});
document.getElementById('selected-btn2').addEventListener('click',function(){

    //length check
    const selectedPlayerlength= document.querySelectorAll('#selected-player li');
    if(selectedPlayerlength.length <5){
        //player Name get
        const name = document.getElementById('selected-name2');
        const elemet= name.innerText;

        // add hobe
        const selectedPlayer= document.getElementById('selected-player');
        const createElement= document.createElement('li');
        createElement.innerText=elemet;

        selectedPlayer.appendChild(createElement);
        // console.log(createElement);

    }else{
    alert('besi ache');
    }

});

document.getElementById('selected-btn3').addEventListener('click',function(){
    

    //length check
    const selectedPlayerlength= document.querySelectorAll('#selected-player li');
    if(selectedPlayerlength.length < 5){
        //player name get
        const name = document.getElementById('selected-name3');
    const elemet= name.innerText;

    //add hobe
    const selectedPlayer= document.getElementById('selected-player');
    const createElement= document.createElement('li');
    createElement.innerText=elemet;

    selectedPlayer.appendChild(createElement);
    // console.log(createElement);
    
    }else{
    alert('besi ache');
    }

});
document.getElementById('selected-btn4').addEventListener('click',function(){

    
    
    //length check
    const selectedPlayerlength= document.querySelectorAll('#selected-player li');
    if(selectedPlayerlength.length < 5){
        //player name get
        const name = document.getElementById('selected-name4');
    const elemet= name.innerText;
    //add hobe 
    const selectedPlayer= document.getElementById('selected-player');
    const createElement= document.createElement('li');
    createElement.innerText=elemet;

    selectedPlayer.appendChild(createElement);
    // console.log(createElement);

    }else{
    alert('besi ache');
    }

});

document.getElementById('selected-btn5').addEventListener('click',function(){

    //length check
    const selectedPlayerlength= document.querySelectorAll('#selected-player li');
    if(selectedPlayerlength.length <= 5){
        //player name get
        const name = document.getElementById('selected-name5');
    const elemet= name.innerText;
    
    //add hobe
    const selectedPlayer= document.getElementById('selected-player');
    const createElement= document.createElement('li');
    createElement.innerText=elemet;

    selectedPlayer.appendChild(createElement);
    // console.log(createElement);
    }else{
    alert('besi ache');
    }

});
document.getElementById('selected-btn6').addEventListener('click',function(){

    //length check
    const selectedPlayerlength= document.querySelectorAll('#selected-player li');
    if(selectedPlayerlength.length < 5){
        //player name get
        const name = document.getElementById('selected-name6');
    const elemet= name.innerText;
    
    //add hobe
    const selectedPlayer= document.getElementById('selected-player');
    const createElement= document.createElement('li');
    createElement.innerText=elemet;

    selectedPlayer.appendChild(createElement);
    // console.log(createElement);
    }else{
    alert('besi ache');
    }
    

});


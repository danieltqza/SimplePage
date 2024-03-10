let moonbtn = document.getElementById('moonbtn');
let body = document.body;
let background = false;
let sunbtn = document.getElementById('sunbtn');
let header = document.getElementById('header');
let aprov = document.getElementById('aprov')
let aprov2 = document.getElementById('aprov2')


    moonbtn.addEventListener('click', function() {
        if (background == false) {
            body.style.backgroundColor = '#111629';
            header.style.color = 'white';
            aprov.style.color = 'white'
            aprov2.style.color = 'white'
            moonbtn.hidden = true


        } else {
            body.style.backgroundColor = '#F2F9FF';
            header.style.color = '#223343'

            moonbtn.hidden = true
        }
    });

    sunbtn.addEventListener('click', function() {
        if (background){
            body.style.backgroundColor = '#111629'
            moonbtn.hidden = false
            header.style.color = 'white';
        } else{
            body.style.backgroundColor = '#F2F9FF'
            header.style.color = '#223343'
            moonbtn.hidden = false
            aprov.style.color = 'black';
            aprov2.style.color = 'black';
        }
    })
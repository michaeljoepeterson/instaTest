function getInsta(){
    let options = {
        method:'GET',
        url:'https://graph.instagram.com/17841401954357107?fields=id,username&access_token=IGQVJYVDE4UjQ5clFENWR0U29ZATkpta3piOG1mUm9aY0RLZAU5XM2ZAMZAEdiSWUtbzVxaGV0dkJTVU90bVBjaWx1VGFQc1NBcFVQSmtQOFZAGc0RZAdHBRUFVEQVNnMUtqWnVFcjdsb1BVRVFsRlU1MHJDT3ZAMZAXFJRS12ZAUZA3'
    };
    $.ajax(options)

    .then(response => {
        console.log('insta resp: ', response);
    })

    .catch(err => {
        console.log('error getting: ',err);
    });
}

getInsta();
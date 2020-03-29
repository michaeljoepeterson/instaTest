function instagramDataConvert(sourceData,feedLength){
    feedLength = feedLength ? feedLength : 10;
    let data = [];
    let dataStructure = {
        link:'',
        images:{
            standard_resolution:{
                url:''
            }
        }
    };

    for(let i = 0;i < feedLength;i++){
        let singleSrc = sourceData[i];
        let singleData = {
            link:singleSrc.permalink,
            images:{
                standard_resolution:{
                    url:singleSrc.media_url
                }
            }
        };
        data.push(singleData);
    }

    return data;
}

function getInsta(){
    let feedLength = 11;

    let options = {
        method:'GET',
        url:'https://graph.instagram.com/17841401297140449/media?fields=id,caption,media_type,media_url,permalink&access_token=IGQVJWR3JOdV9wLXZAXdEFjd2QzaDdSZAGctRThCREpWTHNPcWc2ZAmZAyYktDeE5GTGFRSWgyQUtLWXJId0VNOHJsWm5ZAaGtqWWZAXOFZAjZAE1yX0N6VXVKZA3dPQkdJTVpnYV9CTGRFeFZApNnlIQ3l5MlJjLXNkUnY5eElfaFdv'
    };
    $.ajax(options)

    .then(response => {
        let data = instagramDataConvert(response.data,feedLength);
        console.log('insta resp: ', response);
        console.log('insta converted: ', data);
    })

    .catch(err => {
        console.log('error getting: ',err);
    });
}

//likely have to change urls in current site
//need to test to see what data comes back
//need to test req with old args
//figure out how long key lasts

getInsta();

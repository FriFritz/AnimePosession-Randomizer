var src = 'https://www.reddit.com/r/pulpandpin/comments/qlnb8q/monday_rayne_by_nixri_2021/'

function fetchMemes(){
    fetch('https://www.reddit.com/r/hentai/random.json')
    .then(function(res) {
        return res.json();   // Convert the data into JSON
    })
    .then(function(data) {
        console.log(data[0].data.children[0].data);
        document.getElementById('girl').src=data[0].data.children[0].data.url
        src = 'https://www.reddit.com' + data[0].data.children[0].data.permalink
    })
    .catch(function(err) {
        console.log(err);   // Log error if any
    });

}


function copyImageURL(){
    navigator.clipboard.writeText(document.getElementById('girl').src);
}

function openSource(){
    window.open(src);
}
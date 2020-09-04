$(document).ready(()=>{
    $('s#searchForm').on('sumit',(e)=>{
        let searchText = $('#searchText').val();
        e.preventtDefault();
    });
});

function getMovies(searchText){
    axios.get('http://www.omdbapi.com?s='+searchText)
    .then((response)=>{
        console.log(response);

    })
    .catch((err)=>{
        console.log(err);
    });

}
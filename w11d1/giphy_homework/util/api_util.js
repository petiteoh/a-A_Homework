

export const fetchSearchGiphys = searchTerm => {
    return $.ajax({
        method: 'GET',
        url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=U0zwdSmwBN0F4JxEVF90j94pp2SzIblT&limit=2`
    });
};
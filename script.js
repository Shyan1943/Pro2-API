const APIKEY = "5eb010234064fd3804165239";
const APIURL = "https://sample-6ca3.restdb.io/rest/sailing-schedule-may-2020";

$(function(){
    $('#search-btn').click(function(){
        axios.get(APIURL, {
            params: {
                apikey:APIKEY
            }
        }).then(function(response){
            let data = response.data;

            for (let allData of Object.entries(data)){
                console.log(allData)
   
                $('#table-data').append(`
                <tr>
                    <td>${allData["PORT OF LOADING"]}</td>
                    <td>${allData["PORT OF DISCHARGING"]}</td>
                    <td>${allData.VESSEL}</td>
                </tr>
                `);
            }
        })
    });
});





/////////////////////////////////////
// GET DATA FROM GOOGLE SHEETS
/////////////////////////////////////

$.ajax("https://spreadsheets.google.com/feeds/list/1FRym7aCbqwt12Xqfsnt2gly2MUeSNl8mZK7w3RqiLLY/1/public/full?alt=json")
// then for when the data arrives
.then((data) => {
    console.log(data)
    // Map over the data, generate a simpler dataset
    const projects = data.feed.entry.map((item) => {
        return {
            description: item.gsx$description.$t,
            giturl: item.gsx$giturl.$t,
            liveurl: item.gsx$liveurl.$t,
            image: item.gsx$image.$t,
            project: item.gsx$project.$t
        }
    })
    console.log(projects)

    /////////////////////////////////////////////////
    // jQuery to render your projects below!!!!
    /////////////////////////////////////////////////
})
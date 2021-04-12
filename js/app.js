

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

    const final = projects.map((project) => {
        return `
        <my-card name=${project.name} git=${project.git} live=${project.live} img=${project.img}></my-card>`
    })

    console.log(final)

    const $section = $('section')

    $section.html(final.join (""))

    /////////////////////////////////////////////////
    // jQuery to render your projects below!!!!
    /////////////////////////////////////////////////
    
})

//SANDWICH CODE

const $sandwich = $("#sandwich")
const $menu = $("#menu")

$sandwich.on("click", (event) => {

    if ($menu.css("display") === "flex") {
        $menu.css("display", "none")
    } else {
        $menu.css("display", "flex")
    }

})
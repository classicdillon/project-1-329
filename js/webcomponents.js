// USE THIS FILE TO WRITE ANY WEB COMPONENTS, use example for reference

//////////////////////////////////
// Web Components Classes Here
//////////////////////////////////

// class TemplateExample extends HTMLElement {
//     constructor(){
//         super()

//         this.innerHTML = `<h1>Hello World</h1>`
//     }
// }

class MyCard extends HTMLElement {
    constructor() {
        super()

       const name = this.getAttribute("name")
       const git = this.getAttribute("git")
       const live = this.getAttribute("live")
       const img = this.getAttribute("img")


       this.innerHTML = `
       <sl-card>
       <h1>${name}</h1>
       <img src=${img} alt=${name} slot="image">
       <sl-button-group>
  <a href=${git}><sl-button>GIT</sl-button></a>
  <a href=${live}><sl-button>LIVE</sl-button></a>
</sl-button-group>
       
       
       </sl-card>`
    }
}



/////////////////////////////////
// Register the HTML Tag here
/////////////////////////////////

// customElements.define("template-example", TemplateExample)
customElements.define("my-card", MyCard)
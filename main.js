const body = document.querySelector("body")
const back = document.querySelector(".back-btn")
const Bookmark = document.querySelector(".img-btn")
const slectOne = document.querySelector(".One")
const selectTwo = document.querySelector(".two")
const selectThird = document.querySelector(".Third")
const bookmarkImg = document.querySelector(".mark-img")

const text = document.querySelector(".mark-txt")
Bookmark.addEventListener("click", Bookmarked)
back.addEventListener("click", BackThisProject)

function Bookmarked() {
    bookmarkImg.style.color = "hsl(176, 50%, 47%)"
    text.classList.toggle("bookmarked")
}

function BackThisProject() {
    const div = document.createElement("div")
    div.classList.add("popUp")
     div.innerHTML = `
       <img class="close"  src="./images/icon-close-menu.svg" />
        <div class="this-head">
        <h3>Back this project</h3>
         <p>Want to support us in bring Matercraft Bamboo Monitor Riser out in the world?</p>
       </div>

      <div class="Card noReward">
       <div class="checked">
           <p class="circle"></p>
       </div>
       <div class="body">
         <h3>Pledge with no reward</h3>
         <p>
         choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.
         </p>
      </div>
     </div>

      <div class="card-box">
       <div class="Card bamboo">
            <div class="checked">
            <p class="circle"></p>
            </div>
         <div class="body">
          <div class="thead">
            <div class="left-side">
              <h3>BambooStand</h3>
              <h3 class="two-five">Pledge $25 or more</h3>
            </div>
            <h3 class="right-side">101 <span> left</span></h3>
          </div>
           
          <p class="describe">
           You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a speceial Backer memberlist.
          </p>
          </div>
        </div>
        <div class="bid">
        <h3 class="bid-txt">Enter your pledge</h3>
         <div className="bid-btns">
         <button class="btn count">$ 25 |</button>
         <button class="btn continue">Continue</button>
         </div>
      </div>
      </div>

    <div class="card-box">
     <div class="Card Edition">
      <div class="checked">
      <p class="circle"></p>
      </div>
       <div class="body">
        <div class="thead">
         <div class="left-side">
           <h3>Black Edition Stand</h3>
           <h3 class="two-five">Pledge $25 or more</h3>
         </div>
         <h3 class="right-side">64 <span> left</span></h3>
        </div>
        <p class="describe">
        You get an Blcack Special Edition computer stand and a personal thank you.
        You'll be added to our Black member list. Shipping is included.
        </p>
        </div>
     </div>
      <div class="bid">
         <h3 class="bid-txt">Enter your pledge</h3>
         <div className="bid-btns">
         <button class="btn count">$ 75 |</button>
         <button class="btn continue">Continue</button>
         </div>
      </div>
     </div>
      
     <div class="card-box">
      <div class="Card Mahogany">
      <div class="checked">
       <p class="circle"></p>
      </div>
       <div class="body">
        <div class="thead">
         <div class="left-side">
           <h3>Mahogany Special Edition</h3>
           <h3 class="two-five">Pledge $200 or more</h3>
         </div>
         <h3 class="right-side">0 <span> left</span></h3>
        </div>
        <p class="describe">
        You get an Blcack Special Edition computer stand and a personal thank you. <br>
        You'll be added to our Black member list. Shipping is included.
        </p>
        </div>
      </div>
     </div>
    </div>
   ` 
    
    body.appendChild(div)
    div.addEventListener('click', close)
}

function close(e) {
   const el = e.target
  if (el.matches(".close")) {
      el.parentElement.style.display = "none"
      support()
  }
 
  if ( el.matches(".checked") ) {
         el.firstElementChild.classList.toggle("show")
         if (el.parentElement.matches(".bamboo")) {
           el.parentElement.parentElement.classList.toggle("show-box")
           el.parentElement.parentElement.lastElementChild.classList.toggle("show-bid")
           el.parentElement.parentElement.parentElement.classList.toggle("popUp-height")
           el.parentElement.classList.toggle("card-shadow")  
         }
         if (el.parentElement.matches(".Edition")) {
          el.parentElement.parentElement.classList.toggle("show-box")
          el.parentElement.parentElement.lastElementChild.classList.toggle("show-bid")
          el.parentElement.parentElement.parentElement.classList.toggle("popUp-height")
          el.parentElement.classList.toggle("card-shadow")  
         }
  }
}

function support() {
   console.log("Hello")
   const BoxDiv = document.createElement("div")
    BoxDiv.classList.add("contents")
    BoxDiv.innerHTML = `
   
        <div class="support">
          <img class="checking" src="images/icon-check.svg" />
          <h1>Thanks for your suport</h1>

          <p>Your pledge brings us one step close to <br> sharing Mastercraft Bamboo Monitor Riser <br> worldwide. You will get an email once our campaign is completed.</p>

          <button class="Gotit">
           Got it!
          </button>
        </div>
   `
   body.appendChild(BoxDiv)
   BoxDiv.addEventListener("click", hide)
}

function hide(e) {
   const el = e.target
   console.log(el)
   if (el.matches(".Gotit")) {
      el.parentElement.parentElement.remove(el.parentElement)
   }

}





























































































































































































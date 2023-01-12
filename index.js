let peopleamount = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    peopleamount += 1
    countEl.textContent = peopleamount
}

function decrement() {
    peopleamount -= 1
    countEl.textContent = peopleamount
}

function save() {
    let countanddash = peopleamount + " - "
    console.log(countEl.textContent)
    saveEl.textContent+= countanddash
    peopleamount = 0
    countEl.textContent = peopleamount
}
 
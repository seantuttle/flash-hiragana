let hBtns = document.getElementsByClassName("h-btn")

let hClasses = []

let allSelected = false

let noneSelected = true

for (let i = 0; i < hBtns.length; i++) {
    hBtns[i].onclick = async () => {
        if(hClasses.indexOf(hBtns[i].id) < 0) {
            hClasses.push(hBtns[i].id)
            hBtns[i].style.borderColor = "red"
            noneSelected = false
        } else {
            hClasses.splice(hClasses.indexOf(hBtns[i].id), 1)
            hBtns[i].style.borderColor = "transparent"
            if (hClasses.length === 0) {
                noneSelected = true
            }
        }
    }
}

document.getElementById("go-btn").addEventListener("click", async () => {
    if (!noneSelected) {
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = "/hiragana/P" + hClasses.join("")
        console.log(a.href)
        document.body.appendChild(a)
        a.click()
    } else {
        alert("Please select at least one hiragana set")
    }
});

document.getElementById("select-all-btn").addEventListener("click", async () => {
    for (let i = 0; i < hBtns.length; i++) {
        if(!allSelected) {
            if (hClasses.indexOf(hBtns[i].id) < 0) {
                hClasses.push(hBtns[i].id)
                hBtns[i].style.borderColor = "red"
            }
        } else {
            let index = hClasses.indexOf(hBtns[i].id)
            if(index >= 0) {
                hClasses.splice(index, 1)
                hBtns[i].style.borderColor = "transparent"
            }
        }
    }
    if(allSelected) {
        noneSelected = true
        document.getElementById("select-all-btn").innerHTML = "Select All"
    } else {
        noneSelected = false
        document.getElementById("select-all-btn").innerHTML = "Unselect All"
    }

    allSelected = !allSelected
});
// Heart Button Activation

let heartIcon = document.getElementsByClassName("fa-heart");

for (let heart of heartIcon) {
  heart.addEventListener("click", function () {
    let heartCount = Number(document.getElementById("heart-count").innerText);
    let finalCount = heartCount + 1;
    document.getElementById("heart-count").innerText = finalCount;
  });
}

// Copy Button Activation

let copyButton = document.getElementsByClassName("copy-button");

for (let copies of copyButton) {
  copies.addEventListener("click", function () {
    let callNumber =
      copies.parentNode.parentNode.children[2].children[0].innerText;
    alert("Copied: " + callNumber);
    navigator.clipboard.writeText(callNumber);
    let copyCount = Number(document.getElementById("copy-count").innerText);
    let finalCount = copyCount + 1;
    document.getElementById("copy-count").innerText = finalCount;
  });
}

// Call Button Activation

let callButton = document.getElementsByClassName("call-button");

for (let call of callButton) {
  call.addEventListener("click", function () {
    let callNumber =
      call.parentNode.parentNode.children[2].children[0].innerText;
    let serviceCall =
      call.parentNode.parentNode.children[1].children[0].innerText;
    let coinCount = Number(document.getElementById("coin-count").innerText);
    let callHistory = document.getElementById("call-history");
    let timesToday = {
      times: new Date().toLocaleTimeString(),
    };
    if (coinCount >= 20) {
      let finalCount = coinCount - 20;
      document.getElementById("coin-count").innerText = finalCount;
      alert("Calling" + "..." + "\n" + serviceCall + " (" + callNumber + ")");
      let history = document.createElement("div");
      history.innerHTML = `
        <div
            class="bg-[#f3f3f3]  rounded-lg px-5 py-5 flex items-center justify-between w-full my-4">
            <div>
                <h2 class="font-bold">${serviceCall}</h2>
                <p class="font-semibold text-[#5C5C5C]">${callNumber}</p>
            </div>
            <div>
                <p class=" w-[80px] text-[13px] ">${timesToday.times}</p>
            </div>
        </div>
        `;
      callHistory.append(history);
    } else {
      alert("Lack of coins. You need at least 20 coins to make a call.");
      history.innerText = "";
    }
  });
}

// Clear Button Activation

let clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', function(){
    let callHistory = document.getElementById("call-history");
    callHistory.innerHTML = '';
})
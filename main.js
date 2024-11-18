// Thay đổi nội dung búc thư ở đây
var letterContent ="💪 Chào cậu bạn cùng lớp tuyệt vời! 🎉 Hôm nay là boy day, ngày đặc biệt để tôn vinh những chàng trai như cậu – người luôn mang đến nụ cười, sự hài hước, và không ít lần cứu nguy cho cả lớp! 😊Cậu không chỉ là một người bạn đáng tin cậy mà còn là nguồn cảm hứng để cả lớp vượt qua những giờ học căng thẳng. 🎒 Mỗi lần cậu cười, bầu không khí trở nên tươi sáng hơn, và mỗi lần cậu giơ tay phát biểu (dù đúng hay sai), cả lớp lại có thêm lý do để trêu đùa thật vui. 😆Chúc cậu luôn đẹp trai, học giỏi, và đạt được những gì cậu mong ước! Mong rằng nụ cười rạng rỡ của cậu sẽ luôn ở bên cạnh chúng mình. 🌟 Hãy mãi là boy chất chơi và cùng tụi mình tạo thêm thật nhiều kỷ niệm đáng nhớ nhé! 💥Chốt lại một câu: Cậu mà không có thì cả lớp mất vui thật sự đó!🎊"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 20 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
const generateBtn = document.querySelector('form button')
const qrCodeBox = document.querySelector('.qr-code')
const qrInput = document.querySelector('form input')
const qrImage = document.querySelector('.qr-code img')

generateBtn.addEventListener('click' , () => {
    let qrValue = qrInput.value
    if(!qrValue){
        return alert('لطفا یه متن یا آدرس داخل کادر وارد کن!')
    }
})
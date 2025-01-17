function changeBackgroundColor() {

  const colorPicker = document.querySelector('.js-color-picker')
  const backgroundColorButton = document.querySelector('.js-change-bg-color');
  const paragraphs = document.querySelectorAll('p')

  // converting hex to RGB
  // parseInt converts hex string to integer
  // hex.slice reason use 1, 3 gets first 2 values of hex value. 
  // 16 tells parseInt that the string should be interpreted as a base 16 number. 

  function getBrightness(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // Use the Luma formula to calculate brightness
    // based on how our eyes perceive brightness, we are most sensitive to green hence the higher coefficient.
    
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }

  backgroundColorButton.addEventListener('click', () => {
    const selectedColor = colorPicker.value;
    const brightness = getBrightness(selectedColor);

    document.body.style.backgroundColor = selectedColor;

    // looping through each paragraph to adjust color
    paragraphs.forEach(paragraph => {
      if (brightness <128) {
        paragraph.style.color = 'white'
      } else {
        paragraph.style.color = 'black'
      }
    })
  })
}

changeBackgroundColor();
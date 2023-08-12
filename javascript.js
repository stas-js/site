function allocateVAT() {
        let beautyDigit = document.getElementById("input_price").value;
        let cursorPosition = document.getElementById("input_price").selectionStart;
        let strLength = beautyDigit.length;
        let difference = strLength - cursorPosition;
        let newCursorPosition;

        beautyDigit = formatting(beautyDigit);
        let newStrLength = beautyDigit.length;

        switch (true) {
            case difference === 0:
                newCursorPosition = newStrLength;
                break;

            case newStrLength === strLength:
                newCursorPosition = newStrLength - difference;
                break;

            case newStrLength > strLength:
                let array = beautyDigit.split('')
                if (array[cursorPosition] === " ") {
                    difference = difference + 1
                }
                newCursorPosition = newStrLength - difference;
                break;

            case newStrLength < strLength:
                newCursorPosition = newStrLength - difference;
                if (newCursorPosition < 0) {
                    newCursorPosition = 0
                }

                break;
        }

        document.getElementById("input_price").value = beautyDigit;
        document.getElementById("input_price").setSelectionRange(newCursorPosition, newCursorPosition);

        let input_price = toDigit(beautyDigit);
        let input_VAT_percent = document.getElementById("input_VAT").value;
        cursorPosition = document.getElementById("input_VAT").selectionStart;
        let withPercent = addPercent(input_VAT_percent)
        document.getElementById("input_VAT").value = withPercent;
        document.getElementById("input_VAT").setSelectionRange(cursorPosition, cursorPosition);
        input_VAT_percent = toDigit(input_VAT_percent)
        let output_VAT = +(input_price * input_VAT_percent / (100 + input_VAT_percent)).toFixed(2);
        let result = (input_price - output_VAT).toFixed(2);
        result = result.replace(/\./, ',').replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        output_VAT = output_VAT.toFixed(2).replace(/\./, ',').replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        input_price = input_price.toFixed(2).replace(/\./, ',').replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        document.getElementById("total-3").textContent = "НДС " + input_VAT_percent + " %:"
        document.getElementById("total-4").textContent = result + " руб."
        document.getElementById("total-5").textContent = output_VAT + " руб."
        document.getElementById("total-6").textContent = input_price + " руб."
    }

module.exports = function toReadable (number) {
        const ones = [
            '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
        ];
    
        const tens = [
            '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
        ];
    
        if (number === 0) return 'zero';
    
        let result = '';
    
        if (number >= 100) {
            const hundredPart = Math.floor(number / 100);
            result += ones[hundredPart] + ' hundred';
            number %= 100;
            if (number > 0) result += ' ';
        }
    
        if (number >= 20) {
            const tenPart = Math.floor(number / 10);
            result += tens[tenPart];
            number %= 10;
            if (number > 0) result += ' ';
        }
    
        if (number > 0 && number < 20) {
            result += ones[number];
        }
    
        return result.trim();
     
}

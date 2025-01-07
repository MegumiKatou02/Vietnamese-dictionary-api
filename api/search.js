const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const { word } = req.query;
  if (!word) {
    return res.status(400).json({ message: "Vui lòng nhập một từ để tra cứu!" });
  }

  const filePath = path.join(process.cwd(), 'vietnamese_words.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Lỗi khi đọc tệp JSON' });
    }

    const words = JSON.parse(data).map(item => item.text.toLowerCase());
    const isValid = words.includes(word.toLowerCase());

    res.json({ text: word, valid: isValid });
  });
};

const fs = require('fs');
const path = require('path');
const url = require('url');

module.exports = (req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const word = queryObject.word?.toLowerCase();
  const suggestionEnabled = queryObject.suggestion === 'true';

  if (!word) {
    return res.status(400).json({ message: "Thiếu tham số 'word'" });
  }

  const filePath = path.join(__dirname, '../vietnamese_words.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Lỗi khi đọc tệp JSON' });
    }

    const words = JSON.parse(data).map(item => item.text.toLowerCase());
    const isValid = words.includes(word);

    let response = { text: word, valid: isValid };

    if (suggestionEnabled) {
      response.suggestions = words.filter(w => w.startsWith(word) && w !== word);
    }

    res.json(response);
  });
};

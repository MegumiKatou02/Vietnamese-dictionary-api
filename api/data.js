const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const filePath = path.join(__dirname, '../vietnamese_words.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Lỗi khi đọc tệp JSON' });
    }
    res.json(JSON.parse(data));
  });
};

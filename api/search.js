const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const queryWord = req.query.word?.trim().toLowerCase();
  const suggestionEnabled = req.query.suggestion === 'true';
  const nextEnabled = req.query.next === 'true';
  const limit = req.query.limit ? parseInt(req.query.limit) : null; // không giới hạn

  if (!queryWord) {
    return res.status(400).json({ message: "Thiếu tham số" });
  }

  const filePath = path.join(__dirname, '../vietnamese_words.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Lỗi khi đọc tệp JSON' });
    }

    try {
      const wordsData = JSON.parse(data);
      const foundWord = wordsData.find(item => item.text.toLowerCase() === queryWord);

      let response = { text: queryWord, valid: !!foundWord };

      if (suggestionEnabled) {
        let suggestions = wordsData
          .filter(item => item.text.toLowerCase().startsWith(queryWord + " "))
          .map(item => item.text);
          
        if (limit !== null) {
          suggestions = suggestions.slice(0, limit);
        }
        
        response.suggestions = suggestions;
      }

      if (nextEnabled) {
        const words = queryWord.split(' ');
        const lastWord = words[words.length - 1];
        
        let nextWords = wordsData
          .filter(item => item.text.toLowerCase().startsWith(lastWord + " "))
          .map(item => item.text);
          
        if (limit !== null) {
          nextWords = nextWords.slice(0, limit);
        }
        
        response.next = nextWords;
      }

      res.json(response);
    } catch (parseError) {
      return res.status(500).json({ message: 'Lỗi khi xử lý dữ liệu JSON' });
    }
  });
};
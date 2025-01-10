const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    const apiDir = path.join(__dirname, 'api'); 

    if (!fs.existsSync(apiDir)) {
        return res.status(404).json({
            status: 404,
            message: 'API directory not found'
        });
    }

    fs.readdir(apiDir, (err, files) => {
        if (err) {
            return res.status(500).json({ 
                status: 500,
                message: `Error reading API directory: ${err.message}`
            });
        }

        const endpoints = files
            .filter(file => file.endsWith('.js') && !file.startsWith('.')) 
            .map(file => `api/${file.replace('.js', '')}`); 

        res.json({ 
            status: 200,
            endpoints
        });
    });
};

const youtubedl = require('youtube-dl');

const downloadYT = (req, res) => {
    const videoUrl = req.query.url;

    if (!videoUrl) {
        return res.status(400).json({ error: 'URL is required' });
    }

    youtubedl.getInfo(videoUrl, (err, info) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to retrieve video info' });
        }

        const videoFormat = youtubedl.chooseFormat(info.formats, { quality: 'highest' });

        res.json({
            title: info.title,
            url: videoFormat.url
        });
    });
};

module.exports = downloadYT;

const ytdl = require('ytdl-core');

const downloadController = async (req, res) => {
    try {
        const url = req.query.url;

        if (!url || typeof url !== 'string') {
            return res.status(400).json({ error: 'Invalid URL provided' });
        }

        const videoId = await ytdl.getURLVideoID(url);

        let metaInfo;
        try {
            metaInfo = await ytdl.getInfo(url);
        } catch (error) {
            if (error.name === 'MinigetError' && error.statusCode === 410) {
                return res.status(404).json({ error: 'Requested video is no longer available' });
            }
            throw error; // Rethrow other errors
        }

        const data = {
            url: 'https://www.youtube.com/embed/' + videoId,
            info: metaInfo.formats
        };

        return res.status(200).json(data);
    } catch (error) {
        console.error('Error in downloadController:', error);
        return res.status(500).json({ error: 'Failed to process request' });
    }
};

module.exports = downloadController;

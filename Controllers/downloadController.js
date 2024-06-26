const ytdl = require('ytdl-core');

const downloadController = async (req, res) => {
    try {
        const url = req.query.url;
        console.log('Requested URL:', url);

        const videoId = await ytdl.getURLVideoID(url);
        console.log('Video ID:', videoId);

        const metaInfo = await ytdl.getInfo(url);
        console.log('Meta Info:', metaInfo);

        let data = {
            url: 'https://www.youtube.com/embed/' + videoId,
            info: metaInfo.formats
        };

        return res.send(data);
    } catch (error) {
        console.error('Error occurred while downloading:', error);
        return res.status(500).send('Error occurred while downloading: ' + error.message);
    }
};

module.exports = downloadController;

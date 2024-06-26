const ytdl = require('ytdl-core');

const downloadController = async (req, res) => {
    try {
        const url = req.query.url
        const videoId = await ytdl.getURLVideoID(url)
        const metaInfo = await ytdl.getInfo(url)
        let data = {
            url: 'https://www.youtube.com/embed/' + videoId,
            info: metaInfo.formats
        }
        return res.send(data)
    } catch (error) {
        return res.status(500)
    }
};

module.exports = downloadController;

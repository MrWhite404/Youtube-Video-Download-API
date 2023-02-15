const express = require("express");
const ytdl = require("ytdl-core");
const cors = require("cors");

const app = express()

app.use(cors());

app.get("/download", async (req, res) => {
    try {
        const url = req.query.url;
        const videoId = await ytdl.getURLVideoID(url);
        const metInfo = await ytdl.getInfo(url);

        let data = {
            url: 'https://wwww.youtube.com/embed/' + videoId,
            thumbnail: "https://i.ytimg.com/vi/" + videoId + "/0.jpg",
            title: "Available Video Formats",
            info: metInfo.formats
        }
        return res.send(data)
    } catch (error) {
        return res.status(500)
    }
})



app.listen(3000, () => {
    console.log("Server Started Successfully");
})

import Jimp from "jimp";
import path from "path";

let upload_path_root = path.join(`${__dirname}../../../public/uploads`);


/**
 * @class Images
 */
class Images {
    /**
     * Create thumbnail
     * @param {*} req 
     * @param {*} res 
     * 
     */
    static createThumbnail(req, res) {
        const newImage = `${upload_path_root}/newfile.jpg`;
        Jimp.read(req.body.image).then(image => [
            image.resize(50,50).quality(90).write(newImage),
            res.status(200).json({
                path: newImage,
                message: "Successful"
            })
        ]).catch(err => {
            res.send("Error occurred");
        })
    }

    static sample() {
        return 'Hello';
    }
}


export default Images;
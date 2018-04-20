import Users from '../controllers/users';
import Images from '../controllers/images';
import Json from '../controllers/jsonPatch';
import signInValidator from '../middleware/signInValidator';
import checkValidURl from '../middleware/imageUrlValidator';
import validateJsonObject from '../middleware/jsonPatchValidator';
import auth from '../middleware/auth';


export default (app) => {
    app.post('/auth/login', signInValidator, Users.signIn);
    app.patch('/json/patch', auth, validateJsonObject,Json.applyPatch);
    app.post('/create/thumbnail', auth, checkValidURl, Images.createThumbnail);
};
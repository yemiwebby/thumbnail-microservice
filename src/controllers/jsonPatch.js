import jsonpatch from 'jsonpatch';

/**
 * @class JsonPatch
 */
class JsonPatch {
    /**
     * Create thumbnail
     * @param {*} req 
     * @param {*} res 
     */
    static applyPatch(req, res) {
        let patchResult = jsonpatch.apply_patch(req.body.object, req.body.patch);
        res.status(200).json({
            newObject: patchResult
        })
    }
}

export default JsonPatch;
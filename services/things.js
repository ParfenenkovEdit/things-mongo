const Thing = require('../models/thing');

exports.createThing = async function({ title, body } = {}) {
    const thing = new Thing({ title, body });
    return await thing.save();
}

exports.getAllThings = async function({ page, limit = 10 }) {
    if (!page) {
        return await Thing.find({ _deletedAt: null }).exec();
    }
    return await Thing.find({ _deletedAt: null }).skip((page - 1) * limit).limit(parseInt(limit)).exec();
}

exports.getThingById = async function(id) {
    const thing = await Thing.findById(id).exec();

    return thing;
}

exports.updateThingById = async function({ id, title, body, _deletedAt }) {

    const valuesToUpdate = {
        title,
        body,
        _deletedAt,
    }

    const omitObject = Object.keys(valuesToUpdate).reduce((R, propName) => {
        if (valuesToUpdate[propName] !== undefined) {
            R[propName] = valuesToUpdate[propName];
        }

        return R;
    }, {});

    return await Thing.updateOne({ _id: id }, omitObject).exec();
}

exports.deleteThingById = async function(id) {
    return await exports.updateThingById({ id, _deletedAt: Date.now() });
}

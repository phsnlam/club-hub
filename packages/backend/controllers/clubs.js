const admin = require('firebase-admin');
const { ClubSchema } = require('@clubhub/common/models');


async function addClub(data){
    console.log({body: data})
    let result = ClubSchema.validate(data, { stripUnknown: { objects: true } }) //strip removes unwanted attribute in club
    console.log(result);
    if (result.error){
        throw Error(result.error.details.messages)
    }else{
        const db = admin.firestore();
        let newClub =  await db.collection('clubs').add({
            name: data.name,
            active: data.active,    //three attributes that are required in schema
            description: data.description
        })
        return newClub; //in case wanted to do stuff after
    }
}


//module.export = addClub;
module.exports.addClub = addClub;

const admin = require('firebase-admin');
const { ClubSchema } = require('@clubhub/common/models');


async function addClub(data){
    console.log({body: data})
    let result = ClubSchema.validate(data, { stripUnknown: { objects: true } }) //strip removes unwanted attribute in club
    console.log(result);
    
    const db = admin.firestore();
    if (result.error){
        throw Error(result.error.details.messages)
    }else{
        let newClub =  await db.collection('clubs').add({
            name: data.name,
            active: data.active,    //three attributes that are required in schema
            description: data.description
        })
        return newClub; //in case wanted to do stuff after
    }
}

async function editClub(club_id, data){  //passing through request body and clubid for specific doc.
    const {bannerURL = "https:/deaultURL"} = data;
    console.log('id here: ' + club_id);
    console.log({body: data})
    const db = admin.firestore();

    const getClub = await db.collection('clubs').doc(club_id).get();

    //console.log("This is the club info +++++>>>>>", getClub);

    const club = await db.collection('clubs').doc(club_id).update({
        name : data.name,
        active: data.active,            //already required, dont need to handle
        description: data.description,
        avatarURL: undefined ? data.avatarURL : 'None',
        bannerURL: undefined ? data.bannerURL : 'None',
        officers: undefined ? data.officers: 'None',      //before updating, checks if undefined
        gallery: undefined ? data.gallery: 'None',        //undefined vals dont work for update
        meetingTime: undefined ? data.meetingTime: 'None',
        favoriteUsers: undefined ? data.favoriteUsers: 'None'
    })
    //console.log(club);
    return club;

}

async function getAllClubs(){
    
    const db = admin.firestore();
    const clubData = await db.collection('clubs').get();
    let allClubs = []; //init list to store clubData
    clubData.forEach((club) =>{
        allClubs.push({...club.data(), id: club.id}); //place id into collection of club data
    });
    console.log(allClubs);
    return allClubs;
}


//module.export = addClub;
module.exports.addClub = addClub;
module.exports.getAllClubs = getAllClubs;
module.exports.editClub = editClub;

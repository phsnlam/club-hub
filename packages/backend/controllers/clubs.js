const admin = require("firebase-admin");
const { ClubSchema } = require("@clubhub/common/models");

async function addClub(data) {
  console.log({ body: data });
  let result = ClubSchema.validate(data, { stripUnknown: { objects: true } }); //strip removes unwanted attribute in club
  console.log(result);

  const db = admin.firestore();
  if (result.error) {
    throw Error(result.error.details.messages);
  } else {
    let newClub = await db.collection("clubs").add({
      name: data.name,
      active: data.active, //three attributes that are required in schema
      description: data.description
    });
    return newClub; //in case wanted to do stuff after
  }
}

async function editClub(club_id, data) {
  let result = ClubSchema.validate(data, {
    stripUnknown: { objects: true },
    abortEarly: false
  });
  if (result.error) {
    console.log("validation eror", result.error);
    throw Error(result.error.details.map(item => item.message).join(","));
    // console.log('error', result.error.details.map(item => item.message).join(','))
    // throw Error('temp')
  }

  console.log("id here: " + club_id);
  console.log({ body: data });
  const db = admin.firestore();

  //console.log('DATA HERE!:'+ data.name+ "left")

  //console.log("Look im here!: ", await db.collection('clubs').doc(club_id))

  club_data = await db
    .collection("clubs")
    .doc(club_id)
    .get()
    .then(async snapshot => {
      const new_data = snapshot.data();
      for (const key in new_data) {
        if (data[key] !== undefined) {
          //   console.log(
          //     "valid key here!: ",
          //     key,
          //     "Key Value Here!: ",
          //     new_data[key]
          //   );

          new_data[key] = data[key];
        }
      }
      newClub = await db
        .collection("clubs")
        .doc(club_id)
        .update(new_data);
      return newClub;
    });

  // for (var property in club_data){
  //     console.log("THIS IS PROP: ", property)
  //     if (club_data[property] === null || club_data[property] === undefined){
  //         delete club_data[property];
  //     }
  //     else( await db.collection('clubs').doc(club_id).update({
  //          property : club_data.property}))
  // }

  //const club = await db.collection('clubs').doc(club_id).update(club_data)

  // const club = await db.collection('clubs').doc(club_id).update({
  //     name : data.name ? data.name : getClub.name ? getClub.name : null,
  //     active: data.active ? data.active: getClub.active ? getClub.active : null,            //already required, dont need to handle
  //     description: data.description ? data.description: getClub.description ? getClub.description : null,
  //     avatarURL: data.avatarURL ? data.avatarURL : getClub.avatarURL ? getClub.avatarURL : null,
  //     bannerURL: data.bannerURL ? data.bannerURL : getClub.bannerURL ? getClub.bannerURL : null,
  //     officers: data.officers ? data.officers: getClub.officers ? getClub.officers : null,      //before updating, checks if undefined
  //     gallery: data.gallery ? data.gallery: getClub.gallery ? getClub.gallery : null,        //undefined vals dont work for update, replaces with null
  //     meetingTime: data.meetingTime ? data.meetingTime: getClub.meetingTime ? getClub.meetingTime : null,
  //     favoriteUsers: data.favoriteUsers ? data.favoriteUsers: getClub.favoriteUsers ? getClub.favoriteUsers : null
  // })
  //console.log(club);
  return club_data;
}

async function getAllClubs() {
  const db = admin.firestore();
  const clubData = await db.collection("clubs").get();
  let allClubs = []; //init list to store clubData
  clubData.forEach(club => {
    allClubs.push({ ...club.data(), id: club.id }); //place id into collection of club data
  });
  console.log(allClubs);
  return allClubs;
}

async function deleteClub(club_id) {
  const db = admin.firestore();

  const doc = await db
    .collection("clubs")
    .doc(club_id)
    .get();

  if (doc.exists) {
    return await doc.ref.delete();
  } else {
    throw Error(`Id doesn't exists`);
  }
}

//module.export = addClub;
module.exports.deleteClub = deleteClub;
module.exports.addClub = addClub;
module.exports.getAllClubs = getAllClubs;
module.exports.editClub = editClub;

import { 
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-storage.js"

import { STORAGE_FOLDER_NAMES } from "../model/constants.js";

 const storage =getStorage();

 export async function uploadProfilePhoto(photofile, imageName){
    const storageRef = ref(storage,STORAGE_FOLDER_NAMES.PROFILE_PHOTOS + imageName);
    const snapShot = await uploadBytes(storageRef, photofile);
    const photoURL = await getDownloadURL(snapShot.ref);
    return photoURL;
 }

//this method gives a specific format of actual date EX:10:10:10
export function actualTimeInFormat(){

    return  new Date().toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");

}

//this method returns an error message in case it exists.
export default function validateInfoForm(value){
    let error = {}

    if (!value.name.trim())
        error.name = "The Field is required"

    return error
}
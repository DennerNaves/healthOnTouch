export function post (patientData) {

    return{
        type: "POST",
        payload: patientData
    }
}

export function get (patientsList) {

    return{
        type: "GET",
        payload: patientsList
    }
}
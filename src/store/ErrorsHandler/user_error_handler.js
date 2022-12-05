
export function user_errors(data){
    let feild = "";
    let error = "";

    for (const key of Object.keys(data)) {
        feild = key[0].toUpperCase()+key.slice(1);
        error = data[key];
    }
    const throw_error = {
        feild:feild,
        error:error[0]
    }
    return throw_error;
}
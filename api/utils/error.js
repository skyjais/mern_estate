export const errorHandler = (statusCode,message)=>{
    console.log(statusCode,message)
    const error=new Error()
    error.statusCode=statusCode;
    error.message=message;
    console.log(error)
    return error

}
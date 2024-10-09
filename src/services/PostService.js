import axiosInstance from "@/utility/axiosInstance";

async function getAllPost(){
    try {
        let response = await axiosInstance({
            method: "get",
            url: "/post/"
        })
        
        console.log(response.data)
        return response.data
    } 
    catch (error) {
        console.log(error)
        // return error
    }
}


async function createNewPost(location, imageURL, rating, comment){
    // console.log('creating new post...')
    try {
        let response = await axiosInstance({
            method: "post",
            url: "/post/createPost",
            data: {
                location: location,
                imageURL: imageURL,
                rating: rating,
                comment: comment
            }
        })
        
        return response
    } 
    catch (error) {
        console.log(error)
        // return error
    }

}

export {
    getAllPost,
    createNewPost
}
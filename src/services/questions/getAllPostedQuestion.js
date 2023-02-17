const getAllPostedQuestion = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    try {
        const response = await fetch("https://agile-earth-88465.herokuapp.com/api/questions", requestOptions)
        return response.json()
    } catch (e) {
        console.error('Question posting Failed!!!')
        throw new Error('QUESTION_GET_API_FAILED');
    }
}
export default getAllPostedQuestion
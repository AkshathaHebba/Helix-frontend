const postQuestion = async (question) => {
    if (!question) {
        throw new Error('QUESTION_MISSING')
    }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(question);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
        credentials: 'include',
    };

    try {
        const response = await fetch("https://agile-earth-88465.herokuapp.com/api/questions", requestOptions)
        return response.json()
    } catch (e) {
        console.error('Question posting Failed!!!')
        throw new Error('QUESTION_POST_API_FAILED');
    }
}

export default postQuestion;
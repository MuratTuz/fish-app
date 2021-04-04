



const readFile = (file) => {

    //const fileBlob = new Blob(file, { type: 'application/json' });

    const promise = new Promise((res, rej) => {
        console.log('file ' + file)
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
        fileReader.onload = (e) => {
            res(fileReader.result);
        }
        fileReader.onerror = (err) => {
            rej(err);
        }
    })

    return promise;
}

export default readFile;
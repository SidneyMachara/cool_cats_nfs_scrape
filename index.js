
import fetch from "node-fetch";
import fs from "fs";



(async () => {

    // you can edit these
    let url = "https://ikzttp.mypinata.cloud/ipfs/QmPZKyuRw4nQTD6S6R5HaNAXwoQVMj8YydDmad3rC985WZ/";

    let urlPostFix = ''; // .json <-- for url that end with .json

    // 200 is the best on my computer, you can try increase to see what works best on yours
    let batchLimit = 200;
    //------------------

    //
    let limit = batchLimit;
    let start = 0
    let finall = 5;

    const someArray = Array.from(Array(Math.round(11000 / batchLimit)).keys());



    ///
    async function makeApiCall(currentPage) {

        if (currentPage > finall) return;

        try {
            const response = await fetch(`${url}${currentPage}${urlPostFix}`, {
                headers: { 'Content-Type': 'application/json' }
            });

            const data = await response.json();

            fs.writeFile(`./Downloads/${currentPage}.json`, JSON.stringify(data), err => {
                if (err) {
                    console.error(err)
                    return
                }
                //file written successfully
            })
            // return data;
        } catch (error) {
            console.log(error);
        }



    }

    ///
    async function parallelCall(start, stop) {

        try {
            let promises = [];

            let currentPage = start;

            while (currentPage <= stop) {
                promises.push(makeApiCall(currentPage));
                currentPage++;
            }

            await Promise.all(promises);
        } catch (error) {
            console.log(error);
        }
    }





    // Start timer
    var startTime = performance.now()

    for await (var index of someArray) {
        try {
            console.log(`From ${start} to ${limit}`)

            await parallelCall(start, limit);
            limit = limit + batchLimit;
            start = (limit - batchLimit) + 1;


        } catch (error) {
            console.log(`${index} --> Error ${error}`);
        }

    }

    /// End Timer
    var endTime = performance.now()
    console.log(`Finished in ${endTime - startTime} milliseconds`)

})();
# cool_cats_nfs_scrape

Download around 10,000 files from NFT collections that host their metadata on API, for example https://api.coolcatsnft.com/cat/0 indexed up until https://api.coolcatsnft.com/cat/9999

# Configurations in index.js
- url ->> exactly what it says 😛 ..Eg (https://api.coolcatsnft.com/cat/)

- urlPostFix = ''; 
'.json' <-- for url that end with .json  OR '' <- for urls that just end with the number

- batchLimit = 200; 
(controlls number of requests to make at the same time), 200 is the best on my computer, you can try increase to see what works best on yours. 


# Example urls
https://api.coolcatsnft.com/cat/0

https://api.otherside.xyz/lands/0

https://live---metadata-5covpqijaa-uc.a.run.app/metadata/0

https://0xstudio.mypinata.cloud/ipfs/QmRSK4yjjYXFWKtwZ6W4y3zXPPbQhvE3nAgG87aSjjTP1f/0.json

https://ikzttp.mypinata.cloud/ipfs/QmPZKyuRw4nQTD6S6R5HaNAXwoQVMj8YydDmad3rC985WZ/0

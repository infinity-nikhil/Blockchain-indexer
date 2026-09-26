## Making the indexerfile from strach 
In this one like by making macro project we will eventually make a blockchain indexer. 

### Task 1 — connect and read the block number
Having knowing about the viem that help us connect to the blockchain will be quite usefull just see the docs. 
```javascript
//import the requirements 
import { createPublicClient, http } from 'viem';

const publicClient = createPublicClient({ transport: http("http://127.0.0.1:8545")}) //this creates the client instance and tells where to connect to 

const blockNumber = publicClient.getBlockNumber(); //the method from the docs

console.log(blockNumber);
```
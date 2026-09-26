import { createPublicClient, http } from 'viem'
 
const publicClient = createPublicClient({ transport: http("http://127.0.0.1:8545")})

const blockNumber = await publicClient.getBlockNumber();

console.log(blockNumber);
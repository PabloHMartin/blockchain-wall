import web3 from './web3';
import cryptoWallAbi from '../../contracts/CryptoWall.json';

const address = '0xCC6251b26D4CA604F603de8249f24b68fC26b182';

const instance = new web3.eth.Contract(
    cryptoWallAbi.abi,
    address
);

export default instance;
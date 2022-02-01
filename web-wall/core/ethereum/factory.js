import web3 from './web3';
import cryptoWallAbi from '../../contracts/CryptoWall.json';

const address = '0x29747C811c1f5F2283c56a69b3EfEAe21C5D328c';

const instance = new web3.eth.Contract(
    cryptoWallAbi.abi,
    address
);

export default instance;
import Web3 from 'web3'; 
let web3;


if(typeof window === "undefined"){
    // We are on the server
    // connected to ganache
    const provider = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    // connect to blockchain trought infura
    // const provider = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/454677a248e842d0a9d97f70acd426f9'));

    web3 = new Web3(provider);
}

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    // We are in the browser and metamask is running.
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
}

if (typeof window !== "undefined" && typeof window.ethereum === "undefined") {
    // We are in the browser and metamask is not running.
    web3 = new Web3();
}
 
export default web3;    
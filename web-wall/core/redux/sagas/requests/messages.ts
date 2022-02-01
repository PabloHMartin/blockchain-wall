import factory from '../../../../core/ethereum/factory';
import web3 from '../../../../core/ethereum/web3';


export const requestGetMessages = async () => {
    const messages = await factory.methods.getAll().call();
    console.log('request', messages); 
    return messages.map( msg => {
        return { 
            address: msg._address,
            message: msg.message,
            publishDate: msg.publishDate
        }
    });
}

export const requestAddMessage = async ({msg, date}) => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
    await factory.methods.setMsg(msg, date.toString()).send({from: accounts[0]});
}
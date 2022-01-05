const CryptoWall = artifacts.require('./CryptoWall');
const acc_1 = '0xCd098dc211749eF2A94724aA512fB06936CC0643';
const acc_2 = '0xD3BDD5AFbd44c3Cbb189b9EFF276DdfD01300a6F';

contract('CryptoWall', async ([deployer, user]) => {

    let cw;

    beforeEach( async () => {
        cw = await CryptoWall.deployed();
    })

    describe('test for cryptowall', () => {

        it('deploys successfully', async () => {
            const address = contract.address;
            expect(address).to.not.equal(0x0);    
            expect(address).to.not.equal('');    
            expect(address).to.not.to.be.null;    
            expect(address).to.be.undefined;
          })


        it('should have an owner', async () => {
            expect(await cw.owner()).to.not.be.null
        })

        it('should have an owner acc_1', async() => {
            const owner = await cw.getOwner();
            expect(owner).to.have.string(acc_1)
        })

        // it('should have correct length keys', async() => {
        //     let keysLength = await cw.getMessagesSize();
        //     console.log(keysLength);
        //     expect(keysLength.length).to.equal(0);
        //     // const testMsg = "this is the way";
        //     // await cw.setMsg(testMsg,  { from: acc_1 });
        //     // expect(keysLength.length).to.equal(1);
        // })

        it('should add a message', async() => {
            const testMsg = "this is the way";
            await cw.setMsg(testMsg,  { from: acc_1 });
            const testMsg2 = "I have spoken";
            await cw.setMsg(testMsg2,  { from: acc_2 });
            const message = await cw.getMsg(acc_1);
            const message2 = await cw.getMsg(acc_2);
            expect(message).to.have.string(testMsg);
            expect(message2).to.have.string(testMsg2);
        })
    })


})
require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note meadow unusual install clip olympic skull'; 
let testAccounts = [
"0xe5ff0bacd2d659855af2dec1f0eab95f8a2d7828b36c78d86434f8c23a59bec8",
"0x717a6328d68f7c45e35ffe077d6644cdbadcb48402af2032c05df339f1615795",
"0x68fa7b8555d691bc3706054df437cebd2191eae93c044143e667c0c76f847f2d",
"0x66f9a631394b7233d510dae72b867cae27cf4489acf982dc263ba37c63bf27a5",
"0x72dae69210ba478f6a8eae4a4944e375f05056a905be1597fbc48eece7ba8655",
"0xbd7b9ca7d4ee92c6c167466d93320c3509713bb91eb737e66c9b1a1c944fdb88",
"0xd726fb8883582726aac839236c1abed79fa1a3d0ca62d1c2b78a4fd8f86a718b",
"0x4ef465b5cca7d6a44d2950353b66290c473859db9843887bf8994de1ea2d179f",
"0x89a6515fcb3b71662de67cdfa18aed05511c323ef1b99775043be0c624b34abc",
"0xaa4b1b18f438beaa49bcc7d8243d8c7f09d01c8a557054356bd2781b16de70a7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

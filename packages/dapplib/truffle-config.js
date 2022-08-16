require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note rifle clutch hunt cash force genuine'; 
let testAccounts = [
"0x809d81de7a9c9e37f62c3b954bc6e34bd1a8e45a99b5a9442a5087caa9291b59",
"0x21d2c54a0a630630a6ac9acf397bae2dcacaabeebe00b7678bbce2ad0468a7d6",
"0xb7d2cab60c8a110e2e6d68215763314c783d78e709ea7a0e912db90789ceb082",
"0x3b5b1b3caa0ebeb001ac476ab3d9a8d97fa3fff97f11cde6cf165ee75b953845",
"0xa29585e3b733fd5ef72018b70a6a0a5a39a8a1effd8415007c20224ef4b0c61a",
"0x16ae12d73d053539e66a565f103c6b53f6c2937daf3ee18cfa6d0bfe2e2cc5f2",
"0x74388a9c301279f80559f5fd8776264a6491c888d5f17df6e0fe0574a54a3e42",
"0x7b034fd92fdd4c0b322fa5b9745f14b47a94126d6d917cfe0cf492fe87656355",
"0x88a38b895a38da8f925a4fba485c7b53f82bdb192b9fd15dba145fc964b69462",
"0x71ccb9c91f8d48ab1a28a9d62109e517059baf1e228c4de381e5f56f6fbff012"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


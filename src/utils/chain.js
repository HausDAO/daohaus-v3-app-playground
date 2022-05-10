export const supportedChains = {
  '0x4': {
    name: 'Ethereum Rinkeby',
    short_name: 'rinkeby',
    shortNamePrefix: 'rin',
    nativeCurrency: 'ETH',
    network: 'rinkeby',
    network_id: 4,
    chain_id: '0x4',
    hub_sort_order: 8,
    providers: ['walletconnect'],
    rpc_url: `https://${process.env.REACT_APP_RPC_URI}.rinkeby.rpc.rivet.cloud/`,
    abi_api_url:
      'https://api-rinkeby.etherscan.io/api?module=contract&action=getabi&address=',
    tokenlist_api_url: 'https://api-rinkeby.etherscan.io/api',
    subgraph_url:
      'https://api.thegraph.com/subgraphs/name/hausdao/daohaus-v3-rinkeby',
    stats_graph_url:
      'https://api.thegraph.com/subgraphs/name/odyssy-automaton/daohaus-stats-rinkeby',
    boosts_graph_url:
      'https://api.thegraph.com/subgraphs/name/odyssy-automaton/daohaus-boosts-rinkeby',
    erc721_graph_url:
      'https://api.thegraph.com/subgraphs/name/sunguru98/erc721-rinkeby-subgraph',
    erc1155_graph_url:
      'https://api.thegraph.com/subgraphs/name/odyssy-automaton/erc1155-rinkeby-subgraph',
    poster_graph_url:
      'https://api.thegraph.com/subgraphs/name/odyssy-automaton/daohaus-poster-rinkeby',
    minion_factory_addr: '0x313F02A44089150C9ff7011D4e87b52404A914A9',
    moloch_factory_addr: '0xC33a4EfecB11D2cAD8E7d8d2a6b5E7FEacCC521d',
    dai_contract: '0x95b58a6bff3d14b7db2f5cb5f0ad413dc2940658',
    wrapper_contract: '0xc778417e063141139fce010982780140aa0cd5ab',
    wrap_n_zap_factory_addr: '0x4e521FF388c83b4c945a33984ba42Efb73Cc04e6',
    block_explorer: 'https://rinkeby.etherscan.io',
    safeMinion: {
      minion_factory_addr: '0x3f13ABc8931c0e381Ce6d1Be9f978aE6E9d99Cb8',
      safe_mutisend_addr: '0xA238CBeb142c10Ef7Ad8442C6D1f9E89e07e7761',
      safe_sign_lib_addr: '0xa25b3579a295be016de5eb5F082b54B12d45F72C',
    },
    superfluid: {
      cfa: '0xF4C5310E51F6079F601a5fb7120bC72a70b96e2A',
      host: '0xeD5B5b32110c3Ded02a07c8b8e97513FAfb883B6',
      minion_factory_addr: '0x4b168c1a1E729F4c8e3ae81d09F02d350fc905ca',
      resolver: '0x659635Fab0A0cef1293f7eb3c7934542B6A6B31A',
      subgraph_url:
        'https://api.thegraph.com/subgraphs/name/superfluid-finance/superfluid-rinkeby',
      subgraph_url_v2:
        'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-rinkeby',
      superapp_addr: {
        v1: '0x7d8151FAB5D6742F1c574fff472B6794062C2D0C',
      },
      supertoken_factory: '0xd465e36e607d493cd4CC1e83bea275712BECd5E0',
      version: 'v1',
    },
    rarible: {
      api_url: 'https://ethereum-api-staging.rarible.org/v0.1',
      erc20_transfer_proxy: '0x2fce8435f0455edc702199741411dbcd1b7606ca',
      nft_transfer_proxy: '0x7d47126a2600E22eab9eD6CF0e515678727779A6',
      base_url: 'https://rinkeby.rarible.com',
    },
    dao_conditional_helper_addr: '0xc50462aEa8873f6343a2Fd2103aE1dD21d53bC27',
    escrow_minion: '0xEB28321b7952CC34bFb734413b58496A889C9660',
    disperse_app: '0xD152f549545093347A162Dce210e7293f1452150',
    swapr: {
      staking: '0x732DB307337a5ceA1FD117AF808382FaC0AFAe8a',
    },
    poster: '0x917d84787A266F9D649d519A7Ec8445eA43514D8',
    zodiac_amb_module: {
      amb_bridge_address: {
        '0x64': '0xc38D4991c951fE8BCE1a12bEef2046eF36b0FA4A',
      },
      foreign_networks: [
        {
          name: 'xDAI',
          value: '0x64',
        },
      ],
      gas_limit: {
        '0x64': '3000000',
      },
      monitoring_app: {
        '0x64': 'https://alm-rinkeby.herokuapp.com/4',
      },
    },
  },
  '0x2a': {
    name: 'Ethereum Kovan',
    short_name: 'kovan',
    shortNamePrefix: 'kov',
    nativeCurrency: 'ETH',
    network: 'kovan',
    network_id: 42,
    chain_id: '0x2a',
    hub_sort_order: 7,
    providers: ['walletconnect'],
    // , 'portis', 'fortmatic'
    rpc_url: `https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
    abi_api_url:
      'https://api-kovan.etherscan.io/api?module=contract&action=getabi&address=',
    tokenlist_api_url: 'https://api-kovan.etherscan.io/api',
    subgraph_url:
      'https://api.thegraph.com/subgraphs/name/hausdao/daohaus-v3-kovan',
    stats_graph_url:
      'https://api.thegraph.com/subgraphs/name/odyssy-automaton/daohaus-stats-kovan',
    boosts_graph_url:
      'https://api.thegraph.com/subgraphs/name/odyssy-automaton/daohaus-boosts-kovan',
    erc721_graph_url:
      'https://api.thegraph.com/subgraphs/name/sunguru98/erc721-kovan-subgraph',
    erc1155_graph_url:
      'https://api.thegraph.com/subgraphs/name/odyssy-automaton/erc1155-kovan-subgraph',
    minion_factory_addr: '0xCE63803E265617c55567a7A7b584fF2dbD76210B',
    uberhaus_minion_factory_addr: '0x03042577463E3820F9cA6Ca3906BAad599ba9382',
    transmutation_factory_addr: '0xbca622291fFe797C77a8Bc6D000584b22877e971',
    moloch_factory_addr: '0x9c5d087f912e7187D9c75e90999b03FB31Ee17f5',
    dai_contract: '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa',
    wrapper_contract: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
    wrap_n_zap_factory_addr: '0xbf9e327d465A4A160fA7805282Fb8C7aB892770a',
    escrow_minion: '0xc9f9e7fc92a7d3b2b3554be850fff462b7b382e7',
    block_explorer: 'https://kovan.etherscan.io',
    safeMinion: {
      minion_factory_addr: '0xA1b97D22e22507498B350A9edeA85c44bA7DBC01',
      safe_mutisend_addr: '0xA238CBeb142c10Ef7Ad8442C6D1f9E89e07e7761',
      safe_sign_lib_addr: '0xa25b3579a295be016de5eb5F082b54B12d45F72C',
    },
    disperse_app: '0xD152f549545093347A162Dce210e7293f1452150',
  },
  '0x64': {
    name: 'Gnosis Chain',
    short_name: 'gc',
    shortNamePrefix: 'gno',
    nativeCurrency: 'xDai',
    network: 'xdai',
    network_id: 100,
    chain_id: '0x64',
    hub_sort_order: 2,
    providers: ['walletconnect'],
    rpc_url: 'https://rpc.gnosischain.com/',
    archive_node_url:
      'https://poa-xdai-archival.gateway.pokt.network/v1/lb/624b0c653bd808003a85478e',
    abi_api_url:
      'https://blockscout.com/xdai/mainnet/api?module=contract&action=getabi&address=',
    tokenlist_api_url: 'https://blockscout.com/xdai/mainnet/api',
    subgraph_url:
      'https://api.thegraph.com/subgraphs/name/hausdao/daohaus-v3-xdai',
    stats_graph_url:
      'https://api.thegraph.com/subgraphs/name/odyssy-automaton/daohaus-stats-xdai',
    boosts_graph_url:
      'https://api.thegraph.com/subgraphs/name/odyssy-automaton/daohaus-boosts-xdai',
    erc721_graph_url:
      'https://api.thegraph.com/subgraphs/name/sunguru98/erc721-xdai-subgraph',
    erc1155_graph_url:
      'https://api.thegraph.com/subgraphs/name/sunguru98/erc1155-xdai-subgraph',
    poap_graph_url:
      'https://api.thegraph.com/subgraphs/name/poap-xyz/poap-xdai',
    minion_factory_addr: '0x53508D981439Ce6A3283597a4775F6f23504d4A2',
    moloch_factory_addr: '0x0F50B2F3165db96614fbB6E4262716acc9F9e098',
    wrapper_contract: '0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d',
    wrap_n_zap_factory_addr: '0x8464135c8F25Da09e49BC8782676a84730C318bC',
    escrow_minion: '0xc9f9E7FC92A7D3B2b3554be850fFF462B7b382E7',
    block_explorer: 'https://blockscout.com/poa/xdai',
    safeMinion: {
      minion_factory_addr: '0xA1b97D22e22507498B350A9edeA85c44bA7DBC01',
      safe_mutisend_addr: '0xA238CBeb142c10Ef7Ad8442C6D1f9E89e07e7761',
      safe_sign_lib_addr: '0xa25b3579a295be016de5eb5F082b54B12d45F72C',
    },
    uberhaus_minion_factory_addr: '0xf5106077892992B84c33C35CA8763895eb80B298',
    transmutation_factory_addr: '0x7F94ec015665743fE84A7f59297eD86A0470e069',
    superfluid: {
      cfa: '0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D',
      host: '0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7',
      minion_factory_addr: '0xfC86DfDd3b2e560729c78b51dF200384cfe87438',
      resolver: '0xD2009765189164b495c110D61e4D301729079911',
      subgraph_url:
        'https://api.thegraph.com/subgraphs/name/superfluid-finance/superfluid-xdai',
      subgraph_url_v2:
        'https://api.thegraph.com/subgraphs/name/superfluid-finance/protocol-v1-xdai',
      superapp_addr: {
        v1: '0x9fc9420F277b7C25E17B67008b35CCB01c5c9B63',
      },
      supertoken_factory: '0x23410e2659380784498509698ed70E414D384880',
      version: 'v1',
    },
    poster: '0x000000000000cd17345801aa8147b8d3950260ff',
    niftyMinion: {
      minion_factory_addr: '0xA6B75C3EBfA5a5F801F634812ABCb6Fd7055fd6d',
      version: 'v1',
    },
    disperse_app: '0xD152f549545093347A162Dce210e7293f1452150',
    dao_conditional_helper_addr: '0x55c8F8a71aD01FC707Bbb1A04d2c0Ef246973392',
    zodiac_amb_module: {
      amb_bridge_address: {
        '0x1': '0x4C36d2919e407f0Cc2Ee3c993ccF8ac26d9CE64e',
        '0x4': '0xD4075FB57fCf038bFc702c915Ef9592534bED5c1',
      },
      foreign_networks: [
        {
          name: 'Ethereum',
          value: '0x1',
        },
        {
          name: 'Rinkeby',
          value: '0x4',
        },
      ],
      gas_limit: {
        '0x1': '2000000',
        '0x4': '3000000',
      },
      monitoring_app: {
        '0x1': 'https://alm-xdai.herokuapp.com/100',
        '0x4': 'https://alm-rinkeby.herokuapp.com/100',
      },
    },
  },
};

export const chainByID = chainID => supportedChains[chainID];
export const getGraphEndpoint = (chainID, endpointType) =>
  chainByID(chainID)[endpointType];

export const chainByNetworkId = networkId => {
  const idMapping = {
    1: supportedChains['0x1'],
    4: supportedChains['0x4'],
    10: supportedChains['0xa'],
    42: supportedChains['0x2a'],
    74: supportedChains['0x4a'],
    100: supportedChains['0x64'],
    137: supportedChains['0x89'],
    42161: supportedChains['0xa4b1'],
    42220: supportedChains['0xa4ec'],
  };

  return idMapping[networkId];
};

export const chainByName = networkName => {
  const networkKey = Object.keys(supportedChains).find(chainId => {
    return supportedChains[chainId].network === networkName;
  });

  return supportedChains[networkKey];
};
export const MM_ADDCHAIN_DATA = {
  '0x89': {
    chainId: '0x89',
    chainName: 'Matic Mainnet',
    rpcUrls: ['https://polygon-rpc.com/'],
    blockExplorerUrls: ['https://polygonscan.com/ '],
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18,
    },
  },
  '0x64': {
    chainId: '0x64',
    chainName: 'xDai',
    rpcUrls: ['https://rpc.gnosischain.com/'],
    blockExplorerUrls: ['https://blockscout.com/xdai/mainnet'],
    nativeCurrency: {
      name: 'xDai',
      symbol: 'XDAI',
      decimals: 18,
    },
  },
  '0x4a': {
    chainId: '0x4a',
    chainName: 'IDchain',
    rpcUrls: ['https://idchain.one/rpc/'],
    blockExplorerUrls: ['https://explorer.idchain.one'],
    nativeCurrency: {
      name: 'eidi',
      symbol: 'EIDI',
      decimals: 18,
    },
  },
  '0xa4b1': {
    chainId: '0xa4b1',
    chainName: 'Arbitrum',
    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
    blockExplorerUrls: ['https://arbiscan.io/'],
    nativeCurrency: {
      name: 'ethereum',
      symbol: 'AETH',
      decimals: 18,
    },
  },
  '0xa4ec': {
    chainId: '0xa4ec',
    chainName: 'Celo',
    rpcUrls: ['https://forno.celo.org'],
    blockExplorerUrls: ['https://explorer.celo.org'],
    nativeCurrency: {
      name: 'celo',
      symbol: 'CELO',
      decimals: 18,
    },
  },
  '0xa': {
    chainId: '0xa',
    chainName: 'Optimism',
    rpcUrls: ['https://mainnet.optimism.io'],
    blockExplorerUrls: ['https://optimistic.etherscan.io'],
    nativeCurrency: {
      name: 'ethereum',
      symbol: 'ETH',
      decimals: 18,
    },
  },
};

export const EIP3085 = {
  SUPPORTED: {
    '0xa': true,
    '0x64': true,
    '0x89': true,
    '0x4a': true,
    '0xa4b1': true,
    '0xa4ec': true,
  },
  NOT_SUPPORTED: {
    '0x1': true,
    '0x2a': true,
    '0x4': true,
  },
};

export const NIFTYINK_ADDRESS = '0xcf964c89f509a8c0ac36391c5460df94b91daba5';

export const switchNetwork = async daochain => {
  if (daochain && window.ethereum) {
    try {
      await window.ethereum?.request({
        id: '1',
        jsonrpc: '2.0',
        method: 'wallet_addEthereumChain',
        params: [MM_ADDCHAIN_DATA[daochain]],
      });
    } catch (error) {
      console.error(error);
    }
  }
};

export const getScanKey = chainID => {
  if (chainID === '0x89') {
    return process.env.REACT_APP_POLYGONSCAN_KEY;
  }
  if (chainID === '0x1' || chainByID === '0x4' || chainByID === '0x2a') {
    return process.env.REACT_APP_ETHERSCAN_KEY;
  }
  return null;
};

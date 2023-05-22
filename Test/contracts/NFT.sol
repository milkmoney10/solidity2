pragma solidity ^0.8.0;
//Qma6pZZ1HJksbJhcuonBtF3iFoH7Q8es9ctDGsvSLQcpLr
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyNFT is ERC721, Ownable {
    struct NFT {
        string name;
        string ipfsHash;
    }

    mapping(uint256 => NFT) private nfts;
    uint256 private tokenIdCounter;

    constructor() ERC721("MyNFT", "NFT") {}

    function mint(address to, string memory name, string memory ipfsHash) external onlyOwner {
        uint256 tokenId = tokenIdCounter++;
        nfts[tokenId] = NFT(name, ipfsHash);
        _safeMint(to, tokenId);
    }

    function getNFT(uint256 tokenId) public view returns (string memory name, string memory ipfsHash) {
        require(_exists(tokenId), "NFT does not exist");
        NFT memory nft = nfts[tokenId];
        return (nft.name, nft.ipfsHash);
    }
}

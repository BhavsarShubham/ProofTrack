// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract ProofTrack {
    struct Product {
        string id;
        string name;
        string manufacturer;
        string category;
        string description;
        address currentOwner;
        uint256 createdAt;
        bool exists;
    }

    struct HistoryEvent {
        string eventType; // "CREATED" or "TRANSFERRED"
        address from;
        address to;
        uint256 timestamp;
        string location;
        string note;
    }

    mapping(string => Product) public products;
    mapping(string => HistoryEvent[]) public productHistories;

    event ProductCreated(
        string productId,
        address indexed manufacturer,
        uint256 timestamp
    );

    event ProductTransferred(
        string productId,
        address indexed from,
        address indexed to,
        string location,
        uint256 timestamp
    );

    function createProduct(
        string memory _id,
        string memory _name,
        string memory _manufacturer,
        string memory _category,
        string memory _description,
        string memory _location
    ) public {
        require(bytes(_id).length > 0, "Product ID cannot be empty");
        require(!products[_id].exists, "Product already exists");

        products[_id] = Product({
            id: _id,
            name: _name,
            manufacturer: _manufacturer,
            category: _category,
            description: _description,
            currentOwner: msg.sender,
            createdAt: block.timestamp,
            exists: true
        });

        productHistories[_id].push(HistoryEvent({
            eventType: "CREATED",
            from: address(0),
            to: msg.sender,
            timestamp: block.timestamp,
            location: _location,
            note: "Product created"
        }));

        emit ProductCreated(_id, msg.sender, block.timestamp);
    }

    function transferProduct(
        string memory _id,
        address _to,
        string memory _location,
        string memory _note
    ) public {
        require(products[_id].exists, "Product does not exist");
        require(products[_id].currentOwner == msg.sender, "Not authorized to transfer this product");
        require(_to != address(0), "Invalid address");

        address _from = products[_id].currentOwner;
        products[_id].currentOwner = _to;

        productHistories[_id].push(HistoryEvent({
            eventType: "TRANSFERRED",
            from: _from,
            to: _to,
            timestamp: block.timestamp,
            location: _location,
            note: _note
        }));

        emit ProductTransferred(_id, _from, _to, _location, block.timestamp);
    }

    function getProduct(string memory _id) public view returns (Product memory) {
        require(products[_id].exists, "Product does not exist");
        return products[_id];
    }

    function getProductHistory(string memory _id) public view returns (HistoryEvent[] memory) {
        require(products[_id].exists, "Product does not exist");
        return productHistories[_id];
    }
}

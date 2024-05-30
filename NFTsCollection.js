const NFTs = [];  //variable to store NFTs

//function to collect the metadata regarding NFTs
function mintNFT (name,eye_color,shirt_type,bling,background_color,creator) {
   const metadata = {
      name: name,
      eye_color: eye_color,
      shirt_type: shirt_type,
      bling: bling,
      background_color: background_color,
      creator: creator
   }
   NFTs.push(metadata);
}

//function to print the metadata of NFTs we have in our variable NFTs.
function listNFTs () {
   for(let i=0;i<NFTs.length;i++){
      console.log((i+1) + ")" + "Name: " + NFTs[i].name + "\n" + "EyeColor: " + NFTs[i].eye_color + "\n" + "ShirtType: " + NFTs[i].shirt_type + "\n" + "Bling: " + NFTs[i].bling + "\n" + "BackgroundColor: " + NFTs[i].background_color + "\n" + "Creator: " + NFTs[i].creator + "\n" + "---------------" );
   }

}

//function to print the total no. of have NFTs we have in  array
function getTotalSupply() {
    return NFTs.length;
}

//calling the functions
mintNFT('Crpyto#1', 'blue', 'jacket', 'necklace', 'black', 'Juliet');
mintNFT('Crpyto#2', 'green', 'hoodie', 'chain', 'brown', 'Romeo');
mintNFT('Crpyto#3', 'black', 'crop_top', 'braclet', 'dark blue', 'Barbie');
mintNFT('Crpyto#4', 'red', 'T-shirt', 'ring', 'green', 'Amar');
console.log("The no. of NFTs are ", getTotalSupply());
listNFTs();


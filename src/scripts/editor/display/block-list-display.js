module.exports.addBlocksToLeftMenu = () => {
  let blockDefinitions = blockLoader.getBlockDefinitions();
  let divBlockList = document.getElementById("block-list");

  for (let blockCategory in blockDefinitions) {
    let spanBlockCategory = document.createElement("span");
    spanBlockCategory.classList.add("block-header");
    spanBlockCategory.textContent = blockCategory[0].toUpperCase() + blockCategory.slice(1);
    divBlockList.appendChild(spanBlockCategory);

    for (let blockName in blockDefinitions[blockCategory]) {
      let spanBlock = document.createElement("span");
      spanBlock.classList.add("block");
      if(blockDefinitions[blockCategory][blockName].displayName) {
        spanBlock.textContent = blockDefinitions[blockCategory][blockName].displayName;
      }
      else {
        spanBlock.textContent = blockDefinitions[blockCategory][blockName].name;
      }
      spanBlock.onmousedown = () => { actionHandler.trigger("block: add to canvas", blockName); };
      divBlockList.appendChild(spanBlock);
    }
  }
};
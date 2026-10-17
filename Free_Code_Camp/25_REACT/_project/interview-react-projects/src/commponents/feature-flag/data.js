const dummyApiResponse = {
  showLightAndDarkMode: true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  showAccordian: true,
  showTreeView: true,
  showTabs : true
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyApiResponse), 500);
  });
}

export default featureFlagsDataServiceCall;

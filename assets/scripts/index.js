(() => {

  const View = (() => {

    const DOMStrings = {
      shareButton: '#share',
    };

    const DOMElements = {
      shareButton: document.querySelector(DOMStrings.shareButton),
    };

    return {
      DOMStrings,
      DOMElements,
    };

  })();

  const Controller = ((view) => {

    const sharePost = async function (event) {
      event.preventDefault();
  
      try {
        const { href: link } = window.location;
        await window.navigator.clipboard.writeText(link);
      } catch (error) {
        console.error(error);
      }
    };

    const attachEventListeners = () => {
      const { shareButton } = view.DOMElements;

      if (shareButton) {
        shareButton.addEventListener('click', sharePost);
        shareButton.addEventListener('keypress', sharePost);
      }
    };

    const init = () => {
      attachEventListeners();
    };

    return {
      init,
    };

  })(View);

  Controller.init();

})();
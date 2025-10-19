window.addEventListener('load', () => {
  setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titleElement = document.getElementById('title');
    const titles = 'PHAN HÀ ANH'.split('');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.textContent += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      }
    }
    appendTitle();

    const modal = document.getElementById('giftModal');
    const giftContent = document.getElementById('giftContent');
    const closeBtn = document.querySelector('.close-btn');

    const openModal = async (event) => {
      if (event.type === 'touchstart') event.preventDefault(); // ngăn click sau touch
      const response = await fetch('gift.html');
      const html = await response.text();
      giftContent.innerHTML = html;
      modal.style.display = 'flex';
    };

    // Sử dụng cả click và touchstart, thêm {passive: false} cho iOS
    titleElement.addEventListener('click', openModal);
    titleElement.addEventListener('touchstart', openModal, { passive: false });

    // Đóng modal
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
      if (event.target === modal) modal.style.display = 'none';
    });

  }, 1000);
});

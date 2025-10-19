window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // ---- Hiệu ứng chữ từng chữ ----
    const titles = ''.split(''); // đổi chữ muốn hiển thị
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      }
    }
    appendTitle();
    clearTimeout(c);

    // ---- Mở modal khi click hoặc touch ----
    const openModal = async (event) => {
      event.preventDefault(); // tránh click sau touch
      const modal = document.getElementById('giftModal');
      const giftContent = document.getElementById('giftContent');
      const response = await fetch('gift.html');
      const html = await response.text();
      giftContent.innerHTML = html;
      modal.style.display = 'flex';
    };

    titleElement.addEventListener('click', openModal);
    titleElement.addEventListener('touchstart', openModal);

    // ---- Đóng modal ----
    const modal = document.getElementById('giftModal');
    const closeBtn = document.querySelector('.close-btn');

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    // Click ra ngoài modal để tắt
    window.addEventListener('click', (event) => {
      if (event.target === modal) modal.style.display = 'none';
    });

  }, 1000);
};

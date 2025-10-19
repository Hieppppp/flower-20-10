onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('').split('');
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

    // Khi click vào title -> mở modal
    titleElement.addEventListener('click', async () => {
      const modal = document.getElementById('giftModal');
      const giftContent = document.getElementById('giftContent');
      const response = await fetch('gift.html');
      const html = await response.text();
      giftContent.innerHTML = html;
      modal.style.display = 'flex';
    });

    // Đóng modal
    document.querySelector('.close-btn').addEventListener('click', () => {
      document.getElementById('giftModal').style.display = 'none';
    });

    // Click ra ngoài để tắt
    window.addEventListener('click', (event) => {
      const modal = document.getElementById('giftModal');
      if (event.target === modal) modal.style.display = 'none';
    });
  }, 1000);
};

// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Bỏ class not-loaded ngay khi DOM sẵn sàng
  document.body.classList.remove("not-loaded");

  const titleElement = document.getElementById('title');
  const titles = ''.split('');
  let index = 0;

  // Hiệu ứng chữ từng chữ (không delay toàn trang)
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

  // Hàm mở modal
  const openModal = async (event) => {
    if (event.type === 'touchstart') event.preventDefault(); // tránh click sau touch
    const response = await fetch('gift.html');
    const html = await response.text();
    giftContent.innerHTML = html;
    modal.style.display = 'flex';
  };

  // Gắn sự kiện click và touch
  titleElement.addEventListener('click', openModal);
  titleElement.addEventListener('touchstart', openModal, { passive: false });

  // Đóng modal bằng nút
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Click ra ngoài modal để đóng
  window.addEventListener('click', (event) => {
    if (event.target === modal) modal.style.display = 'none';
  });
});

(function() {
    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.top = '20px';
    popup.style.right = '20px';
    popup.style.width = '300px';
    popup.style.padding = '15px';
    popup.style.background = '#f9f9f9';
    popup.style.border = '1px solid #ccc';
    popup.style.borderRadius = '5px';
    popup.style.boxShadow = '0px 4px 6px rgba(0,0,0,0.1)';
    popup.innerHTML = `
        <h3>ツール情報</h3>
        <p>アカウント作成日: 2020-01-01</p>
        <p>現在の日付: ${new Date().toLocaleDateString()}</p>
    `;
    const closeButton = document.createElement('button');
    closeButton.textContent = '閉じる';
    closeButton.style.marginTop = '10px';
    closeButton.onclick = () => document.body.removeChild(popup);
    popup.appendChild(closeButton);
    document.body.appendChild(popup);
})();

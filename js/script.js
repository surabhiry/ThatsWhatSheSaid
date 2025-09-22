const gallery = document.getElementById('gallery');
const images = gallery.querySelectorAll('img');
const galleryWidth = gallery.clientWidth;
const galleryHeight = gallery.clientHeight;


  
  function openPopup(htmlFile, title) {
    const container = document.getElementById("popup-container");
  
    // Create unique popup ID
    const id = "popup-" + title.replace(/\s/g, "-");
  
    let existing = document.getElementById(id);
    if (!existing) {
      // Create popup dynamically
      const popup = document.createElement("div");
      popup.classList.add("popup");
      popup.id = id;
      popup.innerHTML = `
        <div class="popup-header">
          <span>${title}</span>
          <span class="close-btn" onclick="closePopup('${id}')">&times;</span>
        </div>
        <div class="popup-body">
          <iframe src="${htmlFile}"></iframe>
        </div>
      `;
      container.appendChild(popup);
    }
  
    // Show the popup
    document.getElementById(id).style.display = "block";
  }
  
  function closePopup(id) {
    document.getElementById(id).style.display = "none";
  }
  
  

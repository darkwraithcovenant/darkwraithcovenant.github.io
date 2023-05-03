window.onload = function() {
    // Select all icons
    let icons = document.querySelectorAll('.icon');
    let currentOpenIcon = null; // Store the currently open icon's class
  
    // Loop through icons and add event listeners
    icons.forEach(function(icon) {
      icon.addEventListener('click', function() {
        // Get the class list of the clicked icon
        let classList = this.classList;
        let windowDiv = document.querySelector('.window');
        document.getElementById('close').addEventListener('click', function() {
          document.querySelector('.window').style.display = 'none';
          currentOpenIcon = null; // Reset the currently open icon when the window is closed
        });
  
        // If the clicked icon is the same as the currently open one, do nothing
        if (classList.contains(currentOpenIcon)) {
          return;
        }
  
        // Check which icon was clicked and set inner HTML accordingly
        if (classList.contains('snatcher')) {
          windowDiv.style.display = 'block';
          currentOpenIcon = 'snatcher'; // Store the opened icon's class
          let text = "Play Snatcher";
          document.querySelector('.title-bar-text').innerHTML = text;
          document.querySelector('.window-body').innerHTML = `
            <iframe src="https://www.retrogames.cc/embed/40752-snatcher.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"> </iframe>
          `;
        }
  
        // Add more conditions for other icons here
        if (classList.contains('test')) {
          windowDiv.style.display = 'block';
          currentOpenIcon = 'test'; // Store the opened icon's class
          let text = "testing";
          document.querySelector('.title-bar-text').innerHTML = text;
          document.querySelector('.window-body').innerHTML = "Don't mind the mess, we are just testing javascript!!!";
        }
        // Add more conditions for other icons here
        if (classList.contains('fiends')) {
          windowDiv.style.display = 'block';
          currentOpenIcon = 'fiends'; // Store the opened icon's class
          let text = "Fiends";
          document.querySelector('.title-bar-text').innerHTML = text;
          document.querySelector('.window-body').innerHTML = `
          <iframe src="https://darkwraithcovenant.com/fiends" width="800" height="600" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="yes"> </iframe>

          ` ;
        }
        if (classList.contains('blog')) {
            windowDiv.style.display = 'block';
            currentOpenIcon = 'blog'; // Store the opened icon's class
            let text = "DWC Blog";
            document.querySelector('.title-bar-text').innerHTML = text;
            document.querySelector('.window-body').innerHTML = `
              <iframe src="https://darkwraithcovenant.com/blog" width="800" height="600" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="yes"> </iframe>
            `;
        }

        if (classList.contains('youtube')) {
          windowDiv.style.display = 'block';
          currentOpenIcon = 'youtube'; // Store the opened icon's class
          let text = "Youtube";
          document.querySelector('.title-bar-text').innerHTML = text;
          document.querySelector('.window-body').innerHTML = `
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3bP4ZFvVcy4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          `;
        }        

        


      });
    });
  };
  